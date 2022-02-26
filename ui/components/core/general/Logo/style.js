import { keyframes } from '@emotion/react'

const spin = keyframes`
0% {
	transform: rotate(0) scale(1);
}
50% {
	transform: rotate(180deg) scale(1.3);
}
100% {
	transform: rotate(360deg) scale(1);
}
`

const styles = {
    logoBox: {
        display: 'inline-flex',
        '&[data-animated]:hover .logo': {
            animation: `${spin} 1s linear infinite both`,
        },
        '.logo': {
            size: '2em',
        },
        '.logo-text': {
            width: '6em',
            height: 'auto',
            ml: '0.8em',
        },
    },
    primary: {
        '#logoBgGradient #logoLightStop': {
            stopColor: t => t.colors.primary.base,
        },
        '#logoBgGradient #logoDarkStop': {
            stopColor: t => t.colors.primary.hover,
        },
        '#logoTopShadow,#logoLeftShadow,#logoRightShadow,#logoForkShadow': {
            fill: 'secondary.base',
            opacity: 0.05,
        },
        '#logoForkOuter': {
            fill: 'secondary.dark',
        },
        '#logoForkInner': {
            fill: 'secondary.base',
        },
    },
    secondary: {
        '#logoBgGradient #logoLightStop': {
            stopColor: t => t.colors.secondary.base,
        },
        '#logoBgGradient #logoDarkStop': {
            stopColor: t => t.colors.secondary.hover,
        },
        '#logoLeftShadow,#logoForkShadow,#logoTopShadow,#logoRightShadow': {
            fill: t => t.colors.secondary.pale,
            opacity: 0.05,
        },
        '#logoForkOuter': {
            fill: 'primary.hover',
        },
        '#logoForkInner': {
            fill: 'primary.base',
        },
    },
}

export default styles
