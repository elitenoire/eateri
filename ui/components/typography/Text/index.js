import React from 'react'
import { Text as TUIText } from '@theme-ui/components'
import styles from './style.js'

const _sx = ({ truncate, overflow, weight, size, sx }) => ({
    ...(weight && { fontWeight: weight }),
    ...(size && { fontSize: size }),
    ...(typeof truncate === 'number' && { ...styles.trim, WebkitLineClamp: truncate }),
    ...(truncate === true && styles.truncate),
    ...(overflow && styles.overflow),
    ...sx,
})

const Text = React.forwardRef(({ truncate, overflow, weight, size, sx, children, ...rest }, ref) => (
    <TUIText ref={ref} as="p" sx={_sx({ truncate, overflow, weight, size, sx })} {...rest}>
        {children}
    </TUIText>
))

Text.displayName = 'Text'

export default Text
