import { keyframes } from '@emotion/core'

const upwards = keyframes`
from {
    transform: translateY(-100%);
    opacity: 0;
}
to {
    transform: translateY(0);
    opacity: 1;
}
`

const downwards = keyframes`
from {
    transform: translateY(100%);
    opacity: 0;
}
to {
    transform: translateY(0);
    opacity: 1;
}
`

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
    header: barWidth => ({
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        overflow: 'hidden',
        borderTopLeftRadius: 'inherit',
        zIndex: 'header',
        // height: `${height}${Number.isInteger(height) ? 'px' : ''} !important`,
        '.headroom': {
            width: 'fluid',
            height: 'header',
            bg: ['transparent', null, 'primary.base'],
            transition: 'background 0.2s ease-in-out',
        },
        '.headroom--pinned': {
            boxShadow: '0 4px 24px rgba(0, 0, 0, 0.2)',
            width: `calc(100% - ${barWidth}px)`,
            bg: ['white', null, 'primary.base'],
        },
    }),
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
        ml: ['20%', null, '10%', 0],
        '&:hover .logo': {
            animation: `${spin} 1s linear infinite both`,
        },
        '.logo': {
            size: '2em',
            mr: '0.8em',
        },
        '.logo-text': {
            display: ['none', null, 'initial'],
            width: '6em',
            height: 'auto',
        },
    },
    navlinks: {
        display: ['none', null, null, 'initial'],
        mr: [null, null, null, null, '10%'],
        color: 'textOnPrimary',
        ul: {
            listStyle: 'none',
            '& > li:nth-of-type(odd)': {
                animation: `${upwards} 1s forwards`,
            },
            '& > li:nth-of-type(even)': {
                animation: `${downwards} 1s forwards`,
            },
            '& > li': {
                display: 'inline-block',
                padding: '0 10px',
                margin: '0 10px',
            },
            '& > li:not(:last-of-type) a': {
                transition: 'all 0.3s ease',
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
                borderRadius: '5px',
                padding: '0.3125em 0.625em',
                transition: 'all 0.3s ease-in',
                ':hover': {
                    color: 'textOnSecondary',
                    bg: 'secondary.base',
                    borderWidth: '4.5px',
                    borderColor: 'muted', // 'primary.hover',
                    backgroundClip: 'padding-box',
                    borderRadius: '20px/10px',
                    margin: '-3px',
                    boxShadow: '0 1px 3px 0 rgba(16,22,64,.16)',
                },
            },
            '& > li a': {
                display: 'inline-block',
            },
            a: {
                color: 'inherit',
                textDecoration: 'none',
                fontWeight: 'bold',
            },
        },
    },
    actions: {
        display: 'flex',
        alignItems: 'center',
    },
}

export default styles
