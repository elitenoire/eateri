/** @jsx jsx */
import { jsx } from '@theme-ui/core'
import { a, useTransition } from 'react-spring'
import { Icon } from '~@/general'
import { usePlay } from './hooks'

import { gliderControlStyles } from './style'

const stopPropagation = e => e.stopPropagation()

const GliderControl = ({ color = 'accent.base' }) => {
    const { isPlaying, togglePlay } = usePlay()

    const transitions = useTransition(isPlaying, null, {
        from: { position: 'absolute', opacity: 0, transform: 'scale(0.8)' },
        enter: { opacity: 1, transform: 'scale(1)' },
        leave: { opacity: 0, transform: `scale(0.5)` },
    })

    const handleClick = () => {
        if (togglePlay) {
            togglePlay()
        }
    }

    return (
        <div
            className="glider--control"
            sx={gliderControlStyles.wrapper}
            onMouseEnter={stopPropagation}
            onMouseLeave={stopPropagation}
        >
            {transitions.map(({ item, key, props }) =>
                item ? (
                    <a.div key={key} style={props}>
                        <button type="button" sx={gliderControlStyles.toggle(color)} onClick={handleClick}>
                            <Icon name="stop" />
                        </button>
                    </a.div>
                ) : (
                    <a.div key={key} style={props}>
                        <button type="button" sx={gliderControlStyles.toggle(color)} onClick={handleClick}>
                            <Icon name="play" />
                        </button>
                    </a.div>
                )
            )}
        </div>
    )
}

export default GliderControl
