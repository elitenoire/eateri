/** @jsx jsx */
import { jsx } from '@theme-ui/core'
import React from 'react'
import { animated } from 'react-spring'

import { gliderStyles } from './style'

const getTrackTransform = x => ({
    transform: `translateX(${-x}%)`,
})

const getGlideTransform = ({ idx, startIndex, totalGlides }) => {
    const pos = startIndex <= idx ? -startIndex : totalGlides - startIndex
    return {
        transform: `translateX(${pos * 100}%)`,
    }
}

const GliderTrack = ({ index, gap, visibleGlides, innerRef, children, ...rest }) => {
    const totalGlides = React.Children.count(children)
    const tail = totalGlides - visibleGlides
    const trackWidth = 100 / totalGlides

    let startIndex = 0
    let x = 0

    if (tail) {
        startIndex = (totalGlides + ((Math.ceil(index / tail) * tail - tail) % totalGlides)) % totalGlides
        x = trackWidth * (tail + (index % tail))

        if (index >= 0) {
            startIndex = (Math.floor(index / tail) * tail) % totalGlides
            x = trackWidth * (index % tail)
        }
    }

    return (
        <div ref={innerRef} className="glider" sx={gliderStyles.glider} {...rest}>
            <div
                className="glider--track"
                sx={gliderStyles.gliderTrack({ gap, totalGlides, visibleGlides })}
                style={getTrackTransform(x)}
            >
                {React.Children.map(children, (child, idx) => (
                    <div
                        key={idx}
                        className="glider--glide"
                        sx={gliderStyles.glide(gap)}
                        style={getGlideTransform({ idx, startIndex, totalGlides })}
                    >
                        {child}
                    </div>
                ))}
            </div>
        </div>
    )
}

const AnimatedGliderTrack = animated(GliderTrack)

export default AnimatedGliderTrack
