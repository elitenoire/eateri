/** @jsx jsx */
import { jsx } from '@theme-ui/core'
import useInView from 'react-cool-inview'

import styles from './style'

function ImageStrip() {
    const { ref, inView } = useInView({
        threshold: 0,
        rootMargin: '200px 0px 200px 0px',
    })

    return (
        <div ref={ref} sx={styles.stripWrapper}>
            <div data-strip-left data-strip-paused={!inView ? '' : null} sx={styles.strip} />
            <div data-strip-right data-strip-paused={!inView ? '' : null} sx={styles.strip} />
        </div>
    )
}

export default ImageStrip
