import { alpha } from '@theme-ui/color'
import { mediaQueries as mq } from '~/theme/tokens/rhythm'

const styles = {
    section: {
        pt: [4, null, 7],
        pb: 10,
        bg: 'accent.base',
        borderTopLeftRadius: [40, null, 'none'],
        borderTopRightRadius: [40, null, 'none'],
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
    halo: {
        position: 'relative',
        padding: 4,
        bg: 'white',
        borderRadius: 25,
        boxShadow: 'xl', // none
        transition: 'all 0.3s ease-out',
        '&[data-show-halo="true"]': {
            boxShadow: t => `0 0 0 0.9em ${t.colors.accent.base}, 0 0 0 1em white`,
            ':hover': {
                boxShadow: t => `${t.shadows.lg}, 0 0 0 0.9em ${alpha('accent.base', 0.8)(t)}, 0 0 0 1em white`,
            },
        },
    },
    content: {
        display: 'flex',
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
                display: 'block',
                fontSize: [3, null, 4],
            },
        },
    },
}

export default styles
