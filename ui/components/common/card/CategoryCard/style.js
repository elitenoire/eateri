import { alpha } from '@theme-ui/color'

const styles = {
    wrapper: {
        position: 'relative',
        size: ['7em', null, '6em'],
        boxShadow: 'md',
        transition: 'transform 0.3s, box-shadow 0.5s',
        overflow: 'hidden',
        '&,img': {
            borderTopLeftRadius: 25,
            borderTopRightRadius: 25,
            borderBottomLeftRadius: [20, null, '1em'],
            borderBottomRightRadius: [20, null, '1em'],
        },
        img: {
            transition: 'transform 0.7s ease-out',
        },
        ':after': {
            position: 'absolute',
            content: '""',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            borderRadius: 'inherit',
            backgroundImage: t =>
                `linear-gradient(rgba(0, 0, 0, 0) 30%,${alpha('secondary.base', 0.2)(t)} 40%,${alpha(
                    'secondary.base',
                    0.8
                )(t)} 80%)`,
            transition: 'opacity 0.3s',
        },
        ':hover': {
            transform: 'translateY(-0.5em)',
            boxShadow: 'xl',
            ':after': {
                opacity: 0,
            },
            img: {
                transform: 'scale(1.1)',
            },
        },
    },
    title: {
        position: 'absolute',
        bottom: 0,
        left: 0,
        right: 0,
        m: 'tiny',
        py: 1,
        px: 3,
        bg: 'whiteFade.30',
        color: 'white',
        fontWeight: 500,
        fontSize: [null, null, 1],
        borderRadius: [30, null, 25],
        zIndex: 1,
    },
}

export default styles
