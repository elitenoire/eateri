import { forwardRef, Children as ReactChildren } from 'react'
import { animated } from 'react-spring'

import { gliderStyles } from './style'

const getTrackTransform = x => ({
    transform: x.interpolate(value => `translateX(${-value}%)`),
})

const getGlideTransform = ({ idx, startIndex, totalGlides }) => ({
    transform: startIndex.interpolate(value => `translateX(${(value <= idx ? -value : totalGlides - value) * 100}%)`),
})

const GliderTrack = forwardRef(function GliderTrack({ index, gap, visibleGlides, children, ...rest }, ref) {
    const totalGlides = ReactChildren.count(children)
    const tail = totalGlides - visibleGlides
    const trackWidth = 100 / totalGlides

    const startIndex = index.interpolate(value => {
        if (!tail) {
            return 0
        }

        if (value >= 0) {
            return (Math.floor(value / tail) * tail) % totalGlides
        }

        return (totalGlides + ((Math.ceil(value / tail) * tail - tail) % totalGlides)) % totalGlides
    })

    const x = index.interpolate(value => {
        if (!tail) {
            return 0
        }

        if (value >= 0) {
            return trackWidth * (value % tail)
        }

        return trackWidth * (tail + (value % tail))
    })

    return (
        <div ref={ref} className="glider" sx={gliderStyles.glider} {...rest}>
            <animated.div
                className="glider--track"
                sx={gliderStyles.gliderTrack({ gap, totalGlides, visibleGlides })}
                style={getTrackTransform(x)}
            >
                {ReactChildren.map(children, (child, idx) => (
                    <animated.div
                        key={idx}
                        className="glider--glide"
                        sx={gliderStyles.glide(gap)}
                        style={getGlideTransform({ idx, startIndex, totalGlides })}
                    >
                        {child}
                    </animated.div>
                ))}
            </animated.div>
        </div>
    )
})

export default GliderTrack
