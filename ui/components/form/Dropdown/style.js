export const ddButtonSX = {
    button: ({ bg }) => ({
        whiteSpace: 'nowrap',
        bg,
        px: 4,
        py: '0.875em',
    }),
    icon: {
        mr: 2,
    },
    value: {
        ml: 1,
        fontWeight: 'bold',
        textTransform: 'capitalize',
    },
    arrow: {
        ml: 2,
        transition: 'transform 0.3s',
        '&[data-open]': {
            transform: 'rotate(-180deg)',
        },
    },
}

export const ddListSX = {
    list: ({ outline, color, shadow }) => ({}),
}

export const ddItemSX = {
    item: {},
}
