import { alpha } from '@theme-ui/color'

const styles = {
    wrapper: {
        position: 'relative',
        display: 'flex',
        padding: 5,
        borderRadius: 'pill',
        maxWidth: '25em',
        mb: 9,
        mx: 'auto',
        background: ({ colors }) => `linear-gradient(to bottom left, ${colors.accent.light}, ${colors.accent.base})`,
        boxShadow: t => ['xl', null, `0 0.5em 0.7em -0.3em ${alpha('accent.base', 0.7)(t)}`],
        '&[data-style]': {
            background: 'whiteFade.35',
        },
        '&[data-overlay]': {
            mb: 6,
            overflow: 'hidden',
        },
    },
    avatar: {
        width: ['3em', null, '4em'],
        alignSelf: 'center',
        mr: 5,
    },
    svgImage: {
        position: 'absolute',
        right: 0,
        bottom: 0,
        width: '30%',
    },
    overlay: {
        position: 'absolute',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        top: 0,
        bottom: 0,
        left: 0,
        right: 0,
        borderRadius: 'inherit',
        bg: t => alpha('accent.base', 0.35)(t),
        backdropFilter: 'blur(5px)',
        '&[data-style]': {
            bg: t => alpha('accent.base', 0.65)(t),
        },
    },
}

export default styles
