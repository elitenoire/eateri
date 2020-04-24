const styles = {
    section: {
        px: ['8%', null, null, '10%'],
        bg: 'muted',
    },
    container: { maxWidth: '35em', margin: 'auto', mb: 8, textAlign: 'center' },
    intro: {
        textTransform: 'uppercase',
        letterSpacing: 'wider',
    },
    grid: {
        maxWidth: ['30em', null, null, '35em', 'container'], // '33em', // 600px
        gridAutoRows: 'minmax(7em, auto)',
        gridTemplateColumns: [null, null, null, '1fr 1fr', '2.5fr 2.5fr 3fr'],
        m: '0 auto',
        pb: 7,
    },
    gridRowFlex: {
        display: 'flex',
        gridColumn: [null, null, null, 'span 2'],
    },
    cardDine: {
        flexDirection: [null, null, null, 'column'],
        alignItems: ['center', null, null, 'unset'],
        justifyContent: ['space-around', null, null, 'unset'],
        'p span': {
            ml: 7,
        },
    },
    cardTakeouts: {
        flexDirection: ['row-reverse', null, null, 'column'],
        alignItems: ['center', null, null, 'unset'],
        justifyContent: ['space-around', null, null, 'space-between'],
        textAlign: ['right', null, null, 'left'],
    },
    cardDelivery: {
        gridColumn: [null, null, null, 'span 2', 'unset'],
        gridRow: [null, null, null, null, 'span 2'],
        flexDirection: [null, null, null, null, 'column'],
        alignItems: ['center', null, null, null, 'unset'],
        justifyContent: ['space-around', null, null, null, 'space-between'],
        'p span': {
            fontWeight: 'bold',
        },
    },
    cardReserve: {
        flex: 1,
        justifyContent: 'space-between',
        alignItems: 'center',
        svg: {
            size: '2em',
        },
    },
    cardCatering: {
        width: '7em',
        ml: 4,
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
    svgTakeouts: {
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
    divider: {
        border: '1.5px solid',
        borderRadius: '2px',
        my: 1,
    },
}

export default styles
