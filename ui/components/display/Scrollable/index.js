/** @jsx jsx */
import { jsx } from '@theme-ui/core'

import styles from './style'

const Scrollable = ({ children, hideScroll, flex, className, sx, ...rest }) => (
    <div className={`scrollable ${className || ''}`} sx={styles.scrollable({ hideScroll, flex, sx })} {...rest}>
        {children}
    </div>
)

export default Scrollable
