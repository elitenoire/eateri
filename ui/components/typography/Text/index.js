import React from 'react'
import { Text as TUIText } from '@theme-ui/components'
import styles from './style.js'

const _sx = ({ truncate, overflow, weight, size, line, align, decoration, transform, spacing, sx }) => ({
    ...(weight && { fontWeight: weight }),
    ...((size || size === 0) && { fontSize: size }),
    ...(spacing && { letterSpacing: spacing }),
    ...(decoration && { textDecoration: decoration }),
    ...(line && { lineHeight: line }),
    ...(align && { textAlign: align }),
    ...(transform && { textTransform: transform }),
    ...(typeof truncate === 'number' && { ...styles.trim, WebkitLineClamp: truncate }),
    ...(truncate === true && styles.truncate),
    ...(overflow && styles.overflow),
    ...sx,
})

const Text = React.forwardRef(
    ({ truncate, overflow, weight, size, line, align, decoration, transform, spacing, sx, children, ...rest }, ref) => (
        <TUIText
            ref={ref}
            as="p"
            sx={_sx({ truncate, overflow, weight, size, line, align, decoration, transform, spacing, sx })}
            {...rest}
        >
            {children}
        </TUIText>
    )
)

Text.displayName = 'Text'

export default Text
