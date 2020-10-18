const styles = {
    wrapper: {
        width: '100%',
        height: '100%',
        borderRadius: 'inherit',
        '.leaflet-container': {
            borderRadius: 'inherit',
            width: 'inherit',
            height: 'inherit',
            'a.leaflet-popup-close-button': {
                color: 'textOnPrimary',
            },
        },
        '.leaflet-popup-content-wrapper,.leaflet-popup-tip': {
            bg: 'primary.base',
            color: 'textOnPrimary',
            fontSize: 3,
        },
    },
    errorOverlay: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%',
        height: '100%',
        borderRadius: 'inherit',
        opacity: 0.2,
        padding: 4,
        span: {
            display: 'block',
        },
    },
}

export default styles
