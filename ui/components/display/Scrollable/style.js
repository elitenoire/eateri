const styles = {
    scrollable: ({ flex, hideScroll, sx }) => ({
        ...(flex
            ? {
                  display: 'flex',
                  flexWrap: 'nowrap',
              }
            : {
                  display: 'grid',
                  gridAutoFlow: 'column',
                  gridTemplateRows: 'auto',
              }),
        overflowX: 'auto',
        overflowY: 'hidden',
        ...(hideScroll && {
            overflow: '-moz-scrollbars-none',
            MsOverflowStyle: 'none',
            scrollbarWidth: 'none',
            '::-webkit-scrollbar': {
                width: '0 !important',
                display: 'none',
                background: 'transparent',
            },
        }),
        ...sx,
    }),
}

export default styles
