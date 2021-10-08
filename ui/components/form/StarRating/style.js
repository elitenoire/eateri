const styles = {
    rating: { display: 'flex' },
    star: ({ isReadOnly, starSpacing }) => ({
        mr: starSpacing,
        ...(!isReadOnly && {
            transition: 'transform 0.2s',
            backfaceVisibility: 'hidden',
            cursor: 'pointer',
        }),
    }),
}

export default styles
