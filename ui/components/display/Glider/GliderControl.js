/** @jsx jsx */
import { jsx } from '@theme-ui/core'
import { useState } from 'react'
import { a, useTransition } from 'react-spring'
import { Icon } from '~@/general'

import { gliderControlStyles } from './style'

const GliderControl = ({ color = 'accent.base', control = {} }) => {
    const isPlaying = control.current ? control.current.isPlaying : () => true
    const togglePlay = control.current ? control.current.togglePlay : () => ({})

    const [toggle, set] = useState(isPlaying())

    const transition = useTransition(toggle, {
        from: { position: 'absolute', opacity: 0, transform: 'scale(0.8)' },
        enter: { opacity: 1, transform: 'scale(1)' },
        leave: { opacity: 0, transform: `scale(0.5)` },
    })

    const handleClick = () => {
        togglePlay()
        set(isPlaying())
    }

    return (
        <div className="glider--control" sx={gliderControlStyles.wrapper}>
            {transition((style, toggleItem) =>
                toggleItem ? (
                    <a.div style={style}>
                        <button type="button" sx={gliderControlStyles.toggle(color)} onClick={handleClick}>
                            <Icon name="stop" />
                        </button>
                    </a.div>
                ) : (
                    <a.div style={style}>
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
