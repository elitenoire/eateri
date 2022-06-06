import { scrollbarStyle } from '../style'

const styles = {
    mobileSheetTrigger: {
        pt: '50px',
    },
    mobileSheet: {
        '[data-rsbs-overlay]': {
            bg: 'accent.base',
            borderTopLeftRadius: 40,
            borderTopRightRadius: 40,
            ...scrollbarStyle,
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
