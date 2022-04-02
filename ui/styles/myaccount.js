const styles = {
    box: {
        position: 'relative',
        flex: 'auto', // 1
        display: 'flex',
        flexWrap: 'wrap',
        rowGap: 6,
        columnGap: 4,
        bg: 'white',
        borderRadius: 'default',
        p: 4,
        overflow: 'hidden',
        '&[data-primary]': {
            bg: 'primary.pastel',
            color: 'primary.pale',
        },
        '&[data-accent]': {
            bg: 'accent.pastel',
            color: 'accent.pale',
        },
        '&[data-design]:after': {
            content: '""',
            position: 'absolute',
            width: '40%',
            pb: '40%',
            top: '-20%',
            right: '-20%',
            borderRadius: 'circle',
        },
        '&[data-design][data-primary]:after': {
            boxShadow: ({ colors }) =>
                `0 0 0 0.75em ${colors.secondary.hover}, 0 0 0 1.25em ${colors.primary.base}, 0 0 0 1.95em ${colors.grayLight}`,
        },
        '&[data-design][data-accent]:after': {
            boxShadow: ({ colors }) =>
                `0 0 0 0.75em ${colors.secondary.hover}, 0 0 0 1.25em ${colors.accent.base}, 0 0 0 1.95em ${colors.grayLight}`,
        },
    },
    info: {
        minWidth: '7.5em',
    },
    stats: {
        minWidth: '5.5em',
        alignSelf: 'center',
        zIndex: 1,
    },
    boxAction: {
        flex: '10%',
        alignSelf: 'flex-end',
        textAlign: 'right',
    },
    boxHeader: {
        flex: '100%',
    },
    wishBox: {
        flex: 1,
        display: 'flex',
        justifyContent: 'space-evenly',
        columnGap: 4,
    },
    wishBoxAction: {
        flex: 1,
        alignSelf: 'center',
    },
    cardWrap: {
        width: '10em',
        p: 4,
        borderTopLeftRadius: '40',
        borderTopRightRadius: '40',
        borderBottomLeftRadius: 'default',
        borderBottomRightRadius: 'default',
        border: t => `1px solid ${t.colors.grayLight}`,
    },
    twoRow: {
        flex: 1,
        display: 'flex',
        flexDirection: ['column-reverse', null, 'row'],
        gap: 5,
    },
    twoColumn: {
        display: 'flex',
        flexWrap: 'wrap',
        columnGap: 5,
        '& > div': {
            flex: ['100%', null, null, null, 1],
        },
    },
    flex: {
        display: 'flex',
        alignItems: 'center',
    },
    iconWrap: {
        p: 2,
        borderRadius: 'round',
        mr: 2,
        bg: 'primary.light',
    },
    payWrap: {
        flex: 1,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    payAction: {
        flex: 1,
        alignSelf: 'center',
        pr: 2,
        textAlign: 'right',
        'a:hover': {
            color: 'inherit',
        },
    },
}

export default styles
