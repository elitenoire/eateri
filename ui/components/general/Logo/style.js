const styles = {
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
        // '#logoTopShadow,#logoRightShadow': {
        //     fill: 'white',
        //     opacity: 0.2,
        // },
        '#logoLeftShadow,#logoForkShadow,#logoTopShadow,#logoRightShadow': {
            fill: t => t.colors.secondary.pale, // '#D1D3D4',
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
