import { alpha } from '@theme-ui/color'

export default {
    buttons: {
        brands: {
            solid: ({ color }) => ({
                '&,&:disabled:hover,&[aria-disabled="true"]:hover': {
                    bg: `${color}.base`,
                    borderColor: `${color}.base`,
                    color: `textOn${color.charAt(0).toUpperCase() + color.slice(1)}`,
                },
                '&:hover': {
                    bg: `${color}.hover`,
                    borderColor: `${color}.hover`,
                    boxShadow: t => `0 0.5em 0.7em -0.3em ${alpha(`${color}.hover`, 0.7)(t)}`,
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
            outline: ({ color, borderless }) => ({
                position: 'relative',
                '&,&:disabled:hover,&[aria-disabled="true"]:hover': {
                    bg: 'transparent',
                    color: `${color}.base`,
                    borderColor: borderless ? 'transparent' : `${color}.base`,
                },
                '&:hover': {
                    bg: `${color}.base`,
                    color: `textOn${color.charAt(0).toUpperCase() + color.slice(1)}`,
                    boxShadow: t => `0 0.5em 0.7em -0.3em ${alpha(`${color}.hover`, 0.7)(t)}`,
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
                '&:hover::after': {
                    transform: 'scaleX(1)',
                    opacity: 1,
                    transition: 'transform 0.3s, opacity 0.3s',
                },
                '&:enabled:not([aria-disabled="true"]):active': {
                    bg: `${color}.hover`,
                },
            }),
            ghost: ({ color, ghostText }) => ({
                bg: 'transparent', // 'ghost',
                borderColor: 'transparent', // 'ghost',
                '&,&:disabled:hover,&[aria-disabled="true"]:hover': {
                    color: `${color}.base`,
                },
                // TODO:
                // alpha(0.02) black for light hues and white for dark hues parent bg
                '&:hover': {
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
            pale: ({ color }) => ({
                color: `${color}.base`,
                '&,&:disabled:hover,&[aria-disabled="true"]:hover': {
                    bg: 'transparent',
                    borderColor: 'transparent',
                },
                '&:hover': {
                    bg: `${color}.pale`,
                    borderColor: `${color}.pale`,
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
        highlight: {
            '&,&:visited': {
                color: 'highlight.base',
            },
            '&:hover,&:active': {
                color: 'highlight.base',
                bg: 'highlight.pale',
            },
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
        title: {
            fontFamily: 'title',
        },
        block: {
            fontWeight: 'heading',
            textTransform: 'uppercase',
            letterSpacing: 'wider',
            fontSize: 0,
        },
    },
    cards: {
        services: {
            display: 'flex',
            padding: 5,
            borderRadius: 'tiny',
            boxShadow: 'sm',
            cursor: 'pointer',
            transition: 'transform 0.4s ease-out, box-shadow 0.5s ease-out',
            backfaceVisibility: 'hidden',
            transformStyle: 'preserve-3d',
            '&:hover': {
                transform: 'scale(1.05)',
                boxShadow: 'xl',
            },
            'p span': {
                display: 'block',
            },
        },
    },
    layout: {
        content: { maxWidth: '35em', mb: 10, textAlign: 'center' },
        mini: { maxWidth: '30em' },
        loose: { maxWidth: 'none', width: 'auto', px: ['1.5em', null, '8%', '10%'] },
        tight: { maxWidth: 'none', width: 'auto', px: ['1.5em', null, '8%', '10%', '20%'] },
    },
}
