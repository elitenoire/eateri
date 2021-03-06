const styles = {
    scrollable: ({ flex, pad, gap, hideScroll, sx }) => ({
        ...(flex
            ? {
                  display: 'flex',
                  flexWrap: 'nowrap',
              }
            : {
                  display: 'grid',
                  gridAutoFlow: 'column',
                  gridTemplateRows: 'auto',
                  ...(gap && { gridGap: gap }),
              }),
        overflowX: 'auto',
        overflowY: 'hidden',
        WebkitOverflowScrolling: 'touch',
        ':before,:after': {
            content: '""',
            width: pad || '1em',
            ...(flex && { flexShrink: 0 }),
        },
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
        listStyle: 'none',
        ...sx,
    }),
}

export default styles
