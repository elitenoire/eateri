import { alpha } from '@theme-ui/color'
import { keyframes } from '@emotion/core'
import { toEm, breakpointsMap } from '~/theme/tokens/rythmn'

const pop = keyframes`
0% {
    transform: scale(2);
    opacity: 0;
}
50% {
    transform: scale(0.8);
    opacity: 0.8;
}
100% {
    transform: scale(1);
    opacity: 1;
}
`

const styles = {
    section: {
        display: 'flex',
        flexDirection: 'column',
        height: ({ space }) => [
            `calc(60vh + 2 * ${space.header})`,
            null,
            `calc(100vmin - ${space.header})`,
            null,
            `calc(100vh - ${space.header})`,
        ],
        maxHeight: t => [`calc(28em + 2 * ${t.space.header})`, null, '600px', null, null, '650px'],
        minHeight: t => [`calc(23.5em + 2 * ${t.space.header})`, null, '500px', null, null, null, '600px'],
        /* mobile viewport bug fix */
        // minHeight: '-webkit-fill-available',
        overflow: 'hidden',
        mt: t => [`-${t.space.header}`, null, 0],
        py: ['header', null, 0],
        background: ({ colors }) => [
            // null,
            `linear-gradient(to right, ${colors.primary.hover} 10%, ${colors.primary.base} 10%)`,
            null,
            colors.heroStripe3,
            null,
            `linear-gradient(
            90deg,
            ${colors.heroStripe1} 0%,
            ${colors.heroStripe1} 20%,
            ${colors.heroStripe2} 20%,
            ${colors.heroStripe2} 50%,
            ${colors.heroStripe3} 50%,
            ${colors.heroStripe3} 100%
        )`,
        ],
        color: ['textOnPrimary', null, 'textOnSecondary'],
        [`@media screen and (max-height: ${toEm(breakpointsMap.tabletS - 1)}) and (orientation: portrait)`]: {
            height: '75vh',
        },
        '.only-mobile': {
            display: [null, null, 'none'],
        },
    },
    main: {
        position: 'relative',
        height: ['fluid', null, '80%'],
        fontSize: [null, null, '0.8em', '0.85em', null, '0.95em'],
    },
    socialLinks: {
        display: ['none', null, 'flex'],
        flexDirection: [null, null, null, null, 'column'],
        justifyContent: [null, null, 'flex-end', null, 'center'],
        position: 'absolute',
        top: 0,
        bottom: [null, null, null, null, 0],
        right: [null, null, 0, null, 'unset'],
        height: ['3em', null, null, null, 'unset'],
        mr: [null, null, 'calc(2vw + 0.6em - 0.25em)', null, 0],
        ml: [null, null, null, null, '2vw'],
        a: {
            textDecoration: 'none',
            transition: 'transform 0.3s',
            mx: 1,
        },
        svg: {
            my: 4,
        },
        'a:hover': {
            transform: 'scale(1.1)',
            color: 'primary.light',
        },
    },
    menuList: {
        display: 'flex',
        justifyContent: 'center',
        position: 'absolute',
        top: 0,
        left: [null, null, null, null, '50%'],
        right: [null, null, null, null, 0],
        height: [null, null, '3.5em', null, 'unset'],
        width: ({ space }) => ['60vh', null, `calc(80vh - ${space.header})`, null, 'unset'],
        maxWidth: ['450px', null, 'calc(0.8 * 500px)', 'calc(0.8 * 600px)', 'none'],
        borderRadius: [null, null, '0 0 0 50em', null, '0'],
        bg: [null, null, 'primary.base', null, 'transparent'],
        transform: ['rotate(-90deg) translateX(-100%)', null, null, null, 'none'],
        transformOrigin: 'left top 0',
        button: {
            position: 'relative',
            fontWeight: ['bold', null, null, null, 'normal'],
            textTransform: 'uppercase',
            color: t => [alpha('textOnPrimary', 0.5)(t), null, null, null, 'whiteFade.50'],
            ':hover': {
                color: t => [alpha('textOnPrimary', 0.85)(t), null, null, null, 'whiteFade.80'],
            },
        },
        'button[aria-selected=true]': {
            color: ['textOnPrimary', null, null, null, 'whiteFade.80'],
        },
        'button[aria-selected=true]::before': {
            position: 'absolute',
            content: '""',
            bottom: 0,
            left: 0,
            right: 0,
            margin: '0 auto',
            size: '0.4em',
            borderRadius: '50%',
            bg: ['white', null, null, null, 'accent.hover'],
            animation: `${pop} 0.3s linear`,
        },
    },
    contentGrid: {
        display: [null, null, 'grid'],
        gridTemplateColumns: [null, null, '1fr 1fr'],
        gridTemplateRows: [null, null, '1fr 50%', '1fr 55%', '1fr 30%'],
        size: 'fluid',
        paddingLeft: ['header', null, null, null, 0],
    },
    contentDetails: {
        display: 'flex',
        flexDirection: 'column',
        gridColumn: [null, null, 'span 2', null, 'span 1'],
        height: '100%',
        // minHeight alternative: make 1fr -> minmax(0,1fr) in grid-template-rows
        minHeight: [null, null, 0],
        fontWeight: 'light',
        pl: [null, null, 11, null, 13],
        pr: [null, null, 10],
        py: [null, null, 4],
        '& > div:first-of-type': {
            mb: ['auto', null, 0],
            // ml: [2, null, 0],
        },
    },
    contentHeadline: {
        fontSize: [6, null, 1],
        fontWeight: ['inherit', null, 'extrabold'],
        color: [null, null, 'primary.base'],
        letterSpacing: ['wide', null, 0],
        textTransform: [null, null, 'uppercase'],
        textShadow: t => [null, null, `1px 1px ${t.colors.secondary.dark}`],
    },
    contentTitle: {
        display: ['none', null, 'unset'],
        fontFamily: 'title',
        color: 'heroTitle',
    },
    contentDesc: {
        display: ['none', null, 'unset'],
        fontSize: [5, null, null, null, 4],
        color: 'heroText',
        my: 'auto',
        mx: 2,
        px: 2,
        borderLeft: t => `1.5px solid ${t.colors.primary.base}`,
        borderRadius: '1px',
    },
    contentImage: {
        display: ['none', null, 'flex'],
        alignItems: [null, null, 'center'],
        justifyContent: [null, null, 'center'],
        minWidth: [null, null, 0],
        gridRow: [null, null, 'span 1', null, 'span 2'],
        img: {
            height: ['80%', null, null, null, '70%'],
            mt: [null, null, null, null, 9],
        },
    },
    contentOrder: {
        display: ['none', null, 'flex'],
        flexWrap: 'wrap',
        alignItems: 'center',
        m: [null, null, 'auto', null, '0'],
        p: [null, null, null, null, '0 0 1em 5em'],
        '& > button': {
            borderTopLeftRadius: 0,
            textTransform: 'uppercase',
            '.symbol': {
                borderTopLeftRadius: 'pill',
            },
        },
    },
    contentPrice: {
        fontSize: 5,
        fontWeight: 'medium',
        letterSpacing: 'wide',
        minWidth: '40%',
        color: 'accent.base',
    },
    contentQty: {
        alignItems: 'center',
        m: '0 auto',
    },
    controls: {
        display: ['none', null, 'flex'],
        justifyContent: 'flex-end',
        alignItems: 'center',
        height: '20%',
        '& > div:last-of-type': {
            width: ['80%', null, null, null, '50%'],
        },
        '.selected > div': {
            borderBottom: t => `2px solid ${t.colors.accent.base}`,
        },
    },
    arrows: {
        display: 'flex',
        order: [1, null, null, null, 0],
        justifyContent: 'center',
        alignItems: 'center',
        flexWrap: 'wrap',
        textAlign: 'center',
        fontSize: 1,
        margin: 'auto',
    },
    counts: {
        order: [-1, null, null, null, 0],
        width: ['fluid', null, null, null, 'unset'],
        fontSize: [3, null, null, null, 2],
        mx: [0, null, null, null, 7],
        my: [1, null, null, null, 0],
    },
    carouselMobile: {
        position: 'relative',
        flex: 1,
        py: 4,
        mb: ['auto', null, 0],
        maxHeight: '23em', // 350px
        // overflow: 'hidden',
        // '&::before': {
        //     position: 'absolute',
        //     content: '""',
        //     top: 0,
        //     size: '140%',
        //     bg: t => alpha('highlight.dark', 0.08)(t),
        //     borderRadius: '50em 0 0 5em',
        //     transform: 'rotate(-15deg)',
        // },
        '.carousel': {
            height: '90%',
            maxWidth: '20em', // 300px
            margin: '0 auto',
            overflow: 'visible',
        },
        '.carousel-slide--item:not(.selected)': {
            pointerEvents: 'none',
        },
        '.carousel-slide--item > div': {
            position: 'relative',
            flexDirection: 'column',
            justifyContent: 'flex-end',
            bg: 'secondary.base',
            color: 'primary.base', // 'textOnSecondary',
            borderRadius: '1.35em',
            border: 0,
            img: {
                position: 'absolute',
                top: '10px',
                left: '-30%',
                width: '80%',
                maxWidth: '9.25em', // '140px'
            },
            div: {
                position: 'relative',
                alignSelf: 'stretch',
                minHeight: '40%',
                py: 4,
                borderRadius: '1.5em 1.5em 1.25em 1.25em',
                bg: 'rgba(255, 255, 255, 0.01)',
            },
            'p:last-of-type': {
                mt: 1,
                fontSize: 3,
                WebkitLineClamp: 2,
                fontWeight: 'normal',
                color: 'heroTitle',
            },
            button: {
                position: 'absolute',
                top: '-1em',
                right: '1em',
                margin: 0,
                color: 'secondary.base',
                boxShadow: '0.5px 0.5px 4px 0.8em rgba(255,255,255, 0.08)',
                ':hover': {
                    boxShadow: '0.5px 0.5px 12px 0.8em rgba(255,255,255, 0.08)',
                },
                '&::after': {
                    position: 'absolute',
                    content: '""',
                    size: '100%',
                    borderRadius: 'inherit',
                    border: t => `0.5px solid ${t.colors.primary.light}`,
                    transform: 'scale(1.5)',
                },
            },
        },
    },
    progressBar: {
        width: '50%',
        height: '0.5em',
        margin: '1em auto',
        borderRadius: '0.25em',
        bg: t => alpha('secondary.hover', 0.6)(t),
        '.progressBar__percent': {
            height: 'inherit',
            borderRadius: 'inherit',
            bg: 'secondary.base',
        },
    },
}

export default styles
