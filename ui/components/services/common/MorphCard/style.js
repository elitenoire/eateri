const styles = {
    morphCard: {
        position: 'relative',
        borderRadius: 40,
        px: 11,
        pt: 10,
        pb: 6,
        height: '100%',
        overflow: 'hidden',
        '& > div': {
            position: 'relative',
            zIndex: 1,
        },
    },
    cardBg: {
        position: 'absolute',
        top: 0,
        left: 0,
        size: 'fluid',
        borderRadius: 'inherit',
        zIndex: -1,
    },
}

export default styles
