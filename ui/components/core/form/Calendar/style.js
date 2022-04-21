const styles = {
    container: {
        position: 'relative',
        padding: 'body',
        maxWidth: [null, null, '25em'], // 500 px
        margin: [null, null, 'auto'],
        userSelect: 'none',
        fontSize: 1, //
    },
    nav: {
        position: 'absolute',
        right: 0,
        pr: 'inherit',
    },
    month: {
        display: 'flex',
        flexDirection: 'column',
    },
    monthBody: {
        textAlign: 'center',
    },
    monthTitle: {
        fontSize: 5,
        fontWeight: 'bold',
        mb: 2,
        minHeight: '1.5em', // to fit nav button
        pt: '0.1em',
        'span:not([aria-hidden="true"])': {
            fontWeight: 'light',
            fontSize: 1,
            ml: 1,
        },
    },
    monthWeekDays: {
        display: ['none', null, 'flex'],
        fontSize: 1,
        my: 4,
        px: 1,
        '& > div': {
            width: '14.28571%',
        },
    },
    monthGridDays: {
        // scrollable
        flexDirection: [null, null, 'column'],
        mx: ['bodyNegative', null, 0],
        p: 1,
    },
}

export const weekStyles = {
    monthRowDays: {
        display: 'flex',
        mb: [4, null, 0], // mobile: push scrollbar down
    },
}

export const dayStyles = {
    monthDayCell: {
        appearance: 'none',
        border: 0,
        fontFamily: 'inherit',
        bg: 'transparent',
        color: 'inherit',
        cursor: 'pointer',
        position: 'relative',
        display: 'flex',
        width: ['4em', null, '14.28571%'],
        pb: [null, null, '14.28571%'],
        minHeight: ['5em', null, 0],
        mx: [2, null, 0],
        borderRadius: ['default', null, 'circle'],
        transition: 'all 0.35s cubic-bezier(.21,.6,.35,1)',
        '&:disabled,&[aria-disabled="true"]': {
            opacity: 0.4,
            cursor: 'auto',
        },
        '&[aria-hidden="true"]': {
            display: ['none', null, 'flex'],
            visibility: 'hidden',
        },
        '& > *': {
            pointerEvents: 'none',
        },
        '& > span': {
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            position: [null, null, 'absolute'],
            top: [null, null, '5%'],
            left: [null, null, '5%'],
            width: ['100%', null, '90%'],
            height: ['100%', null, '90%'],
            minHeight: 'inherit',
            borderRadius: 'inherit',
            bg: ['rgba(0,0,0,0.08)', null, 'inherit'],
        },
        '&[aria-selected="true"] > span': {
            bg: 'secondary.base',
            color: 'accent.base',
            fontWeight: 'medium',
        },
        '&[aria-current="date"] > span': {
            color: 'highlight.base',
            fontWeight: 'medium',
        },
        '&:enabled:not([aria-disabled="true"]):not([aria-selected="true"]):active > span': {
            boxShadow: 'inner',
        },
        '&:enabled:not([aria-disabled="true"]):not([aria-selected="true"]):hover > span': {
            bg: 'rgba(0,0,0,0.125)',
        },
    },
    monthDayWeek: {
        display: [null, null, 'none'],
        fontSize: 1,
        mb: 4,
    },
    monthDayValue: {
        fontSize: 2,
    },
}

export default styles
