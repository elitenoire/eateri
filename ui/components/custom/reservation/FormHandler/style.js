const styles = {
    action: {
        position: 'absolute',
        left: 0,
        bottom: ['0.5em', null, '-1.25em'],
        display: 'flex',
        justifyContent: 'center',
        width: 'fluid',
        '&[data-style]': {
            py: 2,
            position: 'relative',
            bottom: '4em',
            // bottom: 0,
            // backdropFilter: 'blur(1.5px)',
            button: {
                boxShadow: 'high',
                ':hover': {
                    boxShadow: 'low',
                },
            },
        },
    },
}

export default styles
