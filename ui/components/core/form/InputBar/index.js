import { forwardRef } from 'react'
import { Input as TUIinput } from '@theme-ui/components'

import styles from './style'

export const Input = forwardRef(function Input(
    {
        brand = 'outline',
        color = 'secondary',
        bg,
        borderColor,
        borderColorFocus,
        radius,
        outlineFocus,
        outlineColorFocus,
        textColor,
        placeholderColor,
        placeholderOpacity,
        showFocus,
        ...rest
    },
    ref
) {
    return (
        <TUIinput
            ref={ref}
            sx={
                styles.input({
                    bg,
                    color,
                    borderColor,
                    borderColorFocus,
                    outlineFocus,
                    outlineColorFocus,
                    showFocus,
                    radius,
                    textColor,
                    placeholderColor,
                    placeholderOpacity,
                })[brand]
            }
            {...rest}
        />
    )
})

export const InputBar = forwardRef(function InputBar({ radius, inputRadius, className, children, ...rest }, ref) {
    return (
        <div className={className} sx={styles.inputBar({ radius, inputRadius })}>
            <Input ref={ref} {...rest} />
            <span>{children}</span>
        </div>
    )
})
