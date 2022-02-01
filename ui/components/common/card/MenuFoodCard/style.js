const styles = {
    card: {
        position: 'relative',
        display: 'flex',
        flexDirection: 'column',
        borderWidth: '1.5px',
        borderStyle: 'solid',
        borderColor: ['transparent', null, 'grayMedium'],
        borderRadius: '25',
        mt: 10,
        ':hover': {
            borderColor: 'transparent',
            boxShadow: t => `0 0 0 1.5px ${t.colors.secondary.base}`,
        },
    },
    imageWrap: {
        position: 'relative',
        width: '100%',
        maxWidth: '13em',
        top: '-3em',
        m: 'auto',
        px: '10%',
    },
    content: {
        mt: '-2.5em',
        px: 4,
        pb: 7,
    },
    title: {
        minHeight: [null, null, null, '2.5em'],
        fontSize: [null, null, null, null, 1],
        lineHeight: 1.3,
        mb: 2,
        textDecoration: 'none',
    },
    actionCart: {
        position: 'absolute',
        zIndex: 1,
        bottom: '-1.5em',
        alignSelf: 'center',
    },
    actionFav: {
        position: 'absolute',
        zIndex: 1,
        top: '-1em',
        right: '5%',
        fontSize: [null, null, null, null, 1],
    },
}

export default styles
