import { forwardRef } from 'react'
import { Input } from '@theme-ui/components'

import styles from './style'

const InputBar = forwardRef(function InputBar(
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
) {
    return (
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
})

export default InputBar
