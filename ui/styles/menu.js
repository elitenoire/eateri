const styles = {
    grid: {
        display: 'grid',
        gridTemplateColumns: ['1fr 1fr', null, 'repeat(auto-fill, minmax(10em, 1fr))'],
        gridColumnGap: '1.5em',
        gridRowGap: '2.5em',
    },
    container: {
        maxWidth: '18em',
        margin: '0 auto',
        textAlign: 'center',
        my: 13,
        px: 4,
    },
}

export default styles
