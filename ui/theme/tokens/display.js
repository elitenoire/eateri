export default {
    shadows: {
        soft:
            'rgba(0, 0, 0, 0.05) -3px 3px 6px, rgba(0, 0, 0, 0.055) -20px 20px 55px, rgba(255, 255, 255, 0.6) -2px 2px 2px 1px inset, rgba(255, 255, 255, 0.4) 2px 2px 3px 0px inset, rgba(0, 0, 0, 0.05) 1px 1px 2px 0px inset',
        raised: 'inset 0 -1px 1px 0 rgba(0,0,0,.15), inset 0 1px 1px 0 rgba(255,255,255,.14)',
        pressed: 'inset 0 1px 1px 0 rgba(0,0,0,.15), inset 0 0 1px 0 rgba(255,255,255,.42)',
        hover: '0 7px 36px -10px rgba(0, 0, 0, 0.3)',
        glowLight: '0 2px 20px -5px',
        glowMedium: '0 2px 40px -5px',
        glowDark: '0 2px 20px 0px',
        depth: '0 25px  25px -10px',
        primary: t => `0 7px 36px -10px ${t.colors.heroText}`,
        sites: {
            moonlightwork: '0 2px 8px 0 rgba(0,0,0,.04), 0 2px 20px 0 rgba(0,0,0,.06)',
            vuesax: '0 4px 25px 0 rgba(0,0,0,.1)',
            zopa: '0 8px 12px 0 rgba(0,0,0,.1)',
            rrwebIo: '0 24px 48px rgba(17, 16, 62, 0.12)',
        },
        cards: {
            style1: {
                sm: '0 15px 20px -5px rgba(0,0,0,.1)',
                bg: '0 30px 40px -10px rgba(0,0,0,.2)',
            },
            depth: {
                normal: '0 30px 60px -10px rgba(0,0,0,0.22), 0 18px 36px -18px rgba(0,0,0,0.25)',
                hover: '0 50px 80px -20px rgba(0,0,0,0.27), 0 30px 50px -30px rgba(0,0,0,0.3)',
            },
        },
    },
    radii: {
        none: '0',
        default: '0.875em', // 14px
        20: '1.25em',
        40: '2.5em',
        50: '3.125em', // 50px
        apple: '17.544%',
        icon: '40%',
        round: '0.6em',
        pill: '50em',
        blob0: '30% 70% 70% 30% / 30% 30% 70% 70%',
        blob1: '70% 30% 30% 70% / 70% 70% 30% 30% ',
        blob2: '30% 70% 70% 30% / 70% 70% 30% 30% ',
        blob3: '70% 30% 30% 70% / 30% 30% 70% 70%',
    },
    zIndices: {
        header: 1000,
    },
    borderWidths: {},
    borderStyles: {},
    borders: {},
}
