export const stepListStyle = {
    display: 'flex',
    listStyle: 'none',
    counterReset: 'step',
    py: 2,
    mb: 6,
    borderRadius: 'round',
    '&[data-style]': {
        'li:not(:last-of-type)::after': {
            bg: 'rgba(255,255,255,0.5)',
        },
        'li[data-step-complete]::after': {
            bg: 'white',
        },
        'li[aria-current="step"]': {
            color: 'white',
        },
        'li:not([data-step-incomplete]) .step--dot::after': {
            bg: 'white',
        },
        'li .step--dot': {
            bg: 'accent.base',
            color: 'rgba(255,255,255, 0.5)',
        },
    },
    li: {
        position: 'relative',
        zIndex: 1,
        display: 'flex',
        flex: 1,
        flexDirection: 'column',
        alignItems: 'center',
        counterIncrement: 'step',
    },
    'li:not(:last-of-type)::after': {
        content: '""',
        display: 'block',
        position: 'absolute',
        height: '2px', //
        top: '0.6em', //
        left: 'calc(50% + 1em)', //
        width: 'calc(100% - 2em)', //
        bg: 'heroText', //  ['rgba(255,255,255,0.5)', null, 'heroText'],
        transition: 'background-color 0.35s cubic-bezier(.21,.6,.35,1)',
    },
    // 'li:focus': {
    // 	boxShadow: 'none',
    // 	'.step--dot': {
    // 		boxShadow: t => `0 0 0 3px ${t.colors.focusOutline}`,
    // 	},
    // },
    'li[data-focus-visible] .step--dot,li[data-step-complete] .step--dot[data-focus-visible]': {
        outline: t => `2px dotted ${t.colors.focusOutline}`,
        outlineOffset: '2px',
    },
    'li[data-step-complete]::after': {
        bg: 'accent.base', // ['white', null, 'accent.base'],
    },
    'li[data-step-complete]': {
        '.step--dot': {
            bg: 'text',
            color: 'accent.base',
            cursor: 'pointer',
            border: 0,
        },
        '.step--dot::before': {
            content: '"\u2714"',
        },
    },
    'li[aria-current="step"]': {
        color: 'accent.base', // ['white', null, 'accent.base'],
        '.step--dot': {
            border: 0,
            color: 'inherit',
        },
    },
    'li:not([data-step-incomplete]) .step--dot::after': {
        position: 'absolute',
        content: '""',
        width: '150%',
        height: '130%',
        borderRadius: 'inherit',
        zIndex: -1,
        bg: 'accent.base', // ['white', null, 'accent.base'],
    },
    'li[data-step-incomplete] .step--label': {
        opacity: 0.6,
    },
}
export const stepStyle = {
    stepButton: {
        position: 'relative',
        display: 'flex',
        size: '2em',
        fontWeight: 'medium',
        fontFamily: 'inherit',
        fontSize: 0,
        appearance: 'none',
        textAlign: 'center',
        bg: 'white',
        color: 'heroText',
        borderStyle: 'solid',
        borderWidth: '2px',
        borderColor: 'inherit',
        borderRadius: 'pill',
        justifyContent: 'center',
        alignItems: 'center',
        transition: 'all 0.35s cubic-bezier(.21,.6,.35,1)',
        '::before': {
            content: 'counter(step)',
        },
    },
    stepLabel: {
        fontSize: 0,
        fontWeight: 'medium',
        textAlign: 'center',
        mt: 3,
        transition: 'color 0.35s cubic-bezier(.21,.6,.35,1)',
    },
}
