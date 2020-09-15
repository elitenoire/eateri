export const styles = {
    wrapper: {
        width: '100%',
        height: '100%',
        borderRadius: 'inherit',
        '& > div': {
            borderRadius: 'inherit',
        },
    },
    errorOverlay: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        opacity: 0.2,
        height: 'inherit',
        padding: 4,
        span: {
            display: 'block',
        },
    },
}

export const mapStyles = [
    {
        featureType: 'all',
        elementType: 'all',
        stylers: [
            {
                hue: '#ffbf00',
            },
            {
                visibility: 'simplified',
            },
            {
                invert_lightness: true,
            },
            {
                saturation: -50,
            },
            {
                lightness: 10,
            },
            {
                gamma: 0.5,
            },
        ],
    },
    {
        featureType: 'water',
        elementType: 'geometry',
        stylers: [
            {
                color: '#2D333C',
            },
        ],
    },
]
