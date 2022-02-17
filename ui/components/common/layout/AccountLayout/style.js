const styles = {
    wrapper: {
        display: 'flex',
    },
    sidebar: {
        position: 'relative',
        width: ['15%', null, null, '35%'],
        pl: [null, null, null, 2, 4, 10],
        pr: [null, null, null, 6, 7, 10],
        pt: [4, null, null, 13],
        pb: 7,
    },
    badgeWrap: {
        display: ['none', null, null, 'block'],
        position: 'absolute',
        top: '1em',
        left: 0,
    },
    badge: {
        bg: 'muted',
        px: 7,
        py: 3,
        borderTopRightRadius: 'pill',
        borderBottomRightRadius: 'pill',
        boxShadow: '2xl',
    },
    panel: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: ['center', null, null, 'initial'],
    },
    nameBlock: {
        display: 'flex',
        alignItems: 'center',
        py: [null, null, null, 6],
        pr: [null, null, null, 4],
        borderRadius: [null, null, null, 20],
        bg: 'muted', // 'grayMedium',
        mt: 2,
        mb: [6, null, null, 4],
    },
    avatarWrap: {
        mr: [null, null, null, 4],
        ml: [null, null, null, null, null, '-1em'],
        size: ['2.75em', null, null, '4.5em'],
    },
    nameDetails: {
        display: ['none', null, null, 'block'],
    },
    navListBlock: {
        bg: [null, null, null, 'muted'], // 'grayMedium'],
        py: [null, null, null, 1],
        mb: [null, null, null, 4],
        borderRadius: 20,
        overflow: 'hidden',
        '&[data-single]': {
            borderRadius: '1em',
        },
    },
    content: {
        flex: 1,
        display: 'flex',
        flexDirection: 'column',
    },
    header: {
        px: 7,
        py: 4,
    },
    overview: {
        flex: 1,
        bg: 'muted',
        borderTopLeftRadius: [null, null, '20'],
        borderTopRightRadius: [null, null, 'default'],
        padding: 7,
    },
}

export const navListItemStyle = {
    listItem: {
        position: 'relative',
        mb: [3, null, null, 0],
        '&[data-lined]:after': {
            content: '""',
            position: 'absolute',
            top: 0,
            right: 0,
            left: 10,
            borderTop: t => `1px solid ${t.colors.grayMedium}`,
        },
    },
    link: {
        position: 'relative',
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        textDecoration: 'none',
        py: [null, null, null, 3],
        pr: [null, null, null, 5],
        pl: [null, null, null, 10],
        '&[data-active],&:hover': {
            bg: [null, null, null, 'grayMedium'],
        },
        '&[data-active]': {
            '& > span:first-of-type': {
                bg: 'secondary.base',
                color: 'textOnSecondary',
            },
            '& > span:last-of-type span:first-of-type': {
                fontWeight: 'bold',
            },
        },
        '&:hover > span:last-of-type span:last-of-type': {
            opacity: 1,
            transform: 'translate(0, -50%)',
        },
    },
    iconWrap: {
        position: [null, null, null, 'absolute'],
        left: [null, null, null, 0],
        top: [null, null, null, '50%'],
        transform: [null, null, null, 'translateY(-50%)'],
        ml: [null, null, null, 2],
        p: [3, null, null, 2],
        textAlign: 'center',
        bg: ['white', null, null, 'transparent'],
        borderRadius: 'circle',
        border: t => [`1px solid ${t.colors.gray}`, null, null, 'none'],
    },
    mobileHidden: {
        display: ['none', null, null, 'block'],
    },
    arrow: {
        position: [null, null, null, 'absolute'],
        right: [null, null, null, '8px'],
        top: [null, null, null, '50%'],
        transform: [null, null, null, 'translate(-2px, -50%)'],
        color: 'blackFade.80',
        opacity: 0,
        transition: 'opacity 0.3s, transform 0.3s',
    },
}

export default styles
