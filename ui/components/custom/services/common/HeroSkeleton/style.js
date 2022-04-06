const styles = {
    container: {
        maxWidth: 'maxContainer',
    },
    grid: {
        display: 'grid',
        gridTemplateColumns: [null, null, null, null, '3fr 2fr'],
        gridColumnGap: 13,
        gridRowGap: 9,
        alignItems: 'flex-start',
        pt: 6,
        pb: [13, null, 0],
        bg: 'background', // 'white',
    },
    responsive: {
        gridRow: [null, null, null, null, 'span 2'],
        mt: [null, null, null, null, 11],
        height: ['11em', null, null, null, 'auto'],
        borderRadius: 5,
        overflow: 'hidden',
    },
}

export default styles
