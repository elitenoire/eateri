import { useRef, useEffect, useCallback } from 'react'
import { useSpring, useSprings, a } from '@react-spring/web'
import { useWheel, useDrag } from '@use-gesture/react'
import Langour from 'languor'
import useSizer from 'use-resize-observer'
import CarouselCard from './CarouselCard'
import { clamp } from '~/lib/utils'
import * as animations from './animation'
import styles from './style'

// removes inertial scrolling from wheel gesture
// Note - the official example uses lethargy lib but
// it's buggy using track pad hence using langour
const langour = new Langour()

const { compactStyle, expandStyle } = animations

function Carousel({
    animation = 'slide',
    visible = 3,
    selected = 0,
    progressBar = true,
    progressDelay = 500,
    itemOffset,
    itemWidth = 60,
    itemGap,
    items,
    direction,
    goto,
    onSelect,
    isMobile,
}) {
    // Internal variables
    const isSlideAnimation = animation === 'slide'
    const _width = isSlideAnimation ? 100 / visible : itemWidth
    const _totalItems = items.length
    const _showProgressBar = isMobile && progressBar
    const _animation = animations[`${animation}Animation`]

    // Carousel Ref Element
    const carouselEl = useRef()
    // Item animation index
    const motionIndexRef = useRef(selected)
    // Last swipe occurrence
    const swipeTimeStampRef = useRef(0)
    // Swipe Time Interval threshold in ms
    const SWIPE_INTERVAL_THRESHOLD = 400
    // Drag threshold
    const DRAG_THRESHOLD = isSlideAnimation ? (_width * visible) / 2 : _width / 2

    // Type of animation to use
    const getAnimationStyle = (style, animatedValues) =>
        _animation[style]({
            animatedValues,
            visible,
            itemOffset,
            itemWidth: _width / 100,
            itemGap,
        })

    // Set the previous/next item to move to
    const changeMotionIndex = useCallback(
        (index, dir) => clamp(index + dir, 0, _totalItems - (isSlideAnimation ? visible : 1)),
        [_totalItems, visible, isSlideAnimation]
    )

    // Syncs progress bar
    const syncScrollProgress = useCallback(() => ((motionIndexRef.current + 1) / _totalItems) * 100, [_totalItems])

    // resize carousel for shift animation
    const { ref: carouselCardEl, height = 350 } = useSizer()

    // Initial Animations
    const [springs, api] = useSprings(_totalItems, i => ({
        x: 0,
        idx: i - motionIndexRef.current,
    }))

    const [expandSprings, expandSpringsApi] = useSprings(_totalItems, i =>
        i === motionIndexRef.current ? expandStyle : compactStyle
    )

    const [progress, progressApi] = useSpring(() => ({
        from: { width: 0 },
        to: { width: syncScrollProgress() },
        delay: progressDelay,
    }))

    // External action triggers animation eg prev/next buttons
    useEffect(() => {
        if (!isSlideAnimation) return
        // slide animation
        motionIndexRef.current = changeMotionIndex(motionIndexRef.current, direction)

        api.start(i => ({ idx: i - motionIndexRef.current }))
    }, [changeMotionIndex, direction, isSlideAnimation, selected, visible, api])

    // Drag and Wheel gestures trigger animation
    const onDrag = ({
        active,
        args: [index],
        offset: [ox],
        swipe: [swipeX],
        direction: [xDir],
        timeStamp,
        cancel,
        tap,
        elapsedTime,
    }) => {
        let canceled = false
        const dir = xDir > 0 ? -1 : 1 // Direction should either point left or right
        const dragX = Math.abs(ox) <= DRAG_THRESHOLD ? ox : -dir * DRAG_THRESHOLD
        const _isSelectedShiftItem = motionIndexRef.current === index && !isSlideAnimation
        if (tap) {
            console.log(`tap registered in ~~${elapsedTime}ms`)
            if (_isSelectedShiftItem) {
                console.log('Opening product item...', index + 1)
                return onSelect && onSelect(index)
            }
            // TODO: unchanged index still rerenders
            // TODO: pass in goto as onSelect
            if (isSlideAnimation) return goto(index)
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
                motionIndexRef.current = changeMotionIndex(motionIndexRef.current, dir)

                // expand motion for current card
                expandSpringsApi.start(i => (i === motionIndexRef.current ? expandStyle : compactStyle))

                // sync current card with scroll progress
                if (_showProgressBar) {
                    progressApi.start({ width: syncScrollProgress() })
                }
            }
        }

        api.start(i => ({
            idx: i - motionIndexRef.current,
            x: active ? dragX : 0,
        }))
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
                motionIndexRef.current = changeMotionIndex(motionIndexRef.current, dir)
                // expand motion for current card
                expandSpringsApi.start(i => (i === motionIndexRef.current ? expandStyle : compactStyle))
                // sync current card with scroll progress
                if (_showProgressBar) {
                    progressApi.start({ width: syncScrollProgress() })
                }
                api.start(i => ({ idx: i - motionIndexRef.current }))
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
        from: () => [springs[0].x.get(), 0],
    })

    useWheel(onWheel, { target: carouselEl, eventOptions: { passive: false } })

    // functions to apply animation styles
    const _sxProgress = () => ({
        width: progress.width.to(w => `${w}%`),
    })
    const _sxSprings = values => ({
        width: `${_width}%`,
        touchAction: 'pan-y',
        ...getAnimationStyle('slideStyle', values),
    })

    return (
        <div sx={styles.wrapper}>
            <div
                ref={carouselEl}
                className="carousel"
                sx={styles.carousel}
                {...(!isSlideAnimation && { style: { height: height + 32 } })}
            >
                {springs.map((animatedValues, i) => (
                    <a.div className="carousel-slide" key={i} {...bindDrag(i)} style={_sxSprings(animatedValues)}>
                        <a.div
                            className={`carousel-slide--item ${i === motionIndexRef.current ? 'current' : ''} ${
                                i === selected ? 'selected' : ''
                            }`}
                            style={getAnimationStyle('itemStyle', animatedValues)}
                        >
                            <CarouselCard
                                ref={i === motionIndexRef.current ? carouselCardEl : null}
                                data={items[i]}
                                isMobile={isMobile}
                                {...(!isSlideAnimation && { spring: expandSprings[i] })}
                            />
                        </a.div>
                    </a.div>
                ))}
            </div>
            {_showProgressBar && (
                <div sx={styles.progressBar}>
                    <a.div className="progressBar__percent" style={_sxProgress()} />
                </div>
            )}
        </div>
    )
}

export default Carousel
