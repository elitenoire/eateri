const styles = {
    wrapper: {
        width: '100%',
        height: '100%',
        borderRadius: 'inherit',
        '.leaflet-container': {
            borderRadius: 'inherit',
            width: 'inherit',
            height: 'inherit',
        },
        '.leaflet-tooltip': {
            bg: 'primary.base',
            borderColor: 'primary.base',
            color: 'textOnPrimary',
            fontSize: 3,
        },
        '.leaflet-tooltip-left:before': {
            borderLeftColor: 'primary.base',
        },
        '.leaflet-tooltip-right:before': {
            borderRightColor: 'primary.base',
        },
        '.leaflet-tooltip-top:before': {
            borderTopColor: 'primary.base',
        },
        '.leaflet-tooltip-bottom:before': {
            borderBottomColor: 'primary.base',
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
