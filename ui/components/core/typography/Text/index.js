import { forwardRef } from 'react'
import { Text as TUIText } from '@theme-ui/components'
import { getColor } from '@theme-ui/color'
import styles from './style'

const base = ({
    italic,
    opacity,
    truncate,
    overflow,
    wordBreak,
    weight,
    size,
    title,
    line,
    align,
    decoration,
    transform,
    spacing,
    stroke,
    underline,
    display,
    fluid,
    __css,
}) => ({
    ...__css,
    ...(display && { display }),
    ...(fluid && { width: '100%' }),
    ...(weight && { fontWeight: weight }),
    ...((size || size === 0) && { fontSize: size }),
    ...(spacing && { letterSpacing: spacing }),
    ...(decoration && { textDecoration: decoration }),
    ...(line && { lineHeight: line }),
    ...(title && { fontFamily: 'title' }),
    ...(italic && { fontStyle: 'italic' }),
    ...(align && { textAlign: align }),
    ...(transform && { textTransform: transform }),
    ...((opacity || opacity === 0) && { opacity }),
    ...(wordBreak && { wordBreak: 'break-Word' }),
    ...(typeof truncate === 'number' && {
        ...styles.trim,
        WebkitLineClamp: truncate,
    }),
    ...(truncate === true && styles.truncate),
    ...(overflow && styles.overflow),
    ...(stroke && {
        WebkitTextFillColor: 'transparent',
        WebkitTextStrokeWidth: '1px',
    }),
    ...(underline && {
        backgroundImage: t => `linear-gradient(180deg,transparent 65%,${getColor(t, underline)} 0)`,
    }),
})

export const Text = forwardRef(function Text(
    {
        italic,
        opacity,
        truncate,
        overflow,
        wordBreak,
        weight,
        size,
        title,
        line,
        align,
        decoration,
        transform,
        spacing = 'wide',
        stroke,
        underline,
        display,
        fluid,
        __css,
        ...rest
    },
    ref
) {
    return (
        <TUIText
            ref={ref}
            as="p"
            {...rest}
            __css={base({
                italic,
                opacity,
                truncate,
                overflow,
                wordBreak,
                weight,
                size,
                title,
                line,
                align,
                decoration,
                transform,
                spacing,
                stroke,
                underline,
                display,
                fluid,
                __css,
            })}
        />
    )
})
