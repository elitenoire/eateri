const styles = {
    logoBox: {
        display: 'flex',
        '.logo': {
            size: '2em',
            mr: '0.8em',
        },
        '.logo-text': {
            width: '6em',
            height: 'auto',
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
