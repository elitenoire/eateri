const styles = {
    backdrop: {
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        bg: 'blackFade.80',
        zIndex: 'modal',
        opacity: 0,
        overflowY: 'scroll',
        WebkitOverflowScrolling: 'touch',
        cursor: 'pointer',
        transition: 'opacity 0.2s ease',
        '&[data-enter]': {
            opacity: 1,
            '.modal-content': {
                opacity: 1,
                transform: 'translateY(0) scale(1)',
                transition: 'opacity 0.2s ease, transform 0.3s ease',
                transitionDelay: '0.1s',
            },
        },
        '&[data-leave]': {
            opacity: 0,
            '.modal-content': {
                opacity: 0,
                transform: 'translateY(2%) scale(0.98)',
                transition: 'opacity 0.2s ease, transform 0.2s ease',
            },
        },
    },
    modal: {
        position: 'relative',
        width: [null, null, null, '90%'],
        maxWidth: 'maxContainer',
        mt: [2, null, null, 11],
        mx: [null, null, null, 'auto'],
        cursor: 'default',
        ':focus': {
            boxShadow: 'none',
        },
    },
    closeButton: {
        position: 'absolute',
        top: [0, null, null, '-3.5em'],
        right: 0,
    },
    content: {
        bg: 'background',
        borderTopLeftRadius: ['default', null, null, '25'],
        borderTopRightRadius: [null, null, null, 'tiny'],
        overflow: 'hidden',
        // animation
        opacity: 0,
        transform: 'translateY(2%) scale(0.98)',
    },
}

export default styles
