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
        margin: '6px',
        backfaceVisibility: 'hidden',
        transition: 'all 0.35s cubic-bezier(.21,.6,.35,1)',
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
        '&&:hover': {
            transform: 'translateY(-2px)',
        },
        '&&:active': {
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
