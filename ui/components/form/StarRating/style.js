const styles = {
    rating: { display: 'flex' },
    star: ({ isReadOnly, starSpacing }) => ({
        mr: starSpacing,
        cursor: `${isReadOnly ? '' : 'pointer'}`,
        transition: 'transform 0.2s',
        backfaceVisibility: 'hidden',
    }),
}

export default styles
