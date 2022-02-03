import menuBg from '~/public/logo-bg.svg'

// Common styles
const pageWrap = {
    height: '100%',
    bg: 'background',
    transformOrigin: '50% 50%',
}

const hideOverflow = {
    position: 'relative',
    height: 'inherit',
    borderRadius: 'inherit',
    zIndex: 0,
}

const styles = {
    container: {
        height: '100%',
        backgroundSize: 'cover',
        background: ({ colors }) =>
            `url('${menuBg}'), linear-gradient(to bottom right, ${colors.secondary.base}, ${colors.secondary.dark})`,
    },
    pageWrap: {
        ...pageWrap,
        borderRadius: 'none',
        '.page-content': {
            ...hideOverflow,
            overflow: ['auto', null, 'initial'],
        },
    },
    pageWrapOpen: {
        ...pageWrap,
        position: 'relative',
        borderRadius: 40,
        cursor: 'pointer',
        zIndex: 'pageWrap',
        boxShadow: 'rgba(0, 0, 0, 0.15) 0px 18px 48px -12px',
        transform: 'translate3d(80%, 0, -200px) !important',
        transition: 'transform 0.5s ease 0s !important',
        overflow: 'initial !important',
        '::before,::after': {
            content: '""',
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            borderRadius: 'inherit',
        },
        '::after': {
            transform: 'translate3d(-8%, 0, -300px) rotateY(5deg)',
            bg: 'primary.pale',
            opacity: 0.4,
            zIndex: -1,
        },
        '::before': {
            transform: 'translate3d(-16%, 0, -600px) rotateY(2.5deg)',
            background: 'rgba(255, 255, 255, 0.1)',
        },
        '.page-content': {
            ...hideOverflow,
            overflow: 'hidden',
            pointerEvents: 'none',
            ':focus': {
                boxShadow: 'none',
            },
        },
    },
    mainStyle: {
        position: 'relative',
        zIndex: 'main',
        bg: 'background',
        pt: 'header',
        // overflow: 'hidden',
    },
}

export default styles
