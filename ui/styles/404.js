const styles = {
    container: {
        display: 'flex',
        maxWidth: 'maxContainer',
        flexDirection: ['column', null, null, null, 'row'],
        py: [9, null, null, null, 13],
        alignItems: 'center',
        justifyContent: 'center',
    },
    doodle: {
        position: 'relative',
        overflow: 'hidden',
        maxWidth: ['20em', null, null, null, '20em'],
        width: 'inherit',

        ':before': {
            position: 'absolute',
            content: '""',
            width: '100%',
            height: '100%',
            bg: 'accent.pale',
            borderRadius: '50%',
            top: '60%',
            left: 0,
            zIndex: -1,
        },
    },
    content: {
        mt: [7, null, null, null, 0],
        ml: [null, null, null, null, 11],
        textAlign: ['center', null, null, null, 'left'],
        transition: 'color 0.3s ease',
        'nav a': {
            textDecorationColor: t => t.colors.primary.base,
            textDecorationStyle: 'wavy',
            textDecorationLine: 'underline',
            mx: 2,
            cursor: 'pointer',
            ':hover': {
                color: 'highlight.base',
            },
        },
    },
    links: {
        fontWeight: 'medium',
        my: 4,
    },
}

export default styles
