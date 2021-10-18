import { useContext, useEffect, useState, useRef } from 'react'
import { useScroll } from 'react-use-gesture'
import { useSpring } from 'react-spring'
import { Button } from '~@/general'
import { MenuContext } from '~/context/menu'
import useScrollTo from '~/hooks/useScrollTo'

import ProgressRing from './ProgressRing'

import styles from './style'

function BackToTop({ color = 'highlight', offset = 50 }) {
    const { isOpen } = useContext(MenuContext)
    const { linkScroll } = useScrollTo()
    const _window = useRef(null)

    const [show, setShow] = useState(false)

    const [{ scroll, max }, set] = useSpring(() => ({
        from: { scroll: 0, max: 0 },
        to: { scroll: 0, max: 0 },
        immediate: true,
    }))

    const bind = useScroll(
        ({
            event: {
                target: {
                    documentElement: { scrollHeight, clientHeight },
                },
            },
            xy: [, y],
        }) => {
            setShow(y > offset)
            set({ scroll: y, max: scrollHeight - clientHeight, immediate: key => key === 'max' })
        },
        {
            domTarget: _window,
        }
    )
    useEffect(() => {
        _window.current = window
    }, [])

    useEffect(bind, [bind])

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
            <Button href="#" color={color} m="tiny" icon="arrowup" ariaLabel="Back to Top" link onClick={linkScroll} />
        </div>
    )
}

export default BackToTop
