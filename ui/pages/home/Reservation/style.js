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
            background: 'transparent', // t => t.colors.accent.pale,
            borderRadius: '5px',
        },
        '& ::-webkit-scrollbar-track-piece:end': {
            background: 'transparent',
            mb: 5,
        },
        '& ::-webkit-scrollbar-track-piece:start': {
            background: 'transparent',
            mt: 5,
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
            color: [null, null, 'accent.dark'],
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
    formClose: {
        position: 'absolute',
        top: '-2.125em',
        right: '-2.125em',
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
            mt: 6,
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
        mt: 6,
        pb: 4,
        fontSize: 1, // TODO: try different sizes
        transition: 'background-color 0.35s cubic-bezier(.21,.6,.35,1)',
        ':hover': {
            bg: [null, null, 'accent.pale'],
        },
        ':hover input,:hover textarea': {
            bg: t => ['rgba(255,255,255,0.2)', null, alpha('accent.light', 0.3)(t)],
        },
        textarea: {
            display: 'block',
            resize: 'none',
            py: ['10px', null, '14px'],
            fontSize: 'inherit',
        },
    },
    formSectionLabel: {
        display: 'block',
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
    formInput: {
        width: '90%',
        mx: 'auto',
        mt: 4,
        px: 4,
        letterSpacing: 'wider',
        bg: ['rgba(255,255,255,0.2)', null, 'accent.pale'],
        border: '1px solid transparent',
        borderRadius: 'inherit',
        color: ['inherit', null, 'accent.dark'],
        fontFamily: 'inherit',
        transition: 'border 0.3s, boxShadow 0.3s, background-color 0.3s',
        '::placeholder': {
            color: t => ['rgba(0,0,0,0.25)', null, alpha('accent.dark', 0.25)(t)],
        },
        ':hover': {
            bg: t => ['rgba(255,255,255,0.35)', null, alpha('accent.light', 0.5)(t)],
        },
        ':focus': {
            boxShadow: t => [`0 0 0 3px rgba(255,255,255,0.5)`, null, `0 0 0 3px ${t.colors.accent.light}`],
            border: t => `1px solid ${t.colors.accent.dark}`,
        },
    },
    guestInputWrap: {
        display: 'flex',
        flexDirection: ['column', null, null, null, 'row'],
        justifyContent: 'space-between',
        px: [null, null, 6, 9, 0],
        '& > div': {
            flex: '0 0 48%',
        },
    },
    guestCard: {
        position: 'relative',
        display: 'flex',
        padding: '1.25em 1.25em 1em',
        borderRadius: 'pill',
        maxWidth: '25em',
        mt: 7,
        mx: 'auto',
        background: ({ colors }) => [
            'rgba(255,255,255,0.35)',
            null,
            `linear-gradient(to bottom left, ${colors.accent.light}, ${colors.accent.base})`,
        ],
        boxShadow: t => ['xl', null, `0 0.5em 0.7em -0.3em ${alpha('accent.base', 0.7)(t)}`],
        '&[data-has-overlay]': {
            overflow: 'hidden',
        },
    },
    guestCardAvatar: {
        width: ['3em', null, '4em'],
        alignSelf: 'center',
        boxShadow: 'ringLight',
        mr: 5,
    },
    guestCardSvg: {
        position: 'absolute',
        right: 0,
        bottom: 0,
        width: '30%',
    },
    guestCardOverlay: {
        position: 'absolute',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        top: 0,
        bottom: 0,
        left: 0,
        right: 0,
        borderRadius: 'inherit',
        bg: t => alpha('accent.base', 0.35)(t),
        backdropFilter: 'blur(10px)',
    },
    confirmLayout: {
        bg: t => ['accent.light', null, alpha('accent.pale', 0.5)(t)],
        borderRadius: 30,
        padding: 7,
        my: 6,
        textAlign: 'center',
        transition: 'background-color 0.3s',
        ':hover': {
            bg: [null, null, 'accent.pale'],
        },
    },
    confirmIcon: {
        display: 'inline-block',
        borderRadius: 'icon',
        padding: '0.5em',
        fontSize: '1.2em',
        boxShadow: 'inner',
        bg: t => alpha('accent.base', 0.5)(t),
        svg: {
            display: 'block',
        },
    },
    confirmSvg: {
        position: 'absolute',
        width: '30%',
        opacity: 0.08,
        right: '-5%',
        bottom: '-10%',
    },
    confirmDetailsBox: {
        position: 'relative',
        boxShadow: 'inner',
        bg: t => alpha('accent.base', 0.5)(t),
        borderRadius: 20,
        padding: 4,
        overflow: 'hidden',
    },
    confirmDetails: {
        display: 'flex',
        flexDirection: ['column', null, 'row'],
        justifyContent: 'space-around',
        textAlign: 'left',
    },
}

export default styles
