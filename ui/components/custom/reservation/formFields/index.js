import { forwardRef } from 'react'
import { useController } from 'react-hook-form'
import TextareaAutosize from 'react-textarea-autosize'
import { Input } from '@theme-ui/components'
import { Text } from '~@core/typography'
import styles from './style'

import { useStyle } from '../context'

export function FormField({ htmlFor, label, children, error, ...rest }) {
    const { styleProp } = useStyle()
    return (
        <div sx={styles.fieldWrap} data-invalid={error ? '' : null} {...styleProp} {...rest}>
            <label htmlFor={htmlFor} sx={styles.fieldLabel}>
                {label}
            </label>
            {children}
            {error && (
                <Text role="alert" sx={styles.fieldError}>
                    {error}
                </Text>
            )}
        </div>
    )
}

export const FormFieldInput = forwardRef(function FormFieldInput(
    { id, label, placeholder, error, required, ...rest },
    ref
) {
    return (
        <FormField htmlFor={id} label={label} error={error}>
            <Input
                ref={ref}
                sx={styles.fieldInput}
                id={id}
                placeholder={placeholder || label}
                aria-invalid={error ? 'true' : 'false'}
                aria-required={required ? 'true' : null}
                {...rest}
            />
        </FormField>
    )
})
const fieldTextAreaStyle = { ...styles.fieldInput, ...styles.fieldTextarea }

export const FormFieldTextArea = forwardRef(function FormFieldTextArea({ id, name, label, placeholder, ...rest }, ref) {
    return (
        <FormField htmlFor={id} label={label}>
            <TextareaAutosize
                ref={ref}
                sx={fieldTextAreaStyle}
                id={id}
                type="text"
                minRows={3}
                maxRows={8}
                placeholder={placeholder || label}
                cacheMeasurements
                {...rest}
            />
        </FormField>
    )
})

// wraps form section with reacthookform controller
export function Controller({ children, ...rest }) {
    const controls = useController(rest)

    return children(controls)
}
