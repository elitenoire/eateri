const styles = {
    cta: {
        position: 'relative',
        bg: 'background',
        overflow: 'hidden',
        maxWidth: 'maxContainer',
    },
    imageWrap: {
        position: 'absolute',
        width: ['35%', null, null, null, '15%'],
        right: ['-13%', null, null, null, 0],
        bottom: ['-10%', null, null, null, '50%'],
        transform: [null, null, null, null, 'translateY(50%)'],
    },
    card: {
        display: 'flex',
        flexDirection: ['column', null, null, null, 'row'],
        alignItems: 'center',
        justifyContent: [null, null, null, null, 'space-between'],
        textAlign: ['center', null, null, null, 'left'],
        py: 13,
        button: {
            fontSize: 4,
        },
    },
    text: {
        flex: 1,
        mb: [3, null, null, null, 0],
        maxWidth: '18em',
        'span:first-of-type': {
            color: 'accent.base',
        },
        'span:last-of-type': {
            color: 'primary.base',
        },
    },
}

export default styles
