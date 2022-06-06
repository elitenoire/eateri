export const scrollbarStyle = {
    '& ::-webkit-scrollbar': {
        width: '0.5em',
        height: '0.5em',
    },
    '& ::-webkit-scrollbar-thumb': {
        borderRadius: '5px',
        background: t => t.colors.accent.light,
        boxShadow: 'none',
    },
    '& ::-webkit-scrollbar-track': {
        background: 'transparent', // t => t.colors.accent.pale,
        borderRadius: '5px',
    },
    '& ::-webkit-scrollbar-track-piece:end': {
        background: 'transparent',
        mb: 5,
    },
    '& ::-webkit-scrollbar-track-piece:start': {
        background: 'transparent',
        mt: 7,
    },
}
