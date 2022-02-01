const styles = {
    wrapper: {
        position: 'relative',
    },
    svgWave: color => ({
        fill: color,
    }),
    svgCutlery: {
        position: 'absolute',
        bottom: ['0.5em', null, null, '1em', '2em'],
        left: 0,
        right: 0,
        display: 'flex',
        justifyContent: 'center',
        svg: {
            width: ['3.5em', null, null, '4em'],
            mx: 1,
        },
    },
}

export default styles
