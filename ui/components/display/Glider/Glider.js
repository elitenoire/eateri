/** @jsx jsx */
import { jsx } from '@theme-ui/core'
import React, { useRef } from 'react'
import GliderTrack from './GliderTrack'
import { useAnimation, useAutoplay, useDragGesture } from './hooks'
import { clamp } from '~/lib/utils'

const Glider = React.forwardRef(
    ({ autoplayInterval, draggable, visibleGlides, gap, onChange, children, ...rest }, ref) => {
        const gliderRef = useRef(null)
        const dragging = useRef(false)

        const totalGlides = React.Children.count(children)
        const { index, animate } = useAnimation({ totalGlides, onChange })

        const autoplay = useAutoplay({ interval: autoplayInterval, index, animate })

        useDragGesture({
            index,
            visibleGlides,
            gap,
            enabled: !!draggable,
            ref: gliderRef,
            animate,
            onStart: () => {
                dragging.current = true
                autoplay.stop()
            },
            onEnd: event => {
                if (!dragging.current) return

                dragging.current = false
                autoplay.start()

                if (!(event instanceof MouseEvent)) return

                event.target.addEventListener(
                    'click',
                    e => {
                        e.preventDefault()
                    },
                    { once: true }
                )
            },
        })

        React.useImperativeHandle(
            ref,
            () => ({
                glideLeft: () => {
                    autoplay.start()
                    animate({ index: Math.floor(index.get() - 1) })
                },
                glideRight: () => {
                    autoplay.start()
                    animate({ index: Math.ceil(index.get() + 1) })
                },
                glideTo: newIndex => {
                    const _index = index.get()
                    const _newIndex = clamp(newIndex, 0, totalGlides - 1)

                    autoplay.start()
                    animate({ index: _index + _newIndex - (_index % totalGlides) })
                },
                isPlaying: autoplay.isPlaying,
                togglePlay: () => {
                    if (autoplay.isPlaying()) {
                        autoplay.enable(false)
                        autoplay.stop()
                    } else {
                        autoplay.enable(true)
                        autoplay.start()
                    }
                },
            }),
            [autoplay, index, animate, totalGlides]
        )

        return (
            <GliderTrack
                innerRef={gliderRef}
                index={index}
                gap={gap}
                visibleGlides={visibleGlides}
                onMouseEnter={autoplay.stop}
                onMouseLeave={autoplay.start}
            >
                {children}
            </GliderTrack>
        )
    }
)

Glider.defaultProps = {
    visibleGlides: 1,
    draggable: true,
    gap: 40,
    autoplayInterval: 3000,
}

Glider.displayName = 'Glider'

export default Glider
