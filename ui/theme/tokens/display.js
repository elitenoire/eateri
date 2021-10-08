export default {
    shadows: {
        xs: '0 0 0 1px rgba(0, 0, 0, 0.05)',
        sm: '0 1px 2px 0 rgba(0, 0, 0, 0.05)',
        default: '0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06)',
        md: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
        lg: '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)',
        xl: '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)',
        '2xl': '0 25px 50px -12px rgba(0, 0, 0, 0.20)',
        inner: 'inset 0 2px 4px 0 rgba(0, 0, 0, 0.06)',
        outline: '0 0 0 3px rgba(66, 153, 225, 0.5)',
        none: 'none',
        // Use for Avatar rings - change black to secondary?
        ringLight: '0 0 0 3px white, 0 0 0 5px black',
        ringDark: '0 0 0 3px #202020, 0 0 0 5px white',

        soft: '-3px 6px 21.1px -4px rgb(34, 48, 102, 0.1)',
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
    },
    radii: {
        none: '0',
        tiny: '5px',
        default: '0.875em', // 14px
        20: '1.25em',
        25: '1.5em',
        30: '2em',
        40: '2.5em',
        50: '3.125em', // 50px
        apple: '22.5%',
        icon: '40%',
        circle: '50%',
        round: '0.6em',
        pill: '50em',
        plate: '70% 30% 70% 30% / 30% 70% 30% 70%',
        blob0: '30% 70% 70% 30% / 30% 30% 70% 70%',
        blob1: '70% 30% 30% 70% / 70% 70% 30% 30%',
        blob2: '30% 70% 70% 30% / 70% 70% 30% 30%',
        blob3: '70% 30% 30% 70% / 30% 30% 70% 70%',
    },
    zIndices: {
        modal: 9999,
        backToTop: 2000,
        pageWrap: 1300,
        header: 1000,
        bottomBar: 1000,
        main: 11,
        footer: 10,
        footerCopywright: 9,
        footerReveal: 8,
    },
    borderWidths: {},
    borderStyles: {},
    borders: {},
}
