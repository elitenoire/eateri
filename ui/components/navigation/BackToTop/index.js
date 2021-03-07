/** @jsx jsx */
import { jsx } from '@theme-ui/core'
import { useContext, useEffect, useState } from 'react'
import { useScroll } from 'react-use-gesture'
import { useSpring } from 'react-spring'
import { Button } from '~@/general'
import { MenuContext } from '~/context/menu'
import useScrollTo from '~/hooks/useScrollTo'

import ProgressRing from './ProgressRing'

import styles from './style'

function BackToTop({ color = 'highlight', offset = 50 }) {
    const { pageScrollRef } = useContext(MenuContext)
    const { linkScroll } = useScrollTo()

    const [show, setShow] = useState(false)

    const [{ scroll, max }, set] = useSpring(() => ({
        from: { scroll: 0, max: 0 },
        to: { scroll: 0, max: 0 },
        immediate: true,
    }))

    const bind = useScroll(
        ({
            event: {
                target: { scrollTop, scrollHeight, clientHeight },
            },
        }) => {
            setShow(scrollTop > offset)
            set({ scroll: scrollTop, max: scrollHeight - clientHeight, immediate: key => key === 'max' })
        },
        {
            domTarget: pageScrollRef,
        }
    )
    useEffect(bind, [bind])

    return (
        <div sx={styles.wrapper} data-show-progress={show ? '' : null}>
            <ProgressRing
                color={color}
                value={scroll}
                max={max}
                aria-label="Page scroll progress"
                sx={styles.progressRing}
            />
            <Button href="#" color={color} icon="arrowup" ariaLabel="Back to Top" link onClick={linkScroll} />
        </div>
    )
}

export default BackToTop
