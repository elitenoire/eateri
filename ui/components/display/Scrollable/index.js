/** @jsx jsx */
import { jsx } from '@theme-ui/core'

import styles from './style'

const Scrollable = ({ as: Tag, children, hideScroll, flex, pad, className, sx, ...rest }) => (
    <Tag className={`scrollable ${className || ''}`} sx={styles.scrollable({ hideScroll, flex, pad, sx })} {...rest}>
        {children}
    </Tag>
)

Scrollable.defaultProps = {
    as: 'div',
}

export default Scrollable
