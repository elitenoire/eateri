const styles = {
    section: {
        pl: ['8%', null, null, '10%', '20%'],
        pr: ['8%', null, null, '10%'],
        pt: [13, null, null, null, '8em'],
        bg: 'muted',
    },
    container: {
        display: 'flex',
        flexDirection: ['column-reverse', null, null, null, 'row'],
        position: 'relative',
        borderRadius: [null, null, null, null, 40],
        textAlign: ['center', null, null, null, 'left'],
        py: [null, null, null, null, 9],
        color: ['textLighter', null, null, null, 'textLight'],
        background: t => [null, null, null, null, `linear-gradient(45deg,${t.colors.secondary.pale},transparent)`],
    },
    content: {
        flex: [null, null, null, null, 1],
        py: 2,
        pl: 2,
    },
}

export default styles
