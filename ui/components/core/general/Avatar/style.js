const styles = {
    wrapper: ring => ({
        borderRadius: 'circle',
        ...(ring && {
            boxShadow: ring,
        }),
    }),
}

export default styles
