import { alpha } from '@theme-ui/color'

const styles = {
    frame: {
        position: 'relative',
        width: ['9.5em', null, null, '11em'],
        left: [null, null, null, null, '-4.5em'],
        top: [null, null, null, null, 'calc(-2.25em - 3em)'],
        borderRadius: ['1.5em 1.5em 1.5em 4.5em', null, null, '1.5em 1.5em 1.5em 5em'],
        mx: ['auto', null, null, null, 0],
        mt: [9, null, null, null, 0],
        mb: [9, null, null, null, 0],
        alignSelf: [null, null, null, null, 'flex-start'],
        '::after': {
            position: 'absolute',
            content: '""',
            display: 'block',
            top: '0',
            bottom: '0',
            left: '0',
            right: '0',
            borderRadius: 'inherit',
            bg: alpha('primary.base', 0.15), // rgba(252, 204, 62, 0.15)
        },
        '.m-wrapper': {
            position: 'relative',
            width: 'fluid',
            borderRadius: 'inherit',
            padding: 4,
            background: ({ colors }) => `linear-gradient(to right, ${colors.primary.base}, ${colors.primary.hover})`,
            overflow: 'hidden',
            img: {
                display: 'block',
                borderRadius: 'inherit',
                boxShadow: '0px 14px 28px -2px rgba(0, 0, 0, 0.3)',
            },
        },
        'svg.m': {
            position: 'absolute',
            height: 'auto',
            fill: 'secondary.base',
        },
        'svg.m.m-wing': {
            width: '50%',
        },
        'svg.m.m-wing.m-wing--left': {
            right: '77.5%',
            top: '1em',
            transform: 'rotate(180deg)',
        },
        'svg.m.m-wing.m-wing--right': {
            right: '-27.5%',
            top: '50%',
            path: {
                fill: 'primary.hover',
            },
        },
        'svg.m.m-bean': {
            width: '30%',
            bottom: '-10%',
            right: '80%',
        },
        'svg.m.m-arch': {
            width: '10%',
            right: '-5%',
            top: '-5%',
        },
        // 'svg.m.m-wing.m-wing--left path,svg.m.m-bean path:first-of-type': {
        //     fill: 'primary.base',
        // },
    },
}

export default styles
