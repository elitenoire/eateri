const styles = {
    section: {
        position: 'relative',
        mt: '-9em', // should match pb of section above
        bg: 'background',
    },
    container: {
        pt: 4,
        pb: 6,
    },
    waveSvg: {
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
        padding: 8,
        my: 4,
        mb: 5,
        mx: 'auto',
        borderRadius: 20,
        bg: 'white',
        color: 'black',
        border: t => `1px solid ${t.colors.grayDark}`,
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
            width: ['8em', null, null, null, '10em'],
        },
    },
}

export default styles
