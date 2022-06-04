const styles = {
    card: {
        position: 'relative',
        pt: 13,
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
    buttonWrap: {
        display: 'flex',
        justifyContent: 'flex-end',
    },
}

export default styles
