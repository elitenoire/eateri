import { Global } from '@emotion/react'
import fluid from 'fluid-system'
import typography from '@styled-system/typography'

const styles = t => ({
    '*,*:after,*:before': {
        boxSizing: 'border-box',
        padding: 0,
        margin: 0,
    },
    '*:focus': {
        // outline: 0,
        // boxShadow: `0 0 0 3px ${t.colors.focusOutline}`,
        outline: `2px dotted ${t.colors.focusOutline}`,
        outlineOffset: '2px',
    },
    '::-webkit-scrollbar': {
        width: '0.7em',
        height: '0.7em',
        background: 'rgba(255,255,255,0.08)',
    },
    '::-webkit-scrollbar-track': {
        background: `linear-gradient(90deg,${t.colors.secondary.hover} 1px,${t.colors.secondary.base} 0)`,
    },
    '::-webkit-scrollbar-thumb': {
        borderRadius: '0.7em',
        boxShadow: 'inset 2px 2px 2px hsla(0,0%,100%,.25), inset -2px -2px 2px rgba(0,0,0,.25)',
        backgroundColor: t.colors.primary.base,
        backgroundImage: t.colors.primary.gradient,
    },
    '::-moz-selection': {
        /* Code for Firefox */
        color: t.colors.textSelectionColor,
        background: t.colors.textSelectionBg,
    },
    '::selection': {
        color: t.colors.textSelectionColor,
        background: t.colors.textSelectionBg,
    },
    'html.height-100': {
        '&,body,#__next,.rft-flipper': {
            height: '100%',
        },
    },
    body: {
        fontFamily: t.fonts.body,
        fontWeight: t.fontWeights.body,
        ...fluid(typography)({
            fontSize: t.fluidBodyFontSize,
            theme: t,
        }),
        lineHeight: t.lineHeights.body,
        WebkitFontSmoothing: 'antialiased',
        WebkitTapHighlightColor: 'transparent',
        textRendering: 'optimizeLegibility',
        scrollbarWidth: 'thin',
        scrollbarColor: `${t.colors.primary.base} ${t.colors.secondary.base}`,
    },
    svg: {
        display: 'block',
        fill: 'currentColor',
        '&.ri-icon': {
            width: '1.2em',
            height: '1.2em',
        },
        '.p-b': {
            fill: t.colors.primary.base,
        },
        '.p-h': {
            fill: t.colors.primary.hover,
        },
        '.p-l': {
            fill: t.colors.primary.light,
        },
        '.p-d': {
            fill: t.colors.primary.dark,
        },
        '.s-b': {
            fill: t.colors.secondary.base,
        },
        '.s-h': {
            fill: t.colors.secondary.hover,
        },
        '.s-p': {
            fill: t.colors.secondary.pale,
        },
        '.a-b': {
            fill: t.colors.accent.base,
        },
        '.a-l': {
            fill: t.colors.accent.light,
        },
        '.a-h': {
            fill: t.colors.accent.hover,
        },
        '.h-b': {
            fill: t.colors.highlight.base,
        },
    },
    'ul,ol': {
        listStyle: 'none',
    },
    'a,a:active,a:visited': {
        color: 'inherit',
    },
    '.underline': {
        backgroundImage: `linear-gradient(180deg, transparent 65%, ${t.colors.primary.base} 0)`,
    },
    '.hover-scale': {
        transition: 'transform 0.7s ease-out',
        ':hover': {
            transform: 'scale(1.1)',
        },
    },
    '.hide-overflow': {
        overflow: 'hidden',
    },
    '.hide': {
        opacity: 0,
        visibility: 'hidden',
        pointerEvents: 'none',
    },
    '.visually-hidden': {
        position: 'absolute',
        width: '1px',
        height: '1px',
        margin: 0,
        padding: 0,
        border: 0,
        whiteSpace: 'nowrap',
        overflow: 'hidden',
        clip: 'rect(1px 1px 1px 1px)',
        clipPath: 'inset(50%)',
    },
})

const GlobalStyle = () => <Global styles={styles} />

export default GlobalStyle
