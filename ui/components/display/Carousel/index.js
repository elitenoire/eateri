import { useRef, useEffect, useCallback } from 'react'
import { useSpring, useSprings, a } from '@react-spring/web'
import { useWheel, useDrag } from '@use-gesture/react'
import Langour from 'languor'
import { clamp } from '~/lib/utils'
import * as animations from './animation'
import styles from './style'

// removes inertial scrolling from wheel gesture
// Note - the official example uses lethargy lib but
// it's buggy using track pad hence using langour
const langour = new Langour()

function Carousel({
    animation = 'slide',
    visible = 2,
    infinite = true,
    selected = 0,
    progressBar = true,
    progressDelay = 500,
    itemOffset = 0.2,
    itemWidth = 60,
    items,
    direction,
    goto,
    onSelect,
    children,
}) {
    // Internal variables
    const isStackAnimation = animation === 'stack'
    const _width = isStackAnimation ? itemWidth : 100 / (visible + itemOffset)
    const _itemsCount = items.length
    const _lastItem = _itemsCount - 1
    const _showProgressBar = isStackAnimation && progressBar
    const _animation = animations[`${animation}Animation`]
    const isInfinite = infinite || isStackAnimation

    // Current scroll position index
    const scrollPosIndexRef = useRef(selected)
    // Peek value
    const peekRef = useRef(0)
    // Peek threshold
    const PEEK_THRESHOLD = _width / 4
    // Drag threshold
    const DRAG_THRESHOLD = _width / 3
    // Swipe Time Interval threshold in ms
    const SWIPE_INTERVAL_THRESHOLD = 400
    // Last swipe occurrence
    const swipeTimeStampRef = useRef(0)
    // Carousel Ref Element
    const carouselEl = useRef()
    // Stack or Swipe config
    const getAnimationStyle = (style, animatedValues) =>
        _animation[style]({
            animatedValues,
            visible,
            itemOffset,
            itemWidth: _width,
        })

    // Values for animation
    const getAnimatedValues = useCallback(
        i => {
            // Last item is -1 for infinite/cyclic carousel
            const _i = isInfinite && _lastItem === i ? -1 : i
            // Current scroll index is always 0
            const _x = _i - scrollPosIndexRef.current
            const x = isInfinite && _x < -1 ? _x + _itemsCount : _x
            // Values are animated independently
            return {
                x, // transform -> translate, scale
                z: x, // zIndex
                o: x, // opacity
            }
        },
        [_itemsCount, _lastItem, isInfinite]
    )

    // Set current scroll index
    const changeScrollPosIndex = useCallback(
        (scrollPos, dir) =>
            isInfinite
                ? (scrollPos + dir + _itemsCount) % _itemsCount
                : clamp(scrollPos + dir, 0, _itemsCount - visible),
        [_itemsCount, isInfinite, visible]
    )

    // Syncs progress bar
    const syncScrollProgress = useCallback(() => ((scrollPosIndexRef.current + 1) / _itemsCount) * 100, [_itemsCount])

    // last item relative to current scroll position index
    // eg: if index 3 is current scroll, index 2 is last item
    const tailItem = (scrollPosIndexRef.current - 1 + _itemsCount) % _itemsCount

    // Initial Animation
    // StackAnimation is cyclic/infinite by default
    const [springs, api] = useSprings(_itemsCount, i => ({
        from: { x: visible, o: visible },
        to: { ...getAnimatedValues(i), peek: peekRef.current },
        immediate: isStackAnimation ? i === tailItem : true,
    }))

    const [progress, progressApi] = useSpring(() => ({
        from: { width: 0 },
        to: { width: syncScrollProgress() },
        delay: progressDelay,
    }))

    // External action triggers animation eg prev/next buttons
    useEffect(() => {
        if (isStackAnimation) return
        // scroll animation
        scrollPosIndexRef.current = changeScrollPosIndex(scrollPosIndexRef.current, direction)

        api.start(i => {
            const { x, z, o } = getAnimatedValues(i)

            return {
                x,
                z,
                o,
                immediate: () => (x <= -1 && direction < 0) || (x >= visible && direction > 0),
            }
        })
    }, [changeScrollPosIndex, getAnimatedValues, direction, isStackAnimation, selected, visible, api])

    // Drag and Wheel gestures trigger animation
    const onDrag = ({
        down,
        distance,
        args: [index],
        movement: [mx],
        swipe: [swipeX],
        direction: [xDir],
        timeStamp,
        cancel,
        tap,
        elapsedTime,
    }) => {
        let canceled = false
        const dir = xDir > 0 ? -1 : 1 // Direction should either point left or right
        const dragPeek = distance <= DRAG_THRESHOLD ? mx : -dir * DRAG_THRESHOLD
        const _isSelectedStackItem = scrollPosIndexRef.current === index && isStackAnimation
        const _onStart = scrollPosIndexRef.current === 0 && xDir > 0
        const _onEnd = scrollPosIndexRef.current === _itemsCount - visible && xDir < 0
        if (tap) {
            console.log(`tap registered in ~~${elapsedTime}ms`)
            if (_isSelectedStackItem) {
                console.log('Opening product item...', index + 1)
                return onSelect && onSelect(index)
            }
            // TODO: unchanged index still rerenders
            // TODO: pass in goto as onSelect
            if (!isStackAnimation) return goto(index)
            // do nothing
            return
        }
        // Swiping scrolls the carousel
        if (Math.abs(swipeX)) {
            // Debounce swipes
            if (timeStamp - swipeTimeStampRef.current < SWIPE_INTERVAL_THRESHOLD) {
                cancel((canceled = true))
            }
            if (!canceled) {
                swipeTimeStampRef.current = timeStamp
                scrollPosIndexRef.current = changeScrollPosIndex(scrollPosIndexRef.current, dir)
                // sync selected stack item with current scroll progress
                if (_showProgressBar) {
                    progressApi.start({ width: syncScrollProgress() })
                }
            }
        }

        api.start(i => {
            peekRef.current = 0 // initial peek value
            if (isStackAnimation) {
                // For non-swipe gesture, drag first/selected item, peek at the rest
                if (down && index === i) {
                    peekRef.current = scrollPosIndexRef.current === i ? dragPeek : PEEK_THRESHOLD
                }
                if (Math.abs(swipeX) && index === i && scrollPosIndexRef.current === i) peekRef.current = dragPeek
            } else if (
                down &&
                ((!isInfinite && ((_onStart && i < visible) || (_onEnd && i >= _itemsCount - visible))) || i === index)
            )
                // slideAnimation
                // Drag/peek a touched item and
                // Dragging also shows when beginning and end of carousel items are reached.
                peekRef.current = dragPeek
            // Gesture animation for each item
            const { x, z, o } = getAnimatedValues(i)
            return {
                x,
                z,
                o,
                peek: peekRef.current,
                immediate: n =>
                    (x === -1 && xDir > 0) || (n === 'o' && x === 0) || n === 'z' || (x >= visible && xDir < 0),
            }
        })
    }

    const onWheel = ({ direction: [xDir, yDir], event, last, memo: wait = false }) => {
        // event can be undefined as the last event is debounced
        if (last) return
        // prevent native browser scroll, stop propagation
        event.preventDefault()
        event.stopPropagation()
        // true - inertia, false - intentional
        const isInertia = langour.check(event)
        if (!isInertia) {
            // wait is going to switch from false to true when an intentional wheel
            // event has been detected
            if (!wait) {
                // up/left/next: dir -> +1, down/right/prev: dir -> -1
                const dir = yDir || xDir
                scrollPosIndexRef.current = changeScrollPosIndex(scrollPosIndexRef.current, dir)
                api.start(_i => {
                    const { x, z, o } = getAnimatedValues(_i)
                    return {
                        x,
                        z,
                        o,
                        // animate only visible items & their prev/next items
                        immediate: () => (x <= -1 && dir < 0) || (x >= visible && dir > 0),
                    }
                })
            }
            return true // will set to wait to true in the next event frame
        }
        return false // will set to wait to false in the next event frame
    }

    // bind and use gestures
    const bindDrag = useDrag(onDrag, {
        axis: 'x',
        swipe: {
            velocity: 0.2,
            distance: 20,
        },
        filterTaps: true,
    })

    useWheel(onWheel, { target: carouselEl, eventOptions: { passive: false }, enabled: !isStackAnimation })

    // functions to apply animation styles
    const _sxProgress = () => ({
        width: progress.width.to(w => `${w}%`),
    })
    const _sxSprings = values => ({
        width: `${_width}%`,
        touchAction: 'pan-y',
        ...(isStackAnimation && { right: 0 }),
        ...getAnimationStyle('slideStyle', values),
    })

    return (
        <>
            <div ref={carouselEl} className="carousel" sx={styles.carousel}>
                {springs.map((animatedValues, i) => (
                    <a.div className="carousel-slide" key={i} {...bindDrag(i)} style={_sxSprings(animatedValues)}>
                        <a.div
                            className={`carousel-slide--item ${i === selected ? 'selected' : ''}`}
                            style={getAnimationStyle('itemStyle', animatedValues)}
                        >
                            {children(items[i], i)}
                        </a.div>
                    </a.div>
                ))}
            </div>
            {_showProgressBar && (
                <div sx={styles.progressBar}>
                    <a.div className="progressBar__percent" style={_sxProgress()} />
                </div>
            )}
        </>
    )
}

export default Carousel
