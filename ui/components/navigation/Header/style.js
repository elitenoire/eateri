const styles = {
    header: {
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        overflow: 'hidden',
        borderTopLeftRadius: 'inherit',
        zIndex: 'header',
        '.headroom': {
            width: 'fluid',
            height: 'header',
            bg: ['transparent', null, 'primary.base'],
            transition: 'background-color 0.2s ease-in-out',
        },
        '.headroom--pinned': {
            boxShadow: '0 4px 24px rgba(0, 0, 0, 0.2)',
            bg: ['white', null, 'primary.base'],
        },
    },
    container: {
        position: 'relative',
        display: 'flex',
        justifyContent: ['space-between', null, null, null, 'flex-end'],
        alignItems: 'center',
        width: 'fluid',
        height: 'inherit',
        fontSize: '0.8em',
        padding: ['0.2em 2%', null, '0.5em 2%'],
        transition: 'box-shadow 0.2s ease-in-out',
        'svg.logo-text': {
            fill: 'secondary.hover',
        },
        '#toggle-menu': {
            display: [null, null, null, 'none'],
            margin: '-1.5%',
        },
    },
    logoBox: {
        display: 'inline-flex',
        alignItems: 'flex-start',
        mr: [null, null, null, null, 'auto'],
        ml: ['10%', null, null, 0],
        '.logo-text': {
            display: ['none', null, 'initial'],
        },
    },
    navlinks: {
        display: ['none', null, null, 'initial'],
        mr: [null, null, null, null, '10%'],
        color: 'textOnPrimary',
        ul: {
            '& > li': {
                display: 'inline-block',
                padding: '0 10px',
                margin: '0 10px',
                a: {
                    display: 'inline-block',
                    transition: 'all 0.3s ease',
                    fontWeight: 'bold',
                    textDecoration: 'none',
                },
            },
            '& > li:not(:last-of-type) a': {
                position: 'relative',
                '::before': {
                    content: '""',
                    position: 'absolute',
                    left: '50%',
                    bottom: '-5px',
                    width: '110%',
                    height: '2px',
                    backgroundColor: 'muted',
                    transformOrigin: 'center',
                    transform: 'translate(-50%, 0) scaleX(0)',
                    transition: 'transform 0.3s ease-in-out',
                },
                ':hover::before': {
                    transform: 'translate(-50%, 0) scaleX(1)',
                },
            },
            '& > li:last-of-type a': {
                border: '1.5px solid',
                borderRadius: 'pill',
                padding: '0.25em 1em',
                ':hover': {
                    color: 'textOnSecondary',
                    bg: 'secondary.base',
                    borderWidth: '2px',
                    margin: '-0.5px',
                    boxShadow: 'sm',
                },
            },
        },
    },
    actions: {
        display: 'flex',
        alignItems: 'center',
    },
}

export default styles
