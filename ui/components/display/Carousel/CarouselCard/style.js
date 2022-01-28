import { alpha } from '@theme-ui/color'

const styles = {
    carouselCard: {
        display: [null, null, 'flex'],
        alignItems: 'center',
        minWidth: 0,
        height: [null, null, 'inherit'],
        px: [6, null, 2],
        pb: [7, null, 2],
        pt: [null, null, 2],
        fontSize: [null, null, 0],
        borderRadius: ['30', null, '50em 5em 0 0'],
        borderBottom: [null, null, '2px solid transparent'],
        background: t => [
            `linear-gradient(to bottom,${t.colors.secondary.hover},${t.colors.secondary.base})`,
            null,
            'rgba(255,255,255,0.008)',
        ],
        boxShadow: t => `0 1px 10px 1px ${alpha('secondary.base', 0.08)(t)}`,
        transition: 'transform 0.3s, border 0.3s',
        cursor: 'pointer',
        ':active': {
            transform: 'scale(0.95)',
        },
    },
    cardImage: {
        position: 'relative',
        m: 'auto',
        top: ['-2em', null, 0],
        width: ['80%', null, '35%'],
        maxWidth: [null, null, '4.5em'],
    },
    cardContent: {
        textAlign: ['center', null, 'left'],
        mt: ['-1em', null, 0],
        flex: [null, null, 1],
        px: [null, null, 4],
        overflow: 'hidden',
    },
}

export default styles
