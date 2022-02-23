const styles = {
    wrapper: {
        display: 'flex',
        flexDirection: 'column',
        bg: 'white',
        borderTopLeftRadius: 'default',
        borderTopRightRadius: 'default',
        borderBottomLeftRadius: '20',
        borderBottomRightRadius: '20',
        marginBottom: 7,
        overflow: 'hidden',
    },
    header: {
        display: 'flex',
        alignItems: 'center',
        px: 3,
        py: 2,
        bg: 'secondary.hover',
        color: 'white',
        transition: 'opacity 0.2s',
        svg: {
            color: 'primary.base',
            transition: 'transform 0.2s',
        },
        ':hover': {
            opacity: 0.965,
            svg: {
                transform: 'scale(1.2)',
            },
        },
    },
    iconWrap: {
        p: 2,
    },
    title: {
        flex: 1,
        mx: 2,
    },
    content: {
        flex: 1,
        display: 'flex',
        columnGap: 4,
        bg: 'grayLight',
        px: 4,
        py: 5,
    },
}

export default styles
