import { alpha } from '@theme-ui/color'
import { mediaQueries as mq } from '~/theme/tokens/rhythm'
import { jelly } from '~@/general'

const customScrollBarStyle = {
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
        mt: 5,
    },
}

const styles = {
    mobileSheetTrigger: {
        pt: '50px',
    },
    mobileSheet: {
        '[data-rsbs-overlay]': {
            bg: 'accent.base',
            borderTopLeftRadius: 40,
            borderTopRightRadius: 40,
            [mq.tabletS]: {
                '.mobile-hidden': {
                    display: 'none',
                },
                'form.card-halo': {
                    bg: t => alpha('accent.pale', 0.2)(t),
                    boxShadow: t => `${t.shadows.xl} !important`,
                },
            },
            ...customScrollBarStyle,
        },
        '[data-rsbs-backdrop]': {
            opacity: 'var(--rsbs-backdrop-opacity)',
        },
        '[data-rsbs-header]': {
            px: 6,
            boxShadow: '0 1px 0 rgba(255, 255, 255, 0.125)',
        },
    },
    section: {
        position: 'relative',
        pt: [4, null, 7],
        pb: '6em',
        mt: [4, null, 0],
        bg: 'accent.base',
        ...customScrollBarStyle,
        '.card-halo': {
            position: 'relative',
            bg: ['whiteFade.20', null, 'white'],
            mb: 9,
            transition: 'all 0.3s ease-out',
            '&[data-show-halo="true"]': {
                boxShadow: t => [null, null, `0 0 0 0.9em ${t.colors.accent.base}, 0 0 0 1em white`],
                ':hover': {
                    boxShadow: t => [
                        null,
                        null,
                        `${t.shadows.lg}, 0 0 0 0.9em ${alpha('accent.base', 0.8)(t)}, 0 0 0 1em white`,
                    ],
                },
            },
        },
    },
    bgPattern: {
        svg: {
            position: 'absolute',
            opacity: 0.8,
        },
        'svg:first-of-type': {
            top: ['20px', null, null, 0],
            height: ['40vw', null, null, '27.5vw'],
            left: 0,
        },
        'svg:last-of-type': {
            right: 0,
            bottom: '3.5em',
            height: ['25vw', null, null, '15vw'],
        },
    },
    arrowDown: {
        position: 'relative',
        pb: 4,
        display: ['none', null, null, 'block'],
        svg: {
            position: 'absolute',
            color: 'secondary.pale',
            right: ['-2em', null, null, null, '-4em'],
            bottom: 0,
            width: ['6em', null, null, null, '7em'],
        },
    },
    mobileHeader: {
        display: ['flex', null, 'none'],
        justifyContent: 'space-between',
        alignItems: 'center',
        mb: 2,
        button: {
            color: 'inherit',
            bg: 'transparent',
            appearance: 'none',
            border: 0,
            borderRadius: '50%',
            fontSize: 'inherit',
        },
        svg: {
            size: '3em',
        },
    },
    selectWrap: {
        padding: 4,
        borderRadius: ['round', null, 25],
        boxShadow: 'xl',
        width: [null, null, '75%', '100%'],
        margin: [null, null, 'auto'],
    },
    selectLayout: {
        display: 'flex',
        flexDirection: [null, null, 'column', 'row'],
        justifyContent: ['space-around', null, 'space-between'],
        pb: [null, null, 2],
    },
    action: {
        position: ['relative', null, 'absolute'],
        left: [null, null, 0],
        bottom: ['-1.75em', null, '-2.5em'],
        width: 'fluid',
        display: 'flex',
        justifyContent: 'center',
        button: {
            boxShadow: '0 25px 36px -8px rgba(0,0,0,0.35)',
            ':hover': {
                boxShadow: '0 12px 30px -12px rgba(0,0,0,0.35)',
            },
        },
    },
    selectButton: {
        display: 'flex',
        flex: [null, null, 1],
        alignItems: 'center',
        borderRadius: 'round',
        border: 0,
        bg: t => ['transparent', null, alpha('accent.pale', 0.5)(t)],
        py: 2,
        px: [null, null, 2],
        minHeight: [null, null, null, '4.15em'],
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
                display: ['block', null, 'initial', 'block'],
                ml: [null, null, 4, 0],
                fontSize: [3, null, 4],
            },
        },
    },
    // hack to smoothen leave animation of modal dialog
    dialogWrap: {
        '&::after': {
            content: [null, null, '""'],
            position: 'absolute',
            left: 0,
            right: 0,
            bottom: 0,
            pb: 10,
            bg: 'accent.base',
            transform: 'translateY(0%)',
            transition: 'transform 0.35s',
        },
        '&[data-leave]::after': {
            transform: 'translateY(99%)',
            transition: 'transform 0.2s',
        },
    },
    formDialog: {
        position: 'relative',
    },
    formClose: {
        position: 'absolute',
        top: '-2em',
        right: '-1.5em',
    },
    formWrap: {
        display: 'flex',
        flexDirection: 'column',
        bg: ['whiteFade.20', null, 'white'],
        pt: [7, null, null, null, 8],
        pb: [null, null, 7, null, 8],
        px: [4, 6, 7, null, 8],
        mt: [6, null, 0],
        mb: [13, null, 0],
        mx: [3, null, 0],
        borderTopLeftRadius: ['4em', null, 30],
        borderTopRightRadius: ['4em', null, 30],
        borderBottomLeftRadius: ['6em', null, 30],
        borderBottomRightRadius: ['6em', null, 30],
        '.form-section': {
            bg: t => ['whiteFade.20', null, alpha('accent.pale', 0.5)(t)],
            borderRadius: '30',
            mt: 6,
            transition: 'background-color 0.35s cubic-bezier(.21,.6,.35,1)',
            ':hover': {
                bg: [null, null, 'accent.pale'],
            },
            ':hover input,:hover textarea': {
                bg: t => ['whiteFade.20', null, alpha('accent.light', 0.3)(t)],
            },
            [mq.tabletS]: {
                '& *:focus, & button.calendar--day:focus > span': {
                    boxShadow: ({ colors }) => `0 0 0 3px ${colors.whiteFade['50']}`,
                },
            },
            '&[data-form-error]': {
                bg: t => [null, null, alpha('red', 0.1)(t)],
            },
            '&[data-form-error]:hover': {
                bg: t => [null, null, alpha('red', 0.13)(t)],
            },
            '&[data-form-error]:hover input': {
                bg: t => [null, null, alpha('red', 0.08)(t)],
            },
            '&[data-form-error] input': {
                bg: t => [null, null, alpha('red', 0.06)(t)],
                animation: `${jelly} 0.5s`,
                '::placeholder': {
                    color: t => [null, null, alpha('red', 0.5)(t)],
                },
                ':hover': {
                    bg: t => [null, null, alpha('red', 0.08)(t)],
                },
                ':focus': {
                    border: t => `1px solid ${t.colors.red}`,
                },
            },
            '&[data-form-error] > p:first-of-type, &[data-form-error] > label': {
                color: ['red', null, 'inherit'],
                opacity: 0.8,
            },
            '&[data-form-error] *:focus, &[data-form-error] button.calendar--day:focus > span': {
                boxShadow: t => [null, null, `0 0 0 3px ${alpha('red', 0.2)(t)}`],
            },
            textarea: {
                display: 'block',
                resize: 'none',
                py: ['10px', null, '14px'],
                fontSize: 'inherit',
            },
        },
    },
    formLayout: {
        display: 'flex',
        flexDirection: ['column', null, null, 'row'],
        flexWrap: [null, null, null, 'wrap'],
        alignItems: [null, null, null, 'flex-start'],
    },
    formSection: {
        minHeight: '5em',
        pb: 4,
        fontSize: 1,
    },
    formSectionLabel: {
        display: 'block',
        pt: 4,
        pb: 2,
        fontWeight: 'bold',
        textAlign: 'center',
        textTransform: 'capitalize',
        borderTopLeftRadius: 'inherit',
        borderTopRightRadius: 'inherit',
        bg: 'whiteFade.35',
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
        'li[aria-selected="true"]': {
            bg: ['secondary.base', null, 'accent.dark'],
            color: ['accent.base', null, 'white'],
            fontWeight: 'medium',
        },
        'li[data-option-disabled="true"]': {
            cursor: 'auto',
            opacity: 0.4,
        },
        'li:not([data-option-disabled="true"]):not([aria-selected="true"]):hover': {
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
        bg: ['whiteFade.20', null, 'accent.pale'],
        border: '1px solid transparent',
        borderRadius: 'inherit',
        color: 'inherit',
        fontFamily: 'inherit',
        transition: 'border 0.3s, boxShadow 0.3s, background-color 0.3s',
        '::placeholder': {
            color: t => ['rgba(0,0,0,0.25)', null, alpha('accent.dark', 0.45)(t)],
        },
        ':hover': {
            bg: t => ['whiteFade.35', null, alpha('accent.light', 0.5)(t)],
        },
        ':focus': {
            boxShadow: t => [null, null, `0 0 0 3px ${t.colors.accent.light}`],
            border: t => `1px solid ${t.colors.accent.dark}`,
        },
    },
    formError: {
        width: '90%',
        margin: '0 auto',
        fontStyle: 'italic',
        color: 'red',
        fontSize: 0,
        textAlign: 'center',
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
        mb: 2,
        mx: 'auto',
        background: ({ colors }) => [
            'whiteFade.35',
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
        padding: 2,
        fontSize: '1.2em',
        boxShadow: 'inner',
        bg: t => alpha('accent.base', 0.5)(t),
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
