import { alpha } from '@theme-ui/color'

const baseStyles = ({ radius, textColor, placeholderColor, placeholderOpacity }) => ({
    letterSpacing: 'wider',
    borderRadius: radius || 'tiny',
    ...(textColor && { color: textColor }),
    // transition: 'all 0.35s cubic-bezier(.21,.6,.35,1)',
    transition: 'borderColor 0.2s, boxShadow 0.2s, background-color 0.2s',
    '::placeholder': {
        color: t => placeholderColor || alpha(textColor || 'text', 0.5)(t),
        ...(placeholderOpacity && { opacity: placeholderOpacity }),
    },
})
const styles = {
    input: ({
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
    }) => ({
        solid: {
            ...baseStyles({ radius, textColor, placeholderColor, placeholderOpacity }),
            bg: bg || `${color}.pale`,
            borderColor: bg || `${color}.pale`,
            ':hover,:focus': {
                bg: 'transparent',
                borderColor: borderColorFocus || `${color}.base`,
                boxShadow: t => outlineFocus || `0 0 0 3px ${outlineColorFocus || t.colors[color].light}`,
            },
        },
        outline: {
            ...baseStyles({ radius, textColor, placeholderColor, placeholderOpacity }),
            borderColor: borderColor || `${color}.base`,
            ':focus': {
                borderColor: borderColorFocus || `${color}.base`,
                boxShadow: t => outlineFocus || `0 0 0 3px ${outlineColorFocus || t.colors[color].light}`,
            },
        },
        ghost: {
            ...baseStyles({ radius, textColor, placeholderColor, placeholderOpacity }),
            bg: 'transparent',
            borderColor: 'transparent',
            ...(showFocus && {
                ':focus': {
                    borderColor: borderColorFocus || `${color}.base`,
                    boxShadow: t => outlineFocus || `0 0 0 3px ${outlineColorFocus || t.colors[color].light}`,
                },
            }),
        },
    }),
    inputBar: ({ radius, inputRadius }) => ({
        display: 'flex',
        alignItems: 'center',
        borderRadius: radius || 'pill',
        py: 2,
        px: 3,
        input: {
            flex: 1,
            borderRadius: inputRadius || 'inherit',
            px: 4,
        },
        span: {
            ml: 2,
        },
    }),
}

export default styles
