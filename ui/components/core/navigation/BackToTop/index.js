import { useContext, useEffect, useState, useRef } from 'react'
import { useScroll } from '@use-gesture/react'
import { useSpring } from '@react-spring/web'
import { LinkButton } from '~@core/navigation'
import { MenuContext } from '~/context/menu'

import ProgressRing from './ProgressRing'

import styles from './style'

function BackToTop({ color = 'highlight', offset = 50 }) {
    const { isOpen } = useContext(MenuContext)
    const _window = useRef(null)

    const [show, setShow] = useState(false)

    const [{ scroll, max }, api] = useSpring(() => ({
        from: { scroll: 0, max: 0 },
        to: { scroll: 0, max: 0 },
        immediate: true,
    }))

    useEffect(() => {
        _window.current = window
    }, [])

    useScroll(
        ({
            event: {
                target: {
                    documentElement: { scrollHeight, clientHeight },
                },
            },
            xy: [, y],
        }) => {
            setShow(y > offset)
            api.start({ scroll: y, max: scrollHeight - clientHeight, immediate: key => key === 'max' })
        },
        {
            target: _window,
        }
    )

    if (isOpen) return null

    return (
        <div sx={styles.wrapper} data-show-progress={show ? '' : null}>
            <ProgressRing
                color={color}
                value={scroll}
                max={max}
                aria-label="Page scroll progress"
                sx={styles.progressRing}
            />
            <LinkButton href="#" color={color} m="tiny" icon="arrowup" ariaLabel="Back to Top" offset={0} />
        </div>
    )
}

export default BackToTop
