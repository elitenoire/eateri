const styles = {
    favoriteCardWrap: {
        position: 'relative',
        display: 'flex',
        alignItems: 'center',
        width: 'calc(100% - 1em)',
        mt: 7,
        px: 4,
        py: 2,
        borderRadius: '25',
        bg: 'background',
        boxShadow: ({ colors }) =>
            `20px 20px 40px ${colors.cardNeumorph.dark},-20px -20px 40px ${colors.cardNeumorph.light}`,
        transition: 'box-shadow 0.5s ease-out, transform 0.4s ease-out',
        ':hover': {
            boxShadow: 'xl',
            transform: 'scale(1.05)',
        },
        button: {
            mr: '-2.25em',
        },
    },
    favoriteCard: {
        display: 'flex',
        flex: 1,
    },
    favoriteCardImageWrap: {
        size: '6em',
        mr: 4,
        ml: '-3em',
    },
    favoriteCardContent: {
        flex: 1,
        minWidth: 0,
    },
}
export default styles
