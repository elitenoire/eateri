import { alpha } from '@theme-ui/color'
import { mediaQueries as mq } from '~/theme/tokens/rhythm'

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
        // justifyContent: 'center',
        pt: 11,
        pb: 9,
        '&[data-footer-compact]': {
            fontSize: '0.9em',
            pl: 6,
        },
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
            fontSize: '2.5em',
        },
    },
    flexWrap: {
        display: 'flex',
        flexDirection: ['column', null, null, null, 'row'],
        flex: [null, null, null, null, 1],
        justifyContent: 'space-between',
    },
    formWrap: {
        flex: [null, null, null, null, 1],
        alignSelf: [null, null, null, null, 'center'],
        maxWidth: '35em',
    },
    footerContentWrap: {
        bg: t => alpha('secondary.hover', 0.5)(t),
        borderTopLeftRadius: 'round',
        borderTopRightRadius: 'round',
        '&[data-footer-compact]': {
            borderRadius: 'round',
            pb: 4,
        },
        'section ul': {
            mb: 2,
            li: {
                fontSize: 0,
                mb: 2,
                svg: {
                    display: 'inline-block',
                    verticalAlign: 'middle',
                    mr: 2,
                    mb: 1,
                },
                a: {
                    textDecoration: 'none',
                    fontWeight: 'medium',
                    transition: 'color 0.3s ease',
                },
                'svg, a:hover': {
                    color: 'primary.light',
                },
            },
        },
    },
    inputBar: {
        bg: t => alpha('secondary.base', 0.08)(t),
        boxShadow: t => `0 0 14px 2px ${alpha('textOnSecondary', 0.05)(t)}`,
    },
    socialMediaWrap: {
        display: 'flex',
        mr: 9,
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
        width: 'fluid',
        pt: 6,
        pb: 4,
        '&[data-footer-sticky]': {
            bg: 'secondary.dark',
            position: 'sticky', // 'fixed',
            bottom: 0,
            zIndex: 'footerCopywright',
            pt: 4,
            boxShadow: '0 -3px 10px hsla(0, 0%, 0%, 0.07)',
        },
        '& > div': {
            display: 'flex',
            justifyContent: 'space-between',
        },
    },
    footerSlide: {
        position: 'relative',
        bg: 'inherit',
        zIndex: 'footer',
    },
    footerReveal: {
        zIndex: 'footerReveal',
        // mb: '3.5em',
    },
    footerRevealPane: {
        py: '2em',
        bg: 'secondary.dark',
        boxShadow: '0 -3px 10px hsla(0, 0%, 0%, 0.07)',
    },
    footerRevealContent: {
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
}

export const fwmStyles = {
    mapLayout: {
        pt: 13,
        pb: 11,
        px: 8,
    },
    footerContent: {
        display: 'flex',
        flexDirection: ['column', null, 'row'],
        alignItems: ['flex-start', null, null, 'flex-end', 'center'],
        justifyContent: [null, null, 'space-between', 'space-evenly'],
        flexWrap: [null, null, 'wrap', null, 'nowrap'],
        mt: [9, null, null, 7],
        '.footer-card': {
            bg: t => [null, null, null, alpha('secondary.base', 0.5)(t)],
            borderRadius: 30,
            py: [null, null, null, 8],
            px: [null, null, null, 8, 7],
            boxShadow: [null, null, null, 'inner'],
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
        },
    },
}

export const fwlStyles = {
    linkLayout: {
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'space-between',
        px: 7,
        pt: 11,
        '& > div.block': {
            minWidth: '150px',
            flex: '0 1 auto',
        },
        '& > div.block:nth-of-type(3)': {
            '& > section:last-of-type > div': {
                display: [null, null, null, null, 'none'],
            },
        },
        '& > div.block:nth-of-type(4)': {
            minWidth: ['100%', null, null, null, 'initial'],
            order: [null, null, null, null, -1],
            section: {
                pt: [7, null, null, null, 5],
                mb: 7,
                textAlign: 'center',
                borderTop: '4px dashed',
                borderTopColor: 'secondary.base',
                div: {
                    mt: 4,
                    [mq.tabletL]: {
                        display: 'none',
                    },
                },
            },
        },
        '&&& section ul': {
            mb: 7,
        },
    },
    buttonWrap: {
        display: 'flex',
        flexDirection: 'column',
        gap: 3,
        mb: 7,
    },
}

export default styles
