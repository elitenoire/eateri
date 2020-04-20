import { alpha } from '@theme-ui/color'

export default {
    buttons: {
        types: {
            solid: ({ color }) => ({
                bg: `${color}.base`,
                color: `textOn${color.charAt(0).toUpperCase() + color.slice(1)}`,
                borderColor: `${color}.base`,
                '&:hover': {
                    bg: `${color}.hover`,
                    borderColor: `${color}.hover`,
                    boxShadow: t => `0 0.5em 0.7em -0.3em ${alpha(`${color}.hover`, 0.7)(t)}`,
                },
                '.symbol': {
                    bg: 'secondary.base',
                    color: 'textOnSecondary',
                    boxShadow: t => `0 2px 4px ${alpha('secondary.base', 0.2)(t)}`,
                },
            }),
            outline: ({ color, borderless }) => ({
                position: 'relative',
                bg: 'transparent',
                color: `${color}.base`,
                borderColor: borderless ? 'transparent' : `${color}.base`,
                '&:after': {
                    position: 'absolute',
                    display: 'block',
                    content: '""',
                    top: 0,
                    left: 0,
                    height: '100%',
                    width: '100%',
                    zIndex: -1,
                    borderRadius: 'inherit',
                    opacity: 0,
                    bg: `${color}.base`,
                    transform: 'scaleX(0.7)',
                    transition: 'transform 0.8s, opacity 0.3s',
                },
                '&:hover': {
                    bg: `${color}.base`,
                    color: `textOn${color.charAt(0).toUpperCase() + color.slice(1)}`,
                    boxShadow: t => `0 0.5em 0.7em -0.3em ${alpha(`${color}.hover`, 0.7)(t)}`,
                },
                '&:active': {
                    bg: `${color}.hover`,
                },
                '&:hover:after': {
                    transform: 'scaleX(1)',
                    opacity: 1,
                    transition: 'transform 0.3s, opacity 0.3s',
                },
            }),
            ghost: ({ color, ghostText }) => ({
                bg: 'transparent', // 'ghost',
                color: `${color}.base`,
                borderColor: 'transparent', // 'ghost',
                // TODO:
                // alpha(0.02) black for light hues and white for dark hues parent bg
                '&:hover': {
                    color: `${color}.hover`,
                    boxShadow: ghostText ? 'none' : '0 1px 10px 1px rgba(0, 0, 0, 0.08)',
                },
                '&:active': {
                    boxShadow: ghostText ? 'none' : '0 2px 6px 1px rgba(0, 0, 0, 0.08) inset',
                },
            }),
            pale: ({ color }) => ({
                bg: 'transparent',
                color: `${color}.base`,
                borderColor: 'transparent',
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
        title: {
            fontFamily: 'title',
        },
    },
}
