import { alpha } from '@theme-ui/color'

const styles = {
    _base: {
        cursor: 'pointer',
        display: 'inline-flex',
        justifyContent: 'center',
        alignItems: 'center',
        userSelect: 'none',
        borderWidth: '1.5px',
        borderStyle: 'solid',
        fontFamily: 'body',
        backfaceVisibility: 'hidden',
        transition: 'all 0.35s cubic-bezier(.21,.6,.35,1)',
        svg: {
            pointerEvents: 'none',
        },
        '& .symbol': {
            padding: '0.4em 0.8em',
            borderRadius: 'inherit',
            margin: '-0.8em',
            marginLeft: '1.6em',
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
        '&&:enabled:not([aria-disabled="true"]):hover': {
            transform: 'translateY(-2px)',
        },
        '&&:enabled:not([aria-disabled="true"]):active': {
            transform: 'scale(0.95)',
        },
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
    },
}

export default styles
