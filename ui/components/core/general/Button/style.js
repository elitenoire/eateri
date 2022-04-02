import { alpha } from '@theme-ui/color'

const styles = {
    _aria: {
        appearance: 'none',
        cursor: 'pointer',
        bg: 'transparent',
        border: 0,
        fontSize: 'inherit',
        fontFamily: 'body',
    },
    _base: {
        display: 'inline-flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexWrap: 'wrap',
        userSelect: 'none',
        backfaceVisibility: 'hidden',
        transition: 'all 0.35s cubic-bezier(.21,.6,.35,1)',
        svg: {
            pointerEvents: 'none',
        },
        '& .symbol': {
            padding: '0.4em 0.8em',
            borderRadius: 'inherit',
            margin: '-0.8em',
            ml: 3,
            bg: 'secondary.base',
            color: 'textOnSecondary',
            boxShadow: t => `0 2px 4px ${alpha('secondary.base', 0.2)(t)}`,
        },
        '.symbol svg': {
            width: '1em',
            height: '1em',
        },
        '&:disabled,&[aria-disabled="true"]': {
            opacity: 0.4,
            cursor: 'auto',
        },
        '&[data-no-fade]:disabled,&[data-no-fade][aria-disabled="true"]': {
            opacity: 1,
        },
        '&[href]:hover,&&:enabled:not([aria-disabled="true"]):hover': {
            transform: 'translateY(-2px)',
        },
        '&[href][data-no-hoverup]:hover,&&[data-no-hoverup]:enabled:not([aria-disabled="true"]):hover': {
            transform: 'translateY(0)',
        },
        '&[href]:active,&[href][data-no-hoverup]:active,&&:enabled:not([aria-disabled="true"]):active,&&[data-no-hoverup]:enabled:not([aria-disabled="true"]):active':
            {
                transform: 'scale(0.95)',
            },
    },
    _baseExtra: {
        borderWidth: '1.5px',
        borderStyle: 'solid',
    },
    button: {
        letterSpacing: 'wide',
        fontWeight: 'medium',
        textDecoration: 'none',
        py: '0.7em',
        px: '1.6em',
        lineHeight: '1em',
    },
    buttonWithIcon: {
        px: '1.2em',
        justifyContent: 'space-between',
    },
    icon: {
        px: '0.6em',
        py: '0.6em',
        '&[data-scale=sm] svg': {
            transform: 'scale(1.15)',
        },
        '&[data-scale=md] svg': {
            transform: 'scale(1.25)',
        },
        '&[data-scale=lg] svg': {
            transform: 'scale(1.35)',
        },
    },
    arrow: {
        transition: 'transform 0.3s',
        '&[data-open]': {
            transform: 'rotate(-180deg)',
        },
    },
}

export default styles
