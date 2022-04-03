const styles = {
    section: {
        display: 'flex',
        minHeight: '100vh',
    },
    container: {
        display: 'flex',
        flexDirection: 'column',
    },
    centered: {
        flex: 1,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    },
    decoration: {
        position: 'relative',
        width: 'fluid',
        '& > span': {
            position: 'absolute',
        },
        '& > span:nth-of-type(1)': {
            right: '-30%',
        },
        '& > span:nth-of-type(2)': {
            left: '-40%',
            bottom: '10%',
        },
    },
    logoWrap: {
        textAlign: 'center',
        '.logo-text': {
            display: ['none', null, 'block'],
        },
    },
    frame: {
        position: 'relative',
        borderRadius: 20,
        mt: [4, null, 8],
        mb: 9,
        ':hover:before': {
            transform: [null, null, 'translateX(-0.25em) rotate(-2deg)'],
        },
        ':hover:after': {
            transform: [null, null, 'translateX(0.25em) rotate(2deg)'],
        },
        ':before,:after': {
            position: 'absolute',
            content: '""',
            top: 0,
            borderRadius: 'inherit',
            size: '100%',
            transition: 'transform 0.45s',
        },
        ':before': {
            bg: 'grayMedium',
            transform: 'translateX(-1.5em) rotate(-5deg)',
        },
        ':after': {
            bg: 'primary.pastel',
            transform: 'translateX(1.5em) rotate(5deg)',
        },
    },
    content: {
        position: 'relative',
        zIndex: 1,
        bg: 'white',
        borderRadius: 'inherit',
        boxShadow: [null, null, '2xl'],
    },
}

export default styles
