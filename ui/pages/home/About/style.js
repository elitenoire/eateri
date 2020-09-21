import { alpha } from '@theme-ui/color'

const styles = {
    section: {
        pl: [null, null, null, null, '20%'],
        pt: [9, null, null, null, 13],
        bg: 'muted',
    },
    container: {
        display: 'flex',
        flexDirection: ['column-reverse', null, null, null, 'row'],
        position: 'relative',
        borderRadius: [null, null, null, null, 40],
        textAlign: ['center', null, null, null, 'left'],
        py: [null, null, null, null, 9],
        color: 'textLight',
        background: t => [null, null, null, null, `linear-gradient(45deg,${t.colors.secondary.pale},transparent)`],
    },
    content: {
        flex: [null, null, null, null, 1],
        py: 2,
        pl: 2,
    },
    uniquePoints: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: ['center', null, null, null, 'start'],
        my: 3,
        p: {
            position: 'relative',
            fontSize: '0.95em',
            fontWeight: 'medium',
            pl: 7,
            mb: 1,
            ':before': {
                content: '""',
                position: 'absolute',
                size: '1.5em',
                left: 0,
                borderRadius: 'circle',
                transform: 'scale(0.45)',
            },
            '&:nth-of-type(1):before': {
                bg: 'primary.base',
                boxShadow: t => `0 0 0 0.5em ${alpha('primary.base', 0.2)(t)}`,
            },
            '&:nth-of-type(2):before': {
                bg: 'secondary.base',
                boxShadow: t => `0 0 0 0.5em ${alpha('secondary.base', 0.2)(t)}`,
            },
            '&:nth-of-type(3):before': {
                bg: 'accent.base',
                boxShadow: t => `0 0 0 0.5em ${alpha('accent.base', 0.2)(t)}`,
            },
        },
    },
}

export default styles
