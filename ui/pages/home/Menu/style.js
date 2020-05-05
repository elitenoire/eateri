import { alpha } from '@theme-ui/color'
import { mediaQueries as mq } from '~/theme/tokens/rythmn'

const styles = {
    section: {
        mt: t => [`-${t.space.header}`, null, 0],
        pt: [7, null, 10],
        px: ['8vw', null, null, '10%'],
        bg: ['background', null, 'primary.base'],
        borderTopLeftRadius: [40, null, 'none'],
        borderTopRightRadius: [40, null, 'none'],
    },
    sectionHeader: {
        display: ['none', null, 'block'],
    },
    menuBox: {
        pt: [0, null, 6],
        pb: 2,
        mx: ['-8vw', null, 0],
        mb: [4, null, 9],
        border: [null, null, '0.5px solid'],
        borderRadius: 40,
        overflow: 'hidden',
        '.scrollable': {
            margin: '0 auto',
            [mq.tabletS]: {
                overflow: '-moz-scrollbars-none',
                MsOverflowStyle: 'none',
                scrollbarWidth: 'none',
                '::-webkit-scrollbar': {
                    width: '0 !important',
                    display: 'none',
                },
            },
        },
    },
    menuBoxHeader: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        mx: 6,
        h3: {
            mb: 0,
        },
        span: {
            display: ['none', null, null, 'initial'],
        },
    },
    popularScrollable: {
        gridGap: 7,
        pt: [7, null, 9],
        pl: [7, null, 6],
        pb: 4,
        '& > div:last-of-type': {
            width: '10.5em',
            pr: 6,
        },
    },
    popularCard: {
        display: 'flex',
        width: '9em',
        flexDirection: 'column',
        alignItems: 'center',
        textAlign: 'center',
        cursor: 'pointer',
        '&:hover > div:first-of-type': {
            transform: 'translateY(-0.5em)',
        },
    },
    imageWrap: {
        size: '8em',
        padding: 4,
        mb: 4,
        borderRadius: 30,
        boxShadow: t => [
            'cards.depth.normal',
            null,
            `1em 1em 3em ${t.colors.primary.neumorph.dark}, -1em -1em 3em ${t.colors.primary.neumorph.light}`,
        ],
        transition: 'transform 0.5s ease-out',
    },
    categoryScrollable: {
        gridGap: 4,
        pl: [7, null, 6],
        pt: 7,
        pb: 9,
        '& > div:last-of-type': {
            width: '8.5em',
            pr: 6,
        },
    },
    categoryCardWrap: {
        display: 'flex',
        width: '7em',
        justifyContent: 'center',
    },
    categoryCard: img => ({
        position: 'relative',
        bg: 'secondary.base',
        backgroundSize: '100%',
        backgroundPosition: 'center center',
        backgroundImage: t =>
            `linear-gradient(rgba(0, 0, 0, 0) 30%,${alpha('secondary.base', 0.2)(t)} 40%,${alpha(
                'secondary.base',
                0.8
            )(t)} 80%),url(${img})`,
        color: 'textOnSecondary',
        size: '6em',
        display: 'flex',
        alignItems: 'flex-end',
        justifyContent: 'center',
        borderRadius: 25,
        padding: 3,
        cursor: 'pointer',
        boxShadow: 'cards.depth.normal',
        transition: 'transform 0.5s ease-out, box-shadow 0.5s, background-size 0.7s ease-out',
        ':hover': {
            transform: 'translateY(-0.5em)',
            backgroundSize: '120%',
            boxShadow: 'cards.depth.hover',
        },
    }),
}

export default styles
