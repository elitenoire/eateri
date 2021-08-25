const styles = {
    wrapper: {
        position: 'relative',
        '&[data-hoverable] > div': {
            transition: 'transform 0.4s ease-out, box-shadow 0.5s ease-out',
            backfaceVisibility: 'hidden',
            transformStyle: 'preserve-3d',
        },
        '&[data-hoverable]:hover > div': {
            transform: 'scale(1.05)',
            boxShadow: 'xl',
        },
        '.link-block': {
            position: 'relative',
            zIndex: 1,
        },
    },
    link: {
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
    },
}

export default styles
