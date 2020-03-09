/** @jsx jsx */
import { useRef, useEffect, useCallback } from 'react'
import { useSprings, a } from 'react-spring'
import { useWheel, useDrag } from 'react-use-gesture'
import { jsx } from '@theme-ui/core'
import * as animations from './animation'
import { clamp } from '~lib/utils'
import styles from './style'

const Carousel = ({
    items,
    animation,
    visible,
    infinite,
    selected,
    goto,
    direction,
    itemOffset,
    itemWidth,
    children,
    onSelect,
}) => {
    // Internal variables
    const isStackAnimation = animation === 'stack'
    const _width = isStackAnimation ? itemWidth : 100 / (visible + itemOffset)
    const _itemsCount = items.length
    const _lastItem = _itemsCount - 1
    const _animation = animations[`${animation}Animation`]
    const isInfinite = infinite || isStackAnimation

    // Current scroll position index
    const scrollPosIndexRef = useRef(selected)
    // Peek threshold
    const PEEK_THRESHOLD = _width / 4
    // Drag threshold
    const DRAG_THRESHOLD = _width / 3
    // Swipe Time Interval threshold in ms
    const SWIPE_INTERVAL_THRESHOLD = 400
    // Last swipe occurrence
    const swipeTimeStampRef = useRef(0) // performance.now())
    // Each new wheel
    const isNewWheelRef = useRef(false)
    // Threshold swipe to scroll more items
    const WHEEL_VELOCITY_THRESHOLD = 2
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

    // Initial Animation
    // StackAnimation is cyclic/infinite
    const [springs, set] = useSprings(_itemsCount, i => ({
        from: { x: visible, o: visible },
        to: { ...getAnimatedValues(i), peek: 0 },
        immediate: isStackAnimation ? i === (scrollPosIndexRef.current - 1 + _itemsCount) % _itemsCount : true,
    }))

    // External action triggers animation eg prev/next buttons
    useEffect(() => {
        if (isStackAnimation) return
        // scroll animation
        scrollPosIndexRef.current = changeScrollPosIndex(scrollPosIndexRef.current, direction)

        set(i => {
            const { x, z, o } = getAnimatedValues(i)

            return {
                x,
                z,
                o,
                immediate: n => (x <= -1 && direction < 0) || (x >= visible && direction > 0),
            }
        })
    }, [changeScrollPosIndex, getAnimatedValues, direction, isStackAnimation, selected, visible, set])

    // Touch gesture triggers animation
    const onDrag = ({
        down,
        distance,
        args: [index],
        movement: [mx],
        swipe: [swipeX],
        direction: [xDir],
        timeStamp,
        last,
        cancel,
        tap,
        elapsedTime,
    }) => {
        let peek // Peek or drag offset
        let canceled = false
        const noSwipe = swipeX === 0 // Detect no swipe
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
            if (!isStackAnimation) return goto(index)
            return // do nothing
        }
        // Swiping scrolls the carousel
        if (Math.abs(swipeX)) {
            // stackAnimation - swipe the selected item to scroll
            if (last && _isSelectedStackItem) {
                // Debounce swipes
                if (timeStamp - swipeTimeStampRef.current < SWIPE_INTERVAL_THRESHOLD) {
                    cancel((canceled = true))
                    console.log(`${timeStamp - swipeTimeStampRef.current}ms: CANCELED -> `, canceled)
                }
                if (!canceled) {
                    swipeTimeStampRef.current = timeStamp
                    scrollPosIndexRef.current = changeScrollPosIndex(scrollPosIndexRef.current, dir)
                    // sync selected item with current scroll
                    goto(scrollPosIndexRef.current)
                }
                console.log({ timeStamp, swipeX, canceled })
            } else {
                // slideAnimation - any swipe scrolls
                scrollPosIndexRef.current = changeScrollPosIndex(scrollPosIndexRef.current, dir)
            }
        }

        set(i => {
            peek = 0 // initial peek value
            if (isStackAnimation) {
                // For non-swipe gesture, drag first/selected item, peek at the rest
                if (down && index === i) {
                    if (noSwipe && scrollPosIndexRef.current !== i) {
                        peek = PEEK_THRESHOLD
                    }
                    if (noSwipe && scrollPosIndexRef.current === i) {
                        peek = dragPeek
                    }
                }
            } else if (
                down &&
                ((!isInfinite && ((_onStart && i < visible) || (_onEnd && i >= _itemsCount - visible))) || i === index)
            )
                // slideAnimation
                // Drag/peek a touched item and
                // Dragging also shows beginning and end of carousel items is reached.
                peek = dragPeek
            // Gesture animation for each item
            const { x, z, o } = getAnimatedValues(i)

            return {
                x,
                z,
                o,
                peek,
                immediate: n =>
                    (x === -1 && xDir > 0) || (n === 'o' && x === 0) || n === 'z' || (x >= visible && xDir < 0),
                cursor: down ? 'grabbing' : 'grab',
            }
        })
    }

    const onWheel = ({ direction: [xDir], velocity, elapsedTime, distance, first }) => {
        if (first) return (isNewWheelRef.current = true)
        if (isNewWheelRef.current) {
            const dir = xDir < 0 ? -1 : 1 // Direction should either point left or right
            const swipeByOne = velocity > 0 && velocity < WHEEL_VELOCITY_THRESHOLD && elapsedTime <= 50
            const swipeByTwo = velocity >= WHEEL_VELOCITY_THRESHOLD && elapsedTime <= 50
            console.log({ v: velocity, t: elapsedTime, d: distance, s: swipeByOne, first })
            const swipes = swipeByTwo ? 2 : swipeByOne ? 1 : 0
            for (let i = 0; i < swipes; i++) {
                // TODO: Using i + 1 is causing infinite loop
                scrollPosIndexRef.current = changeScrollPosIndex(scrollPosIndexRef.current, dir)
                console.log({ scroll: scrollPosIndexRef.current })
                set(_i => {
                    const { x, z, o } = getAnimatedValues(_i)
                    return {
                        x,
                        z,
                        o,
                        immediate: n => (x <= -1 && xDir < 0) || (x >= visible && xDir > 0),
                        delay: i * 100,
                    }
                })
            }
            isNewWheelRef.current = false
        }
    }

    // Bind gestures
    const bindDrag = useDrag(onDrag, { axis: 'x', swipeVelocity: 0.2, swipeDistance: 20, filterTaps: true })
    const bindWheel = useWheel(onWheel, { enabled: !isStackAnimation })
    console.log('RENDER!')
    return (
        <div sx={styles.carousel} {...bindWheel()}>
            {springs.map((animatedValues, i) => (
                <a.div
                    className="carousel-slide"
                    key={i}
                    {...bindDrag(i)}
                    style={{
                        width: `${_width}%`,
                        touchAction: 'pan-y',
                        ...getAnimationStyle('slideStyle', animatedValues),
                    }}
                >
                    <a.div
                        className={`carousel-slide--item ${!isStackAnimation && i === selected ? 'selected' : ''}`}
                        style={getAnimationStyle('itemStyle', animatedValues)}
                    >
                        {children(items[i], i)}
                    </a.div>
                </a.div>
            ))}
        </div>
    )
}

Carousel.defaultProps = {
    animation: 'slide',
    visible: 2,
    itemWidth: 70,
    itemOffset: 0.2,
    infinite: true,
    selected: 0,
}

export default Carousel
