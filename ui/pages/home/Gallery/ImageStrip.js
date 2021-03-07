/** @jsx jsx */
import { jsx } from '@theme-ui/core'
import { useContext } from 'react'
import useInView from 'react-cool-inview'
import { MenuContext } from '~/context/menu'

import styles from './style'

function ImageStrip() {
    const { pageScrollRef } = useContext(MenuContext)

    const { ref, inView } = useInView({
        threshold: 0,
        rootMargin: '200px 0px 200px 0px',
        root: pageScrollRef.current,
    })

    return (
        <div ref={ref} sx={styles.stripWrapper}>
            <div data-strip-left data-strip-paused={!inView ? '' : null} sx={styles.strip} />
            <div data-strip-right data-strip-paused={!inView ? '' : null} sx={styles.strip} />
        </div>
    )
}

export default ImageStrip
