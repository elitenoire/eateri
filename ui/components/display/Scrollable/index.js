import { forwardRef } from 'react'

import styles from './style'

const Scrollable = forwardRef(function Scrollable(
    { as: Tag = 'div', children, hideScroll, flex, gap, pad, cursor, className, sx, ...rest },
    ref
) {
    return (
        <Tag
            ref={ref}
            className={`scrollable ${className || ''}`}
            sx={styles.scrollable({ hideScroll, flex, pad, gap, cursor, sx })}
            {...rest}
        >
            {children}
        </Tag>
    )
})

export default Scrollable
