const styles = {
    inputBar: ({ radius, bg, color, borderColor, borderColorFocus, boxShadowFocus, placeholderColor, sx = {} }) => ({
        display: 'flex',
        alignItems: 'center',
        borderRadius: radius || 'pill',
        py: 2,
        px: 3,
        ...sx,
        input: {
            flex: 1,
            borderWidth: '1px',
            borderStyle: 'solid',
            borderColor: borderColor || 'transparent',
            borderRadius: radius || 'pill',
            mr: 2,
            px: 4,
            letterSpacing: 'wider',
            transition: 'border 0.3s ease',
            ...(bg && { bg }),
            ...(color && { color }),
            ...(sx && (sx.input || {})),
            ':focus': {
                borderWidth: '1px',
                borderStyle: 'solid',
                ...(borderColorFocus && { borderColor: borderColorFocus }),
                ...(boxShadowFocus && { boxShadow: boxShadowFocus }),
                ...(sx && sx.input && (sx.input[':focus'] || {})),
            },
            '::placeholder': {
                ...(placeholderColor && { color: placeholderColor }),
                ...(sx && sx.input && (sx.input['::placeholder'] || {})),
            },
        },
    }),
}

export default styles
