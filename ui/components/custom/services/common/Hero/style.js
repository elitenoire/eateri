const styles = {
    wrapper: {
        '&[data-modal]': {
            pt: 8,
        },
    },
    container: {
        maxWidth: 'maxContainer',
    },
    grid: {
        gridTemplateColumns: [null, null, null, null, '3fr 2fr'],
        gridColumnGap: 13,
        gridRowGap: 9,
        pt: 6,
        pb: [13, null, 0],
        bg: 'background', // 'white',
    },
    cardWrap: {
        gridRow: [null, null, null, null, 'span 2'],
        mt: [null, null, null, null, 11],
        width: 'fluid',
        maxWidth: '32em',
    },
    card: {
        position: 'relative',
        flexDirection: [null, null, null, null, 'column'],
        alignItems: ['center', null, null, null, 'initial'],
        justifyContent: ['space-around', null, null, null, 'initial'],
    },
    cardBg: {
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        borderRadius: 'inherit',
        zIndex: -1,
    },
}

export default styles
