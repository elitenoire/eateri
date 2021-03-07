const styles = {
    section: {
        // bg: 'muted',
    },
    container: {
        pt: 4,
    },
    waveSvg: {
        display: 'block',
        fill: 'primary.base',
    },
    wrapper: {
        display: 'flex',
        alignItems: [null, null, null, null, 'flex-start'],
        flexDirection: ['column', null, null, null, 'row'],
        maxWidth: '60em',
        margin: '0 auto',
    },
    reviewBlock: {
        position: 'relative',
        flex: 1,
        minWidth: 0,
        mt: [13, null, null, null, '8em'],
        mb: [9, null, null, null, 0],
        '.glider--bullets': {
            textAlign: 'center',
            mb: 7,
        },
    },
    subText: {
        position: 'relative',
        pl: 7,
        opacity: 0.7,
        mb: 4,
        svg: {
            position: 'absolute',
            left: 0,
            top: '-0.35em',
            fontSize: '3.5em',
            color: 'textLight',
            opacity: 0.25,
            zIndex: -1,
        },
    },
    reviewCard: {
        width: '100%',
        maxWidth: '22.5em',
        padding: 9,
        my: 4,
        mb: 5,
        mx: 'auto',
        textAlign: 'center',
        borderRadius: 20,
        bg: 'white',
        color: 'black',
        boxShadow: '0 2px 8px 0 rgba(0,0,0,0.04), 0 2px 20px 0 rgba(0,0,0,0.06)',
        '& > span:first-of-type': {
            color: 'black',
        },
    },
    gliderControlBlock: {
        position: 'absolute',
        right: ['10%', null, null, '15%', '7%'],
        bottom: '5%',
    },
    imageBlock: {
        position: 'relative',
        width: ['50%', null, null, null, '40%'],
        alignSelf: ['center', null, null, null, 'initial'],
        mr: [null, null, null, null, 11],
        ml: [null, null, null, null, '-2em'],
        'svg .m-bean-ring': {
            fill: 'textLight',
            opacity: 0.2,
        },
        'svg .m-bean-bean': {
            fill: 'accent.light',
        },
    },
    gliderIndex: {
        position: 'absolute',
        top: 0,
        opacity: 0.5,
        fontSize: ['8em', null, null, null, '10em'],
        zIndex: 2,
    },
    foodImage: {
        position: 'absolute',
        width: '60%',
        left: '30%',
        bottom: '-10%',
    },
    arrowUp: {
        position: 'relative',
        pb: [null, null, null, null, '1em'],
        svg: {
            position: 'absolute',
            bottom: ['3em', null, null, null, '1em'],
            left: [0, null, null, '15%', '20%'],
            width: ['7em', null, null, null, '10em'],
        },
    },
}

export default styles
