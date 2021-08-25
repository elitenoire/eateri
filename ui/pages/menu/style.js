export const foodCardStyle = {
    linkable: {
        ':hover > div:first-of-type': {
            borderColor: 'transparent',
            boxShadow: t => `0 0 0 3px ${t.colors.primary.light}`,
        },
    },
    card: {
        position: 'relative',
        display: 'flex',
        flexDirection: 'column',
        borderWidth: '1.5px',
        borderStyle: 'solid',
        borderColor: ['transparent', null, 'gray'],
        borderRadius: '25',
        mt: '3.5em',
    },
    imageWrap: {
        position: 'relative',
        width: '100%',
        maxWidth: '13em',
        top: '-3em',
        m: 'auto',
        px: '10%',
    },
    content: {
        mt: '-2.5em',
        px: 4,
        pb: 7,
        '& > p:first-of-type': {
            minHeight: [null, null, null, '3em'],
        },
    },
    actionCart: {
        position: 'absolute',
        zIndex: 1,
        bottom: '-1.25em',
        alignSelf: 'center',
    },
    actionFav: {
        position: 'absolute',
        zIndex: 1,
        top: '-1em',
        right: '5%',
    },
}
const styles = {
    grid: {
        display: 'grid',
        gridTemplateColumns: ['1fr 1fr', null, 'repeat(auto-fill, minmax(10em, 1fr))'],
        gridColumnGap: '1.5em',
        gridRowGap: '2.5em',
    },
}

export default styles
