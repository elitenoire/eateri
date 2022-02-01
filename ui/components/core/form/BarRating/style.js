const styles = {
    wrapper: {
        display: 'flex',
        mb: 3,
    },
    label: {
        flex: '0 1 7ch',
    },
    bar: ({ bg, color, radius }) => ({
        flex: 1,
        mx: 1,
        bg: bg || 'gray',
        ...(radius && { borderRadius: radius }),
        span: {
            display: 'block',
            height: '100%',
            bg: color || 'secondary.base',
            borderRadius: 'inherit',
        },
    }),
    value: {
        textAlign: 'right',
        flex: '0 1 10%',
    },
}

export default styles
