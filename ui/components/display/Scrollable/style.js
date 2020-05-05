const styles = {
    container: hideScroll => ({
        display: 'grid',
        gridAutoFlow: 'column',
        gridTemplateRows: 'auto',
        overflowX: 'auto',
        overflowY: 'hidden',
        ...(hideScroll && {
            overflow: '-moz-scrollbars-none',
            MsOverflowStyle: 'none',
            scrollbarWidth: 'none',
            '::-webkit-scrollbar': {
                width: '0 !important',
                display: 'none',
            },
        }),
    }),
}

export default styles
