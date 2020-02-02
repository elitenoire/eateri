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
    'html,body,#__next': {
        height: '100%',
    },
    body: {
        color: t.colors.text,
        backgroundColor: t.colors.background,
        fontFamily: t.fonts.body,
        fontWeight: t.fontWeights.body,
        ...fluid(typography)({
            fontSize: t.fluidBodyFontSize,
            lineHeight: t.fluidBodyLineHeight,
            theme: t,
        }),
    },
    svg: {
        fill: 'currentColor',
        width: '1.2em',
        height: '1.2em',
    },
    'a,a:active,a:visited': {
        color: 'inherit',
    },
    '.sr-only': {
        position: 'absolute',
        width: '1px',
        height: '1px',
        overflow: 'hidden',
        padding: 0,
        clip: 'rect(0, 0, 0, 0)',
        border: 0,
        wordWrap: 'normal',
    },
})

const GlobalStyle = () => <Global styles={styles} />

export default GlobalStyle
