const styles = {
    card: {
        position: 'relative',
        borderRadius: '20',
        height: 'fluid',
        ':before,:after': {
            position: 'absolute',
            content: '""',
            borderRadius: 'circle',
            borderStyle: 'solid',
            zIndex: 1,
            transition: 'transform 0.4s, opacity 0.4s',
        },
        ':before': {
            size: '2em',
            borderWidth: '0.5em',
            top: '-0.5em',
            left: '80%',
            borderColor: 'primary.light',
        },
        ':after': {
            size: '3em',
            borderWidth: '0.5em',
            bottom: '-1.5em',
            left: '10%',
            borderColor: 'accent.light',
        },
        '&.style-1': {
            ':before': {
                left: '-0.75em',
                top: '15%',
            },
            ':after': {
                left: '70%',
            },
        },
        '&.style-2': {
            ':before': {
                left: '-0.75em',
                top: '70%',
            },
            ':after': {
                bottom: '70%',
                left: '95%',
            },
        },
        img: {
            transition: 'transform 0.7s ease-out',
        },
        ':hover:before, :hover:after': {
            transform: 'scale(0.8)',
            opacity: 0.7,
        },
        ':hover img': {
            transform: 'scale(1.1)',
        },
        '& > span, & > div': {
            borderRadius: 'inherit',
        },
    },
    content: {
        position: 'relative',
        display: 'flex',
        flexDirection: 'column',
        height: 'fluid',
        justifyContent: 'center',
        alignItems: 'center',
        textAlign: 'center',
        bg: 'blackFade.70',
        color: 'white',
        transition: 'opacity 0.7s ease-out',
        ':hover': {
            opacity: 0.2,
        },
    },
}

export default styles
