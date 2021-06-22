const styles = {
    shape: {
        position: 'relative',
        size: '6em',
        borderRadius: 'circle',
        '&[data-shape=diamond]': {
            borderRadius: '20',
            transform: 'rotate(45deg)',
        },
        '&[data-shape=blob0]': {
            borderRadius: 'blob0',
        },
        '&[data-shape=blob1]': {
            borderRadius: 'blob1',
        },
        '&[data-shape=blob2]': {
            borderRadius: 'blob2',
        },
        '&[data-shape=blob3]': {
            borderRadius: 'blob3',
        },
        '&[data-size=sm]': {
            size: '3em',
        },
        '&[data-size=lg]': {
            size: '9em',
        },
    },
    squiggle: {
        position: 'absolute',
        top: 0,
        left: 0,
        size: '200%',
    },
}

export default styles
