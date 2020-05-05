import React from 'react'
import { Global } from '@emotion/core'
import fluid from 'fluid-system'
import typography from '@styled-system/typography'

const styles = t => ({
    '*,*:after,*:before': {
        boxSizing: 'border-box',
        padding: 0,
        margin: 0,
    },
    '*:focus': {
        outline: 0,
        boxShadow: `0 0 0 3px ${t.colors.focusOutline}`,
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
    'html,body,#__next': {
        height: '100%',
    },
    body: {
        fontFamily: t.fonts.body,
        fontWeight: t.fontWeights.body,
        ...fluid(typography)({
            fontSize: t.fluidBodyFontSize,
            theme: t,
        }),
        lineHeight: t.lineHeights.body,
        scrollbarWidth: 'thin',
        scrollbarColor: `${t.colors.primary.base} ${t.colors.secondary.base}`,
    },
    svg: {
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
        '.s-p': {
            fill: t.colors.secondary.pale,
        },
        '.a-b': {
            fill: t.colors.accent.base,
        },
        '.h-b': {
            fill: t.colors.highlight.base,
        },
    },
    'a,a:active,a:visited': {
        color: 'inherit',
    },
    '.visually-hidden': {
        position: 'absolute',
        width: '1px',
        height: '1px',
        margin: '-1px',
        padding: 0,
        border: 0,
        whiteSpace: 'nowrap',
        overflow: 'hidden',
        clip: 'rect(0px, 0px, 0px, 0px)',
    },
})

const GlobalStyle = () => <Global styles={styles} />

export default GlobalStyle
