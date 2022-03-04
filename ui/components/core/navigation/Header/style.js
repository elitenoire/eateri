import { mediaQueries as mq } from '~/theme/tokens/rhythm'

const styles = {
    header: {
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        zIndex: 'header',
        '.headroom': {
            width: 'fluid',
            height: 'header',
            bg: 'primary.base',
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
        height: 'inherit',
        width: 'fluid',
        maxWidth: 'maxContainer',
        margin: '0 auto',
        px: '2%',
        transition: 'box-shadow 0.2s ease-in-out',
    },
    toggleWrap: {
        [mq.tabletL]: {
            ml: '-1.5%',
        },
        'button:first-of-type': {
            display: [null, null, 'none'],
        },
        'button:last-of-type': {
            display: ['none', null, 'inline-flex', null, 'none'],
        },
    },
    logoBox: {
        display: ['none', null, 'inline-flex'],
        mr: [null, null, null, null, 'auto'],
        ml: ['10%', null, null, null, 0],
    },
    navlinks: {
        mr: [null, null, null, null, '5%'],
        [mq.tabletL]: {
            position: 'absolute',
            bg: 'white',
            top: ({ sizes }) => `calc(${sizes.header} + 2vw)`,
            left: '2%',
            minWidth: '200px',
            zIndex: 'modal',
            boxShadow: 'xl',
            borderRadius: 'default',
            p: '25px 15px',
            border: '1.5px solid',
            opacity: 0,
            visibility: 'hidden',
            pointerEvents: 'none',
            transform: 'scale(0.95)',
            transformOrigin: 'top left',
            '&[data-collapse]': {
                opacity: 1,
                visibility: 'visible',
                transform: 'scale(1)',
                pointerEvents: 'auto',
            },
            '&[data-animating]': {
                transition: '0.25s',
                transitionProperty: 'transform,opacity,visibility',
            },
            ul: {
                fontSize: 3,
                li: {
                    mt: '-1.5px',
                },
            },
        },
        ul: {
            li: {
                display: [null, null, null, null, 'inline-block'],
                px: [null, null, null, null, '10px'],
                mx: [null, null, null, null, '10px'],
                a: {
                    fontWeight: 'bold',
                    textDecoration: 'none',
                },
            },
            'li:not(:last-of-type) a': {
                position: 'relative',
                '::before': {
                    content: [null, null, null, null, '""'],
                    position: 'absolute',
                    left: '50%',
                    bottom: '-5px',
                    width: '70%',
                    height: '2px',
                    backgroundColor: 'primary.light',
                    transformOrigin: 'center',
                    transform: 'translate(-50%, 0) scaleX(0)',
                    transition: 'transform 0.3s ease-in-out',
                },
                ':hover::before': {
                    transform: 'translate(-50%, 0) scaleX(1)',
                },
                [mq.tabletL]: {
                    display: 'flex',
                    flexWrap: 'wrap',
                    alignItems: 'center',
                    padding: '5px 10px 0',
                    borderRadius: 'tiny',
                    ':hover': {
                        bg: 'primary.pale',
                    },
                    '::after': {
                        content: '""',
                        width: '100%',
                        borderBottom: '1.5px solid',
                        borderColor: 'secondary.pale',
                        mt: 'tiny',
                        zIndex: -1,
                    },
                },
            },
            'li:last-of-type a': {
                border: '1.5px solid',
                borderRadius: 'pill',
                padding: '0.35em 1em',
                ':hover': {
                    color: ['white', null, null, null, 'primary.light'],
                    bg: 'secondary.base',
                    boxShadow: 'sm',
                },
                [mq.tabletL]: {
                    display: 'flex',
                    justifyContent: 'center',
                    mt: 4,
                    borderColor: 'accent.base',
                    bg: 'accent.base',
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
