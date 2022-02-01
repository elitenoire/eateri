const styles = {
    card: {
        position: 'relative',
        width: '9em',
        display: 'flex',
        alignSelf: 'start',
        flexDirection: 'column',
        '&:hover .food-card--image': {
            transform: 'translateY(-0.5em)',
        },
        '&:hover [data-hover-reveal]': {
            opacity: 1,
            transform: 'translateY(-0.5em)',
        },
        button: {
            position: 'absolute',
            top: '-1.5em',
            right: '-0.5em',
        },
        'p,button': {
            zIndex: 1, // avoids neumorph shadow bleed
        },
    },
    link: {
        display: 'block',
        textDecoration: 'none',
    },
    imageWrap: ({ bg, shadow }) => ({
        size: '8em',
        p: 4,
        borderRadius: 30,
        alignSelf: 'center',
        bg: bg || 'grayLight',
        boxShadow: shadow || 'sm',
        transition: 'transform 0.3s',
    }),
    content: {
        mt: 4,
        px: 3,
        '&[data-hover-reveal]': {
            opacity: 0,
            transform: 'translateY(0)',
            transition: 'opacity 0.3s ease-in, transform 0.3s',
        },
    },
    title: {
        fontSize: [null, null, 1],
        lineHeight: 'tight',
    },
    flexSplit: {
        display: 'flex',
        justifyContent: 'space-between',
    },
}

export default styles
