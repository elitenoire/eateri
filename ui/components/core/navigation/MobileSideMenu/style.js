const style = isOpen => ({
    '.bm-cross-button': {
        transform: 'translate(calc(2vw - 100vw + 2.4em), 10px)',
        display: 'flex',
        width: 'initial !important',
        height: 'initial !important',
        padding: '0.4em',
        button: {
            borderRadius: 'inherit',
            ':focus': {
                boxShadow: t => `0 0 0 2px ${t.colors.primary.pale}`,
            },
        },
        svg: {
            width: '1.2em !important',
            height: '1.2em !important',
            margin: '-0.1em',
        },
    },
    '.bm-menu-wrap': {
        top: 0,
        left: 0,
        transition: 'initial !important',
        letterSpacing: 'wider',
    },
    '.bm-menu': {
        width: '100%',
        padding: '2.5em 0.5em 1em',
        bg: 'transparent',
    },
    '.bm-morph-shape': {
        fill: 'transparent',
    },
    '.bm-item-list': {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'flex-start',
        justifyContent: 'center',
        pl: '5%',
        bg: 'transparent',
        opacity: isOpen ? 1 : 0,
        transform: isOpen ? 'scale(1)' : 'scale(0.8)',
        transition: 'opacity 0.3s ease-in 0.1s, transform 0.3s ease-in 0.1s',
    },
    'a.bm-item': {
        textDecoration: 'none',
        margin: '0.25em 0',
        padding: '0.45em 1.3em 0.45em 0.8em',
        backfaceVisibility: 'hidden',
        fontWeight: 'bold',
        ':hover,:focus': {
            transform: 'translateX(1.5em)',
        },
        svg: {
            display: 'inline',
            mr: '0.5em',
            verticalAlign: 'sub',
        },
    },
    '.bm-cross-button,.bm-item': {
        color: 'primary.pale',
        borderRadius: '50px',
        transition: 'transform 0.4s',
        ':hover,:focus': {
            color: 'white',
            bg: 'primary.base',
            boxShadow: 'rgba(0, 0, 0, 0.08) 0px 10px 14px -2px',
        },
    },
})

export default style
