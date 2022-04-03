import svgUrl from '~/public/reserve-badge.svg'

const styles = {
    svgDine: {
        width: ['50%', null, '40%', '30%', '70%'],
        height: 'auto',
        alignSelf: [null, null, null, 'flex-end'],
    },

    flexWrap: {
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'center',
        alignItems: 'center',
        py: 13,

        '& > div:first-of-type > div': {
            pl: [null, null, null, 6, 0],
            pr: [null, null, null, 6, 7],
        },
        '& > div:last-of-type > div': {
            pl: [null, null, null, 6, 7],
            pr: [null, null, null, 6, 0],
        },
    },
    column: {
        maxWidth: ['25em', null, null, '30em'],
        flex: '1 1 20em',
    },
    bar: {
        borderColor: 'primary.base',
        borderLeftWidth: '20px',
        borderLeftStyle: 'solid',
        pl: 5,
        pt: 5,
        pb: 7,
        span: {
            lineHeight: 0.9,
            verticalAlign: 'text-bottom',
        },
    },
    rightBar: {
        borderColor: 'primary.base',
        borderRightWidth: '20px',
        borderRightStyle: 'solid',
        pr: 5,
        py: 4,
        textAlign: 'right',
    },
    doodle: {
        position: 'relative',
        overflow: 'hidden',
        margin: 'auto',
        maxWidth: ['55%', null, null, '35%'],
        width: 'inherit',

        ':before': {
            position: 'absolute',
            content: '""',
            width: '100%',
            height: '100%',
            bg: 'accent.pale',
            borderRadius: '50%',
            top: '50px',
            left: 0,
            zIndex: -1,
        },
    },
    grid: {
        position: 'relative',
        display: 'grid',
        gridTemplateColumns: [null, null, null, '1fr 1fr'],
        gridAutoRows: 'minmax(10em, auto)',
        gridColumnGap: [7, null, null, null, 11],
        gridRowGap: [11, null, null, 0, 7],
        mt: ['-2em', null, null, '-3em'],
        py: 11,
        backgroundImage: t =>
            `linear-gradient(90deg, transparent 15%, ${t.colors.gray} 15%, ${t.colors.gray} 85%, transparent 85%)`,
        ':before,:after': {
            display: ['flex', null, null, 'none'],
            alignItems: 'center',
            justifyContent: 'center',
            content: '"🤩🤩🤩"',
            position: 'absolute',
            left: 0,
            right: 0,
            margin: 'auto',
            width: '100%',
            height: '1.2em',
            fontSize: 7,
            opacity: 0.85,
            bg: 'gray',
        },
        ':before': {
            top: '25%',
            borderRadius: '10% 90% 12% 88% / 88% 8% 92% 12%',
        },
        ':after': {
            bottom: '25%',
            borderRadius: '91% 9% 90% 10% / 29% 82% 18% 71%',
        },
        '& > div:nth-of-type(odd)': {
            pb: 7,
        },
        '& > div:nth-of-type(even)': {
            pt: 7,
        },
    },
    card: {
        position: 'relative',
        borderRadius: '20',
        py: 7,
        px: 8,
        textAlign: 'center',
        background: `url(${svgUrl}) 120% no-repeat`,
        bg: 'secondary.base',
        div: {
            position: 'absolute',
            left: 0,
            right: 0,
            bottom: '-1em',
            display: 'flex',
            justifyContent: 'center',
        },
    },
    disclaimer: {
        width: '70%',
        margin: 'auto',
        pb: 7,
        px: 2,
        textAlign: 'center',
        bg: 'gray',
        color: 'textLight',
    },
}

export default styles
