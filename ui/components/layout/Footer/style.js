import { alpha } from '@theme-ui/color'

const styles = {
    footer: {
        display: ['none', null, 'block'],
        bg: 'secondary.base',
        color: 'textOnSecondary',
    },
    container: {
        px: 6,
        maxWidth: 'maxContainer',
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
            opacity: 0.8,
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
        flexDirection: ['column', null, 'row'],
        alignItems: ['flex-start', null, null, 'flex-end', 'center'],
        justifyContent: [null, null, 'space-between', 'space-evenly'],
        flexWrap: [null, null, 'wrap', null, 'nowrap'],
        mt: [9, null, null, 7],
        color: 'textOnSecondary',
        '.footer-card': {
            bg: t => [null, null, null, alpha('secondary.base', 0.5)(t)],
            borderRadius: 30,
            py: [null, null, null, 8],
            px: [null, null, null, 8, 7],
            boxShadow: [null, null, null, 'inner'],
        },
    },
    contactBlock: {
        mb: 7,
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
    mapBlock: {
        flex: [null, null, '100%', null, 1],
        order: [1, null, null, null, 0],
        border: t => `1px solid ${t.colors.primary.light}`,
        mx: [null, null, null, null, 4],
        my: [7, null, null, null, 4],
        width: 'fluid',
        height: '20em',
        bg: t => alpha('secondary.base', 0.5)(t),
        color: 'text',
        borderRadius: 30,
        boxShadow: 'inner',
    },
    hoursBlock: {
        textAlign: [null, null, 'right', 'initial'],
        span: {
            display: 'block',
            color: 'primary.light',
            fontSize: 0,
            fontWeight: 'medium',
        },
    },
    socialMediaWrap: {
        textAlign: [null, null, 'right', 'center'],
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
        position: 'fixed',
        bottom: 0,
        width: 'fluid',
        zIndex: 'footerCopywright',

        display: 'flex',
        justifyContent: 'space-around',
        bg: 'secondary.dark',
        pt: 4,
        pb: 4,
        boxShadow: '0 -3px 10px hsla(0, 0%, 0%, 0.07)',
        a: {
            color: 'primary.base',
            fontWeight: 'bold',
        },
    },
    payIcons: {
        width: '7em',
        color: 'primary.light',
        img: {
            width: '80%',
        },
    },
    footerSlide: {
        position: 'relative',
        bg: 'inherit',
        zIndex: 'footer',
    },
    footerReveal: {
        zIndex: 'footerReveal',
        mb: '3.5em',
    },
    footerRevealPane: {
        py: '2em',
        bg: 'secondary.dark',
        boxShadow: '0 -3px 10px hsla(0, 0%, 0%, 0.07)',
    },
    footerRevealContent: {
        // bg: 'primary.light',
        backgroundImage: ({ colors }) =>
            `linear-gradient(to right, ${colors.accent.pale}, ${colors.highlight.pale},${colors.primary.pale},${colors.highlight.pale},${colors.accent.pale})`,
        color: 'textOnPrimary',
        py: 7,
        px: 2,
        textAlign: 'center',
        boxShadow: 'inset 0 15px 30px 0px rgba(0,0,0,0.5)',
        p: {
            fontSize: [7, null, null, 8],
        },
    },
    specialUnderline: {
        color: 'highlight.base',
        backgroundSize: '100% 15%',
        backgroundRepeat: 'repeat-x',
        backgroundPosition: 'left 0% bottom 0%',
        backgroundImage: ({ colors }) =>
            `linear-gradient(179deg, ${colors.highlight.dark} 0%, ${colors.highlight.dark} 50%,transparent 54%, transparent 100%)`,
        // backgroundImage: ({ colors }) =>
        //     `repeating-linear-gradient(135deg, ${colors.highlight.base} 0px, ${colors.highlight.base} 7px,transparent 7px, transparent 14px),repeating-linear-gradient(45deg, ${colors.highlight.hover} 0px, ${colors.highlight.hover} 7px,transparent 7px, transparent 14px),repeating-linear-gradient(135deg, #FFF 0px, #FFF 7px,#FFF 7px, #FFF 14px)`,
    },
}

export default styles
