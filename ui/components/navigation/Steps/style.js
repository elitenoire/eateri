export const stepListStyle = {
    display: 'flex',
    flexDirection: [null, null, null, null, 'column'], //
    alignItems: ['center', null, null, null, 'flex-start'], //
    listStyle: 'none',
    counterReset: 'step',
    li: {
        position: 'relative',
        zIndex: 1,
        display: 'flex',
        flex: 1,
        flexDirection: ['column', null, null, null, 'row'], //
        alignItems: 'center',
        mb: [null, null, null, null, 9], // 3em
        counterIncrement: 'step',
    },
    'li:not(:last-of-type)::after': {
        content: '""',
        display: 'block',
        position: 'absolute',
        height: ['2px', null, null, null, 'calc(200% - 0.4em)'], //
        top: ['0.6em', null, null, null, 'calc(0.75em * 2 + 0.2em)'], //
        left: ['calc(50% + 1em)', null, null, null, 'calc(0.75em - 1px)'], //
        width: ['calc(100% - 2em)', null, null, null, '2px'], //
        bg: ['rgba(255,255,255,0.5)', null, 'heroText'],
        transition: 'background-color 0.35s cubic-bezier(.21,.6,.35,1)',
    },
    'li:focus': {
        boxShadow: 'none',
        '.step--dot': {
            boxShadow: t => `0 0 0 3px ${t.colors.focusOutline}`,
        },
    },
    'li[data-step-complete]::after': {
        bg: ['white', null, 'accent.base'],
        height: ['4px', null, null, null, 'calc(200% - 0.4em)'], //
        width: [null, null, null, null, '4px'], //
        left: [null, null, null, null, 'calc(0.75em - 2px)'], //
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
        color: ['white', null, 'accent.base'],
        '.step--dot': {
            border: 0,
            color: 'inherit',
        },
    },
    'li[data-step-complete] .step--dot::after,li[aria-current="step"] .step--dot::after': {
        position: 'absolute',
        content: '""',
        width: '150%',
        height: '130%',
        borderRadius: 'inherit',
        zIndex: -1,
        bg: ['white', null, 'accent.base'],
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
        bg: ['accent.base', null, 'white'],
        color: ['rgba(255,255,255, 0.5)', null, 'heroText'],
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
        mt: [3, null, null, null, 0], //
        ml: [null, null, null, null, 5], //
        transition: 'color 0.35s cubic-bezier(.21,.6,.35,1)',
    },
}
