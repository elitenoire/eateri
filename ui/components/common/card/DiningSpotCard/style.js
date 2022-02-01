const styles = {
    card: {
        position: 'relative',
        pt: 9,
    },
    imageWrap: {
        position: 'relative',
        height: ['16em', null, null, '14em'],
        bg: 'gray',
        border: t => `1px solid ${t.colors.gray}`,
        borderRadius: 25,
        overflow: 'hidden',
    },
    noCollapse: {
        overflow: 'auto',
    },
    button: {
        float: 'right',
    },
}

export default styles
