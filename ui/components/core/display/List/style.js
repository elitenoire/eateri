import { alpha } from '@theme-ui/color'

const styles = {
    list: ({ animated, transformOrigin = 'top' }) => ({
        display: 'flex',
        flexDirection: 'column',
        minWidth: '15em',
        ...(animated && {
            opacity: 0,
            visibility: 'hidden',
            pointerEvents: 'none',
            transform: 'scale(0.95)',
            transformOrigin,
            transition: '0.25s',
            transitionProperty: 'transform,opacity,visibility',
            '&[data-enter]': {
                opacity: 1,
                visibility: 'visible',
                transform: 'scale(1)',
                pointerEvents: 'auto',
            },
        }),
    }),
    listItem: ({ gap, plain, noHover }) => ({
        display: 'flex',
        columnGap: gap || 2,
        alignItems: 'center',
        textDecoration: 'none',
        ...(!plain && {
            mx: 2,
            px: 3,
            py: 2,
            borderRadius: 'inherit',
        }),
        ...(!noHover && {
            ':hover,:focus-visible': {
                bg: 'primary.pale',
                boxShadow: 'none',
            },
        }),
    }),
    itemIcon: ({ iconColor, iconSize, boxed, boxedBg }) => ({
        ...(iconColor && { color: iconColor }),
        ...(iconSize && { fontSize: iconSize }),
        ...(boxed && {
            borderRadius: 'round', // 'inherit',
            bg: t => boxedBg || `${alpha(iconColor || 'text', 0.1)(t)}`,
            padding: 2,
        }),
    }),
    flexFluid: {
        flex: 1,
    },
    content: {
        display: 'flex',
        flexDirection: 'column',
    },
}

export default styles
