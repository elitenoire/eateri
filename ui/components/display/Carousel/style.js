import { alpha } from '@theme-ui/color'

export default {
    carousel: {
        position: 'relative',
        // width: 100vw;
        width: 'auto',
        height: '100%',
        // minHeight: '20vh',
        overflow: 'hidden',

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
        height: '0.5em',
        margin: '1em auto',
        borderRadius: '0.25em',
        bg: t => alpha('secondary.hover', 0.6)(t),
        '.progressBar__percent': {
            height: 'inherit',
            borderRadius: 'inherit',
            bg: 'secondary.base',
        },
    },
}
