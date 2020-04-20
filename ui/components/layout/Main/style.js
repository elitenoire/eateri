import menuBg from '~/public/menu-bg.svg'

// Common styles
const pageWrap = {
    height: '100%',
    bg: 'white',
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
        background: t => `url('${menuBg}'), ${t.colors.primary.gradient}`,
    },
    pageWrap: {
        ...pageWrap,
        borderRadius: 'none',
        '.hide-overflow': {
            ...hideOverflow,
            overflow: 'auto',
        },
    },
    pageWrapOpen: {
        ...pageWrap,
        position: 'relative',
        borderRadius: '30px',
        cursor: 'pointer',
        zIndex: '1300',
        boxShadow: 'rgba(0, 0, 0, 0.15) 0px 18px 48px -12px',
        transform: 'translate3d(80%, 0, -800px) !important',
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
        '::before': {
            transform: 'translate3d(-8%, 0, -300px) rotateY(5deg)',
            bg: 'primary.pale',
            opacity: 0.4,
        },
        '::after': {
            transform: 'translate3d(-16%, 0, -600px) rotateY(2.5deg)',
            background: 'rgba(255, 255, 255, 0.1)',
        },
        '.hide-overflow': {
            ...hideOverflow,
            overflow: 'hidden',
            pointerEvents: 'none',
            ':focus': {
                boxShadow: 'none',
            },
        },
    },
    mainStyle: {
        pt: 'header',
        background: t => `linear-gradient(to left, ${t.colors.primary.base} 90%, ${t.colors.primary.hover})`,
    },
}

export default styles
