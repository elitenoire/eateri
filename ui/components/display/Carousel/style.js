export default {
    carousel: {
        position: 'relative',
        // width: 100vw;
        width: 'auto',
        minHeight: '20vh',
        overflow: 'hidden',

        '.carousel-slide': {
            position: 'absolute',
            height: '100%',
            willChange: 'transform',
        },
        '.carousel-slide--item': {
            height: '90%',
            willChange: 'transform',
        },
    },
}
