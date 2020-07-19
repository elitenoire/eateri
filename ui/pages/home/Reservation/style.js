import { alpha } from '@theme-ui/color'
import { mediaQueries as mq } from '~/theme/tokens/rhythm'

const styles = {
    section: {
        pt: [4, null, 7],
        pb: 10,
        bg: 'accent.base',
        borderTopLeftRadius: [40, null, 'none'],
        borderTopRightRadius: [40, null, 'none'],
        '& ::-webkit-scrollbar': {
            width: '10px',
            height: '10px',
        },
        '& ::-webkit-scrollbar-thumb': {
            borderRadius: '5px',
            background: t => t.colors.accent.light,
            boxShadow: 'none',
        },
        '& ::-webkit-scrollbar-track': {
            background: t => t.colors.accent.pale,
            borderRadius: '5px',
        },
        '.card-halo': {
            position: 'relative',
            bg: ['rgba(255,255,255,0.2)', null, 'white'], //
            transition: 'all 0.3s ease-out',
            '&[data-show-halo="true"]': {
                boxShadow: t => [null, null, `0 0 0 0.9em ${t.colors.accent.base}, 0 0 0 1em white`], //
                ':hover': {
                    boxShadow: t => [
                        null,
                        null,
                        `${t.shadows.lg}, 0 0 0 0.9em ${alpha('accent.base', 0.8)(t)}, 0 0 0 1em white`,
                    ],
                },
            },
        },
        [mq.tabletS]: {
            '.mobile-hidden': {
                display: 'none',
            },
            'form.card-halo': {
                bg: t => alpha('accent.pale', 0.2)(t),
                boxShadow: t => `${t.shadows.xl} !important`,
            },
        },
    },
    mobileHeader: {
        display: ['flex', null, 'none'],
        justifyContent: 'space-between',
        alignItems: 'center',
        mb: 4,
        button: {
            color: 'inherit',
            bg: 'transparent',
            appearance: 'none',
            border: 0,
            borderRadius: '50%',
            fontSize: 'inherit',
        },
        svg: {
            display: 'block',
            size: '3em',
        },
    },
    selectWrap: {
        padding: 4,
        borderRadius: ['round', null, 25], //
        boxShadow: 'xl', //
        width: [null, null, '75%', '100%'], //
        margin: [null, null, 'auto'], //
        mb: [6, null, 9], //
    },
    selectLayout: {
        display: 'flex',
        flexDirection: [null, null, 'column', 'row'], //
        justifyContent: ['space-around', null, 'space-between'],
        pb: [null, null, 2],
    },
    action: {
        position: 'absolute',
        left: 0,
        bottom: '-2em',
        width: '100%',
        display: 'flex',
        justifyContent: 'center',
    },
    selectButton: {
        display: 'flex',
        flex: [null, null, 1],
        borderRadius: 'round',
        border: 0,
        bg: t => ['transparent', null, alpha('accent.pale', 0.5)(t)],
        py: 2,
        px: [null, null, 2],
        cursor: [null, null, 'pointer'],
        font: 'inherit',
        color: 'inherit',
        appearance: 'none',
        transition: 'all 0.35s cubic-bezier(.21,.6,.35,1)',
        ':hover': {
            bg: [null, null, 'accent.pale'],
        },
        '& > div': {
            display: 'flex',
            flex: 1,
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: [null, null, 'center'],
            p: {
                textAlign: ['left', null, 'center'],
                ml: [4, null, 0],
            },
            'p span': {
                display: ['block', null, 'initial', 'block'], //
                ml: [null, null, 2, 0], //
                fontSize: [3, null, 4],
            },
        },
    },
    formWrap: {
        display: 'flex',
        flexDirection: 'column',
        bg: ['rgba(255,255,255,0.2)', null, 'white'],
        py: [7, null, null, null, 8],
        px: [4, 6, 7, null, 8],
        borderRadius: 30,
    },
    formLayout: {
        display: 'flex',
        flexDirection: ['column', null, null, 'row'],
        flexWrap: [null, null, null, 'wrap'],
        alignItems: [null, null, null, 'flex-start'],
        '& > div': {
            bg: t => ['rgba(255,255,255,0.2)', null, alpha('accent.pale', 0.5)(t)],
            borderRadius: '2em',
            minHeight: '5em',
            mt: '1.5em',
            transition: 'background-color 0.35s cubic-bezier(.21,.6,.35,1)',
            ':hover': {
                bg: [null, null, 'accent.pale'],
            },
        },
    },
    formSection: {
        bg: t => ['rgba(255,255,255,0.2)', null, alpha('accent.pale', 0.5)(t)],
        borderRadius: '2em',
        minHeight: '5em',
        mt: '1.5em',
        transition: 'background-color 0.35s cubic-bezier(.21,.6,.35,1)',
        ':hover': {
            bg: [null, null, 'accent.pale'],
        },
    },
    formSectionLabel: {
        pt: 4,
        pb: 2,
        fontWeight: 'bold',
        textAlign: 'center',
        textTransform: 'uppercase',
        borderTopLeftRadius: 'inherit',
        borderTopRightRadius: 'inherit',
        bg: 'rgba(255,255,255,0.35)',
    },
    formSectionGuest: {
        width: '100%',
    },
    formSectionDate: {
        width: [null, null, null, '55%', '45%'],
        'button.calendar--day[aria-current="date"] > span': {
            color: ['white', null, 'accent.hover'],
        },
        'button.calendar--day[aria-selected="true"] > span': {
            bg: [null, null, 'accent.dark'],
        },
        'button.calendar--day[aria-selected="true"]:not([aria-current="date"]) > span': {
            color: [null, null, 'white'],
        },
        'button.calendar--day:enabled:not([aria-disabled="true"]):not([aria-selected="true"]):hover > span': {
            bg: t => ['rgba(0,0,0,0.125)', null, alpha('accent.light', 0.5)(t)],
        },
    },
    formSectionTime: {
        flex: 1,
        minWidth: 0,
        ml: [null, null, null, 6],
        '& > div': {
            pt: [null, null, null, '10px'],
            pl: [null, null, null, '10px'],
            pr: [null, null, null, '10px'],
            pb: [null, null, null, '15px'],
        },
        '.scrollable': {
            justifyContent: [null, null, null, 'space-around'],
            pr: [null, null, null, '10px'],
            pb: [null, null, null, 0],
            maxHeight: [null, null, null, 'calc(18em - 10px - 15px)'],
            flexWrap: [null, null, null, 'wrap'],
            overflowX: [null, null, null, 'hidden'],
            overflowY: [null, null, null, 'auto'],
            '::before, ::after': {
                display: [null, null, null, 'none'],
            },
            li: {
                mx: [2, null, null, 0, 1],
            },
            [mq.tablet]: {
                // hide scroll
                overflow: '-moz-scrollbars-none',
                MsOverflowStyle: 'none',
                scrollbarWidth: 'none',
                '::-webkit-scrollbar': {
                    width: '0 !important',
                    display: 'none',
                    background: 'transparent',
                },
            },
        },
    },
    selectBox: {
        pb: 4,
        li: {
            py: 1,
            px: 4,
            my: 4,
            textAlign: 'center',
            borderRadius: 'pill',
            cursor: 'pointer',
            minWidth: '4.5em',
            bg: ['rgba(0,0,0,0.08)', null, 'accent.light'],
            transition: 'all 0.35s cubic-bezier(.21,.6,.35,1)',
        },
        'li[aria-checked="true"]': {
            bg: ['secondary.base', null, 'accent.dark'],
            color: ['accent.base', null, 'white'],
            fontWeight: 'medium',
        },
        'li[data-option-disabled="true"]': {
            cursor: 'auto',
            opacity: 0.4,
        },
        'li:not([data-option-disabled="true"]):not([aria-checked="true"]):hover': {
            bg: ['rgba(0,0,0,0.15)', null, 'accent.base'],
            color: [null, null, 'white'],
            transform: 'translateY(-2px)',
            boxShadow: t => ['xl', null, `0 0.5em 0.7em -0.3em ${alpha('accent.base', 0.7)(t)}`],
        },
    },
}

export default styles
