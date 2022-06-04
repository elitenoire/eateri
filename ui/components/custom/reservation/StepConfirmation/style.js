import { alpha } from '@theme-ui/color'

const styles = {
    layout: {
        bg: t => alpha('accent.light', 0.35)(t),
        borderRadius: 30,
        padding: 7,
        textAlign: 'center',
        '&[data-style]': {
            bg: 'accent.light',
        },
    },
    iconWrap: {
        display: 'inline-block',
        borderRadius: 'circle',
        padding: 2,
        fontSize: 4,
        bg: 'accent.light',
        '&[data-style]': {
            bg: t => alpha('accent.base', 0.35)(t),
        },
    },
    svgImage: {
        position: 'absolute',
        width: '30%',
        opacity: 0.08,
        right: '-5%',
        bottom: '-10%',
    },
    detailsWrap: {
        position: 'relative',
        bg: 'accent.light',
        borderRadius: 20,
        px: 4,
        py: 7,
        overflow: 'hidden',
        '&[data-style]': {
            bg: t => alpha('accent.base', 0.5)(t),
        },
    },
    details: {
        display: 'flex',
        flexDirection: ['column', null, 'row'],
        justifyContent: 'space-around',
        textAlign: 'left',
    },
    noteWrap: {
        padding: 7,
        mt: 7,
        textAlign: 'left',
        borderRadius: 20,
        bg: t => alpha('accent.base', 0.15)(t),
        '&[data-style]': {
            bg: t => alpha('accent.base', 0.35)(t),
        },
    },
    noteBadge: {
        bg: 'white',
        '&[data-style]': {
            bg: 'whiteFade.80',
        },
    },
}

export default styles
