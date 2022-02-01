import { useGesture } from '@use-gesture/react'

const calcGlideWidth = ({ ref, visibleGlides, gap }) => {
    if (!(ref && ref.current)) return 0

    const { width } = ref.current.getBoundingClientRect()

    return (width - gap * (visibleGlides - 1)) / visibleGlides + gap
}

const useDrag = ({ visibleGlides, enabled, index, gap, ref, animate, onStart, onEnd }) => {
    useGesture(
        {
            onDragStart: () => {
                onStart()
            },
            onDragEnd: ({ event }) => {
                onEnd(event)
            },
            onDrag: ({ down, movement: [mx], velocity: [vx], memo }) => {
                const glideWidth = memo || calcGlideWidth({ ref, visibleGlides, gap })

                let newIndex = -mx / glideWidth

                if (!down) {
                    if (vx > 0.5) {
                        newIndex = Math.floor(newIndex)
                    } else if (vx < -0.5) {
                        newIndex = Math.ceil(newIndex)
                    } else {
                        newIndex = Math.round(newIndex)
                    }

                    animate({
                        index: newIndex,
                        immediate: false,
                    })

                    return 0
                }

                animate({
                    index: newIndex,
                    immediate: true,
                })

                return glideWidth
            },
        },
        {
            target: ref,
            drag: {
                filterTaps: true,
                axis: 'x',
                from: () => {
                    const glideWidth = calcGlideWidth({ ref, visibleGlides, gap })

                    return [-glideWidth * index.get(), 0]
                },
            },
            enabled,
        }
    )
}

export default useDrag
