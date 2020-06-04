/** @jsx jsx */
import { jsx } from '@theme-ui/core'

import styles from './style'

const Scrollable = ({ children, hideScroll, flex, pad, className, sx, ...rest }) => (
    <div className={`scrollable ${className || ''}`} sx={styles.scrollable({ hideScroll, flex, pad, sx })} {...rest}>
        {children}
    </div>
)

export default Scrollable
