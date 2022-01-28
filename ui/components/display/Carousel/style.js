import { alpha } from '@theme-ui/color'

const styles = {
    wrapper: {
        overflow: 'hidden',
        pt: [9, null, 0],
        height: [null, null, '100%'],
    },
    carousel: {
        position: 'relative',
        width: 'auto',
        height: 'inherit',
        '.carousel-slide': {
            position: 'absolute',
            height: '100%',
            willChange: 'transform',
            backfaceVisibility: 'hidden',
        },
        '.carousel-slide--item': {
            height: 'inherit',
            willChange: 'transform',
            backfaceVisibility: 'hidden',
        },
    },
    progressBar: {
        width: '50%',
        height: '0.25em',
        margin: '1.25em auto',
        borderRadius: '0.25em',
        bg: t => alpha('secondary.hover', 0.6)(t),
        '.progressBar__percent': {
            height: 'inherit',
            borderRadius: 'inherit',
            bg: 'secondary.base',
        },
    },
}

export default styles
