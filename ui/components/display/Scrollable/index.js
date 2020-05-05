/** @jsx jsx */
import { jsx } from '@theme-ui/core'

import styles from './style'

const Scrollable = ({ children, hideScroll, className, ...rest }) => (
    <div className={`scrollable ${className || ''}`} sx={styles.container(hideScroll)} {...rest}>
        {children}
    </div>
)

export default Scrollable
