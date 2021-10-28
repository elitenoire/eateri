import { alpha } from '@theme-ui/color'
import { isNumber, readableColor } from '~/lib/utils'

export const variants = {
    buttons: {
        brands: {
            solid: ({ color, link }) => ({
                [`&${link ? ',&:active,&:visited' : ''}`]: {
                    color: `textOn${color.charAt(0).toUpperCase() + color.slice(1)}`,
                },
                '&,&:disabled:hover,&[aria-disabled="true"]:hover': {
                    bg: `${color}.base`,
                    borderColor: `${color}.base`,
                },
                '&:hover': {
                    boxShadow: t => `0 0.5em 0.7em -0.3em ${alpha(`${color}.hover`, 0.7)(t)}`,
                },
                '&:hover,&[data-active]': {
                    bg: `${color}.hover`,
                    borderColor: `${color}.hover`,
                },
                '&:disabled:hover,&[aria-disabled="true"]:hover': {
                    boxShadow: 'none',
                },
                '.symbol': {
                    bg: 'secondary.base',
                    color: 'textOnSecondary',
                    boxShadow: t => `0 2px 4px ${alpha('secondary.base', 0.2)(t)}`,
                },
            }),
            outline: ({ color, borderless, link }) => ({
                position: 'relative',
                '&,&:disabled:hover,&[aria-disabled="true"]:hover': {
                    bg: 'transparent',
                    borderColor: borderless ? 'transparent' : `${color}.base`,
                },
                [`&,${link ? '&:active,&:visited,' : ''}&[aria-disabled="true"]:hover,&:disabled:hover`]: {
                    color: `${color}.base`,
                },
                '&:hover': {
                    boxShadow: t => `0 0.5em 0.7em -0.3em ${alpha(`${color}.hover`, 0.7)(t)}`,
                },
                '&:hover,&[data-active]': {
                    bg: `${color}.base`,
                    color: `textOn${color.charAt(0).toUpperCase() + color.slice(1)}`,
                },
                '&:disabled:hover,&[aria-disabled="true"]:hover': {
                    boxShadow: 'none',
                },
                '&::after': {
                    position: 'absolute',
                    display: 'block',
                    content: '""',
                    top: 0,
                    left: 0,
                    height: '100%',
                    width: '100%',
                    zIndex: -1,
                    borderRadius: 'inherit',
                    bg: `${color}.base`,
                },
                '&::after,&:disabled:hover::after,&[aria-disabled="true"]:hover::after': {
                    transform: 'scaleX(0.7)',
                    opacity: 0,
                    transition: 'transform 0.8s, opacity 0.3s',
                },
                '&:hover::after,&[data-active]::after': {
                    transform: 'scaleX(1)',
                    opacity: 1,
                    transition: 'transform 0.3s, opacity 0.3s',
                },
                '&:enabled:not([aria-disabled="true"]):active': {
                    bg: `${color}.hover`,
                },
            }),
            subtle: ({ color, outline, outlineColor, bg, link }) => ({
                [`&${link ? ',&:active,&:visited' : ''}`]: {
                    color: 'text',
                },
                '&,&:disabled:hover,&[aria-disabled="true"]:hover': {
                    bg: outline ? 'transparent' : 'gray',
                    borderColor: outline ? outlineColor || 'grayDark' : 'gray',
                    ...(bg && { color: 'text' }),
                },
                '&:hover,&[data-active]': {
                    borderColor: outline ? bg || `${color}.base` : 'grayHover',
                    bg: outline ? bg || 'transparent' : 'grayHover',
                    ...(bg && { color: t => readableColor(bg)(t) }),
                    // ...(!outline && { bg: 'grayHover' }),
                },
                ...(outline && {
                    '&:focus': {
                        borderColor: `${color}.base`,
                        boxShadow: t => `0 0 0 3px ${t.colors[color].light}`,
                    },
                }),
            }),
            ghost: ({ color, ghostText, bg, link }) => ({
                bg: bg || 'transparent', // 'ghost',
                borderColor: 'transparent', // 'ghost',
                [`&,${link ? '&:active,&:visited,' : ''}&:disabled:hover,&[aria-disabled="true"]:hover`]: {
                    color: `${color}.base`,
                },
                // TODO:
                // alpha(0.02) black for light hues and white for dark hues parent bg
                '&:hover,&[data-active]': {
                    color: `${color}.hover`,
                    boxShadow: ghostText ? 'none' : '0 1px 10px 1px rgba(0, 0, 0, 0.08)',
                },
                '&:disabled:hover,&[aria-disabled="true"]:hover': {
                    boxShadow: 'none',
                },
                '&:enabled:not([aria-disabled="true"]):active': {
                    boxShadow: ghostText ? 'none' : '0 2px 6px 1px rgba(0, 0, 0, 0.08) inset',
                },
            }),
            pale: ({ color, opaque, link, bg, alpha: _alpha }) => ({
                [`&${link ? ',&:active,&:visited' : ''}`]: {
                    color: _alpha ? color : `${color}.base`,
                },
                '&,&:disabled:hover,&[aria-disabled="true"]:hover': {
                    bg: opaque ? `${color}.pale` : 'transparent',
                    borderColor: opaque ? `${color}.pale` : 'transparent',
                    ...(_alpha && {
                        bg: t => `${alpha(bg || color, isNumber(_alpha) ? _alpha : 0.1)(t)}`,
                        borderColor: 'transparent',
                    }),
                },
                '&:hover,&[data-active]': {
                    bg: opaque ? `${color}.light` : `${color}.pale`,
                    borderColor: opaque ? `${color}.light` : `${color}.pale`,
                    ...(_alpha && {
                        bg: t => `${alpha(bg || color, isNumber(_alpha) ? _alpha + 0.025 : 0.125)(t)}`,
                        borderColor: 'transparent',
                    }),
                    ...(opaque && !_alpha && { color: `black` }),
                },
            }),
        },
        sizes: {
            sm: {
                fontSize: 0,
                py: '0.6em',
            },
            md: {
                fontSize: 2,
            },
            lg: {
                fontSize: 3,
            },
        },
        shapes: {
            round: {
                borderRadius: 'round',
            },
            pill: {
                borderRadius: 'pill',
            },
            icon: {
                borderRadius: 'icon',
            },
            flat: {
                borderRadius: 'none',
            },
        },
    },
    badges: {
        highlight: {
            lineHeight: 'snug',
            pt: 1,
            borderRadius: '5px',
            fontWeight: 'medium',
            color: 'highlight.base',
            bg: 'highlight.pale',
        },
    },
    links: {
        plain: {
            textDecoration: 'none',
        },
        highlight: {
            '&,&:visited': {
                color: 'highlight.base',
            },
            '&:hover,&:active': {
                color: 'highlight.base',
                bg: 'highlight.pale',
            },
        },
        back: {
            display: 'inline-block',
            textDecoration: 'none',
            textTransform: 'uppercase',
            letterSpacing: 'wider',
            fontWeight: 'bold',
            fontSize: 1,
        },
    },
    text: {
        h1: {
            fontSize: 8,
            mb: 2,
        },
        h2: {
            fontSize: 7,
            mb: 2,
        },
        h3: {
            fontSize: 6,
            mb: 2,
        },
        h4: {
            fontSize: 5,
            mb: 2,
        },
        h5: {
            fontSize: 4,
            mb: 4,
        },
        h6: {
            fontSize: 3,
            mb: 4,
        },
        text: {
            fontSize: 2,
            mb: 4,
            fontWeight: 'body',
            lineHeight: 'body',
        },
        small: {
            fontSize: 1,
        },
        tiny: {
            fontSize: 0,
        },
        headline: {
            fontSize: 9,
            my: 2,
        },
        massive: {
            fontSize: 10,
            mb: 2,
        },
        intro: {
            fontSize: 11,
            mb: 2,
            letterSpacing: 'tight',
        },
        title: {
            fontFamily: 'title',
        },
        block: {
            fontWeight: 'heading',
            textTransform: 'uppercase',
            letterSpacing: 'wider',
            fontSize: 0,
        },
        badge: {
            variant: 'text.block',
            padding: '0.5em 2em',
            borderRadius: '1.75em',
            display: 'inline-block',
        },
        badgeLink: {
            variant: 'text.badge',
            position: 'relative',
            ':after': {
                position: 'absolute',
                content: '"🔗"',
                left: 0,
            },
            a: {
                textDecoration: 'none',
            },
        },
    },
    cards: {
        services: {
            display: 'flex',
            padding: 5,
            borderRadius: 'tiny',
            boxShadow: 'sm',
            'p span': {
                display: 'block',
            },
        },
    },
    images: {
        hoverScale: {
            transition: 'transform 0.7s ease-out',
            ':hover': {
                transform: 'scale(1.1)',
            },
        },
    },
    layout: {
        content: { maxWidth: '35em', mb: 10, textAlign: 'center' },
        mini: { maxWidth: '30em' },
        maxi: { maxWidth: 'maxContainer' },
        base: { maxWidth: 'none', width: 'auto', px: 'body' },
        loose: {
            maxWidth: 'none',
            width: 'auto',
            px: ['body', null, '8%', '10%'],
        },
        tight: {
            maxWidth: 'none',
            width: 'auto',
            px: ['body', null, '8%', '10%', '20%'],
        },
    },
}
