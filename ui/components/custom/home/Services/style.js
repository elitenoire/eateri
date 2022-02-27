const styles = {
    section: {
        bg: 'background',
    },
    grid: {
        maxWidth: ['30em', null, null, '35em', 'container'],
        gridAutoRows: 'minmax(7em, auto)',
        gridTemplateColumns: [null, null, null, '1fr 1fr', '2.5fr 2.5fr 3fr'],
        m: '0 auto',
        mb: [null, null, 8],
    },
    gridItem: {
        gridColumn: [null, null, null, 'span 2', 'initial'],
        gridRow: [null, null, null, null, 'span 2'],
    },
    gridRowFlex: {
        display: 'flex',
        gridColumn: [null, null, null, 'span 2'],
        '& > div:first-of-type': {
            flex: 1,
        },
    },
    cardDine: {
        flexDirection: [null, null, null, 'column'],
        alignItems: ['center', null, null, 'initial'],
        justifyContent: ['space-around', null, null, 'initial'],
        bg: 'secondary.hover',
        color: 'textOnSecondary',
        height: '100%',
        'p span': {
            ml: 7,
        },
    },
    cardTakeaway: {
        flexDirection: ['row-reverse', null, null, 'column'],
        alignItems: ['center', null, null, 'initial'],
        justifyContent: ['space-around', null, null, 'space-between'],
        textAlign: ['right', null, null, 'left'],
        bg: 'primary.base',
        height: '100%',
    },
    cardDelivery: {
        flexDirection: [null, null, null, null, 'column'],
        alignItems: ['center', null, null, null, 'initial'],
        justifyContent: ['space-around', null, null, null, 'space-between'],
        bg: 'secondary.light',
        height: '100%',
        'p span': {
            fontWeight: 'bold',
        },
    },
    cardReserve: {
        justifyContent: 'space-between',
        alignItems: 'center',
        bg: 'accent.base',
        svg: {
            size: '2em',
        },
    },
    cardCatering: {
        width: '7em',
        ml: 4,
        bg: 'secondary.base',
        color: 'textOnSecondary',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column',
        fontFamily: 'title',
    },
    cardText: {
        fontSize: [5, null, null, 4],
    },
    svgDine: {
        width: ['30%', null, null, '70%'],
        height: 'auto',
        alignSelf: [null, null, null, 'flex-end'],
    },
    svgTakeaway: {
        width: ['45%', null, null, '90%'],
        height: 'auto',
        alignSelf: [null, null, null, 'center'],
    },
    svgDelivery: {
        width: ['35%', null, null, null, '115%'],
        height: 'auto',
    },
    svgCatering: {
        size: '3em',
        mb: 1,
    },
}

export default styles
