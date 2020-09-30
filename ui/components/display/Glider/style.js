import { alpha } from '@theme-ui/color'

export const bulletStyles = {
    wrapper: {
        userSelect: 'none',
    },
    bullet: color => ({
        size: '0.85em',
        mx: '0.35em',
        border: 'none',
        borderRadius: 'circle',
        appearance: 'none',
        bg: color,
        cursor: 'pointer',
        opacity: 0.25,
        transition: 'all 0.2s ease',
        '&[data-isactive]': {
            width: '2em',
            height: '0.75em',
            borderRadius: '15px',
            opacity: 1,
        },
    }),
}

export const gliderStyles = {
    glider: {
        overflow: 'hidden',
        height: '100%',
        flex: 1,
    },
    gliderTrack: ({ gap, totalGlides, visibleGlides }) => ({
        display: 'flex',
        willChange: 'transform',
        width: `calc(((100% - ${(visibleGlides - 1) * gap}px) / ${visibleGlides} + ${gap}px)*${totalGlides})`,
        height: '100%',
        // touchAction: 'pan-x',
    }),
    glide: gap => ({
        flex: 1,
        willChange: 'transform',
        pr: gap,
    }),
}

export const gliderControlStyles = {
    wrapper: {
        position: 'relative',
        size: '3.5em',
        '& > div': {
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
        },
    },
    toggle: color => ({
        color,
        appearance: 'none',
        bg: 'transparent',
        borderWidth: '1.5px',
        borderStyle: 'dotted',
        borderColor: 'inherit',
        borderRadius: 'circle',
        padding: '0.75em',
        cursor: 'pointer',
        transition: 'box-shadow 0.3s ease',
        '&:hover,:focus': {
            boxShadow: t => `0 0 0 3px ${alpha(color, 0.2)(t)}`,
        },
        svg: {
            display: 'block',
            fontSize: '2em',
        },
    }),
}
