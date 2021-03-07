const styles = {
    wrapper: {
        display: ['none', null, 'block'],
        position: 'fixed',
        bottom: '20px',
        right: '30px',
        zIndex: 'backToTop',
        opacity: 0,
        visibility: 'hidden',
        pointerEvents: 'none',
        transform: 'translateY(15px)',
        transition: 'visibility 0s 0.3s, opacity 0.3s linear, transform 0.3s linear',
        '&[data-show-progress]': {
            opacity: 1,
            visibility: 'visible',
            pointerEvents: 'auto',
            transform: 'translateY(0)',
            transition: 'opacity 0.3s linear, transform 0.3s linear',
        },
        a: {
            position: 'relative',
            zIndex: 1,
            ':hover:not(:active)': {
                transform: 'none !important',
            },
        },
    },
    progressRing: {
        position: 'absolute',
    },
    ringBg: color => ({
        fill: 'transparent',
        stroke: `${color}.base`,
        opacity: 0.35,
    }),
    ringFill: color => ({
        fill: 'transparent',
        stroke: `${color}.hover`,
        // stroke: `textOn${color.charAt(0).toUpperCase() + color.slice(1)}`,
    }),
}

export default styles
