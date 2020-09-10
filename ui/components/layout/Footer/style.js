import { alpha } from '@theme-ui/color'

const styles = {
    footer: {
        display: ['none', null, 'block'],
        bg: 'secondary.base',
        color: 'textOnSecondary',
    },
    container: {
        px: 6,
        maxWidth: '60em',
        margin: '0 auto',
    },
    newsletterWrap: {
        display: 'flex',
        flexDirection: ['column', null, null, 'row'],
        alignItems: 'flex-start',
        justifyContent: 'center',
        pt: 11,
        pb: 9,
    },
    newsletterText: {
        mr: 7,
        mb: 4,
        maxWidth: [null, null, null, null, '20em'],
        p: {
            opacity: 0.8, // temporary hack
        },
    },
    iconWrap: {
        borderRadius: 'apple',
        color: 'primary.base',
        padding: 6,
        mb: 4,
        mr: 7,
        bg: t => alpha('secondary.base', 0.08)(t),
        boxShadow: t => `0 0 14px 2px ${alpha('textOnSecondary', 0.05)(t)}`,
        transform: 'rotate(5deg)',
        svg: {
            display: 'block',
            fontSize: '2.5em',
            // size: '3em',
        },
    },
    flexWrap: {
        display: 'flex',
        flexDirection: ['column', null, null, null, 'row'],
        flex: [null, null, null, null, 1],
    },
    formWrap: {
        flex: [null, null, null, null, 1],
        alignSelf: [null, null, null, null, 'center'],
    },
    footerContentWrap: {
        bg: t => alpha('secondary.hover', 0.5)(t),
        borderTopLeftRadius: 'round',
        borderTopRightRadius: 'round',
        pt: 13,
        pb: 11,
        px: 8,
    },
    logoBox: {
        justifyContent: 'center',
        fontSize: '1.5em',
        '.logo': {
            size: '3em',
        },
    },
    inputBar: {
        bg: t => alpha('secondary.base', 0.08)(t),
        boxShadow: t => `0 0 14px 2px ${alpha('textOnSecondary', 0.05)(t)}`,
        input: {
            color: 'primary.light',
            '::placeholder': {
                color: t => alpha('primary.light', 0.1)(t),
            },
            ':focus': {
                borderColor: 'primary.light',
                boxShadow: 'none',
            },
        },
    },
    footerContent: {
        display: 'flex',
        flexDirection: ['column', null, null, 'row'],
        alignItems: ['center', null, null, 'flex-end', 'center'],
        justifyContent: [null, null, null, 'space-evenly'],
        flexWrap: [null, null, null, 'wrap', 'nowrap'],
        mt: 7,
        color: 'textOnSecondary',
        '.footer-card': {
            // alignSelf: 'flex-start',
            bg: t => alpha('secondary.base', 0.5)(t),
            borderRadius: 30,
            py: 8,
            px: [8, null, null, null, 7],
            boxShadow: 'inner',
        },
    },
    contactBlock: {
        ul: {
            listStyle: 'none',
            li: {
                my: 2,
                fontSize: 1,
            },
            svg: {
                display: 'inline-block',
                verticalAlign: 'middle',
                mr: 2,
                mb: 1,
                color: 'primary.pale',
            },
            a: {
                textDecoration: 'none',
                fontWeight: 'medium',
                transition: 'color 0.3s ease',
            },
            'a:hover': {
                color: 'primary.light',
            },
        },
    },
    gmap: {
        flex: [null, null, null, '100%', 1],
        order: [null, null, null, 1, 0],
        border: t => `1px solid ${t.colors.primary.light}`,
        padding: '0 !important',
        margin: [7, null, null, null, 4],
        width: 'fluid',
        height: '20em', // temporary
    },
    hoursBlock: {
        span: {
            display: 'block',
            color: 'primary.light',
            fontSize: 0,
            fontWeight: 'medium',
        },
    },
    socialMediaWrap: {
        textAlign: 'center',
        mt: 2,
        a: {
            display: 'inline-block',
            textDecoration: 'none',
            mr: 2,
            transition: 'transform 0.3s, color 0.3s',
            color: 'primary.pale',
            ':hover': {
                color: 'primary.light',
                transform: 'scale(1.1)',
            },
        },
    },
    copywright: {
        display: 'flex',
        justifyContent: 'space-around',
        bg: 'secondary.dark',
        pt: 6,
        pb: 4,
        boxShadow: '0 -3px 10px hsla(0, 0%, 0%, 0.07)',
    },
    payIcons: {
        width: '7em',
        color: 'primary.light',
        img: {
            width: '80%',
        },
    },
}

export default styles
