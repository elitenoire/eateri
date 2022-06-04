import { alpha } from '@theme-ui/color'
import { mediaQueries as mq } from '~/theme/tokens/rhythm'

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
}

export default styles
