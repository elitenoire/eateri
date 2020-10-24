/** @jsx jsx */
import { jsx } from '@theme-ui/core'
import { useRef, useEffect, useContext } from 'react'
import { useSpring, a } from 'react-spring'
import { useScroll } from 'react-use-gesture'
import useInView from 'react-cool-inview'
import { MenuContext } from '~/context/menu'

import styles from './style'

const getTransformStyle = animatedValue => ({
    transform: animatedValue.interpolate(value => `translate3d(${value}px,0,0)`),
})

const ImageStrip = () => {
    const { pageScrollRef } = useContext(MenuContext)
    const initialScrollY = useRef(0)

    const [{ toLeft, toRight }, animate] = useSpring(() => ({ toLeft: 0, toRight: 0 }))
    const { ref, inView } = useInView({
        threshold: 0,
        rootMargin: '200px 0px 200px 0px',
        root: pageScrollRef.current,
        onEnter: ({ scrollDirection }) => {
            // Triggered when the target enters the viewport
            if (scrollDirection.vertical === 'up') {
                initialScrollY.current = pageScrollRef.current.scrollTop
            }
        },
    })

    const bind = useScroll(
        ({ xy: [, y] }) => {
            const movement = y - initialScrollY.current

            animate({ toLeft: -movement, toRight: movement })
        },
        {
            domTarget: pageScrollRef,
            enabled: inView,
        }
    )

    useEffect(bind, [bind])

    return (
        <div ref={ref} sx={styles.stripWrapper}>
            <a.div style={getTransformStyle(toLeft)} sx={styles.strip} />
            <a.div style={getTransformStyle(toRight)} sx={styles.strip} />
        </div>
    )
}

export default ImageStrip
