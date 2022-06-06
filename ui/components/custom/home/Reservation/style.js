const styles = {
    section: {
        position: 'relative',
        mt: [4, null, 0],
        pt: [4, null, 7],
        pb: '6em',
        bg: 'accent.base',
    },
    bgPattern: {
        svg: {
            position: 'absolute',
            opacity: 0.8,
        },
        'svg:first-of-type': {
            top: ['20px', null, null, 0],
            height: ['40vw', null, null, '27.5vw'],
            left: 0,
        },
        'svg:last-of-type': {
            right: 0,
            bottom: '3.5em',
            height: ['25vw', null, null, '15vw'],
        },
    },
    arrowDown: {
        position: 'relative',
        pb: 4,
        display: ['none', null, null, 'block'],
        svg: {
            position: 'absolute',
            color: 'secondary.pale',
            right: ['-2em', null, null, null, '-4em'],
            bottom: 0,
            width: ['6em', null, null, null, '7em'],
        },
    },
}

export default styles
