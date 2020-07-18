/** @jsx jsx */
import { jsx } from '@theme-ui/core'
import React from 'react'

import styles from './style'

const Scrollable = React.forwardRef(
    ({ as: Tag, children, hideScroll, flex, gap, pad, className, sx, ...rest }, ref) => (
        <Tag
            ref={ref}
            className={`scrollable ${className || ''}`}
            sx={styles.scrollable({ hideScroll, flex, pad, gap, sx })}
            {...rest}
        >
            {children}
        </Tag>
    )
)

Scrollable.defaultProps = {
    as: 'div',
}

Scrollable.displayName = 'Scrollable'

export default Scrollable
