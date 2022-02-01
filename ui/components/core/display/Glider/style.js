import { alpha, getColor } from '@theme-ui/color'
import { isDark } from '~/lib/utils'

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
        opacity: t => (isDark(getColor(t, color)) ? 0.5 : 0.85),
        transition: 'all 0.2s ease',
        '&:hover,:focus': {
            boxShadow: t => `0 0 0 3px ${alpha(color, 0.25)(t)}`,
        },
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
        touchAction: 'pan-y',
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
        borderStyle: 'dashed',
        borderColor: 'inherit',
        borderRadius: 'circle',
        padding: 3,
        cursor: 'pointer',
        transition: 'color 0.3s ease, box-shadow 0.3s ease',
        '&:hover,:focus': {
            boxShadow: t => `0 0 0 5px ${alpha(color, 0.25)(t)}`,
        },
        svg: {
            fontSize: '5em',
        },
    }),
}
