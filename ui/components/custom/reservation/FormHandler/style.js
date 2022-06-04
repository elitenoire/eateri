const styles = {
    action: {
        position: [null, null, 'absolute'],
        left: [null, null, 0],
        bottom: [null, null, '-1.2em'],
        display: 'flex',
        justifyContent: 'center',
        width: 'fluid',
        mt: ['-0.75em', null, 0],
        mb: [2, null, 0],
        '&[data-sheet]': {
            position: 'relative',
            bottom: '-1.75em',
            button: {
                boxShadow: '0 25px 36px -8px rgba(0,0,0,0.35)',
                ':hover': {
                    boxShadow: '0 12px 30px -12px rgba(0,0,0,0.35)',
                },
            },
        },
    },
}

export default styles
