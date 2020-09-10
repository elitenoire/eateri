/** @jsx jsx */
import { jsx } from '@theme-ui/core'
import React from 'react'
import { Input } from '@theme-ui/components'

import styles from './style'

const InputBar = React.forwardRef(
    (
        {
            radius,
            bg,
            color,
            borderColor,
            borderColorFocus,
            boxShadowFocus,
            placeholderColor,
            className,
            sx,
            children,
            ...rest
        },
        ref
    ) => (
        <div
            className={className}
            sx={styles.inputBar({
                radius,
                bg,
                color,
                borderColor,
                borderColorFocus,
                boxShadowFocus,
                placeholderColor,
                sx,
            })}
        >
            <Input ref={ref} {...rest} />
            {children}
        </div>
    )
)

InputBar.displayName = 'InputBar'

export default InputBar
