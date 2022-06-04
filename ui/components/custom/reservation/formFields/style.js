import { alpha } from '@theme-ui/color'
import { jelly } from '~@core/general'

const styles = {
    fieldWrap: {
        // fontSize: 1,
        borderRadius: '20',
        pb: 6,
        bg: 'accent.pale',
        transition: 'background-color 0.35s cubic-bezier(.21,.6,.35,1)',
        '&[data-style]': {
            bg: 'whiteFade.20',
        },
        '&:not([data-style]):hover': {
            bg: t => alpha('accent.light', 0.3)(t),
        },
        '&[data-invalid]': {
            pb: 2,
            '&:not([data-style])': {
                bg: t => alpha('red', 0.1)(t),
                ':hover': {
                    bg: t => alpha('red', 0.13)(t),
                },
            },
            '&[data-style] label': {
                color: 'red',
                opacity: 0.8,
            },
        },
    },
    fieldLabel: {
        display: 'block',
        pt: 4,
        pb: 2,
        fontWeight: 'bold',
        textAlign: 'center',
        textTransform: 'capitalize',
        borderTopLeftRadius: 'inherit',
        borderTopRightRadius: 'inherit',
        bg: 'whiteFade.30',
    },
    fieldError: {
        width: '90%',
        margin: '0 auto',
        pt: 2,
        fontSize: 0,
        fontStyle: 'italic',
        fontWeight: 'medium',
        textAlign: 'center',
        color: 'red',
    },
    fieldInput: {
        width: '90%',
        mx: 'auto',
        mt: 6,
        px: 4,
        letterSpacing: 'wider',
        bg: t => alpha('accent.light', 0.25)(t),
        borderWidth: '1px',
        borderStyle: 'solid',
        borderColor: 'transparent',
        borderRadius: 'inherit',
        color: 'inherit',
        fontFamily: 'inherit',
        transition: 'border-color 0.3s, boxShadow 0.3s, background-color 0.3s',
        '::placeholder': {
            color: t => alpha('accent.dark', 0.45)(t),
        },
        ':hover,:focus': {
            bg: 'whiteFade.35',
            boxShadow: t => `0 0 0 2px ${t.colors.accent.light}`,
            borderColor: 'accent.dark',
        },
        '&[data-style]': {
            bg: 'whiteFade.20',
            '::placeholder': {
                color: 'rgba(0,0,0,0.25)',
            },
            ':hover,:focus': {
                boxShadow: t => `0 0 0 2px ${t.colors.whiteFade['50']}`,
            },
        },
        '&[aria-invalid="true"]': {
            animation: `${jelly} 0.5s`,
            '&:not([data-style])': {
                bg: t => alpha('red', 0.06)(t),
                '::placeholder': {
                    color: t => alpha('red', 0.5)(t),
                },
                ':hover,:focus': {
                    bg: 'whiteFade.35',
                    boxShadow: t => `0 0 0 2px ${alpha('red', 0.2)(t)}`,
                },
            },
            '&:hover,&:focus': {
                borderColor: 'red',
            },
        },
    },
    fieldTextarea: {
        display: 'block',
        resize: 'none',
        py: ['10px', null, '14px'],
        fontSize: 'inherit',
    },
}

export default styles
