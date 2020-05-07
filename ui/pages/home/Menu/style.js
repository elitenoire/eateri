import { alpha } from '@theme-ui/color'
import { mediaQueries as mq } from '~/theme/tokens/rythmn'

const styles = {
    section: {
        mt: t => [`-${t.space.header}`, null, 0],
        pt: [7, null, 10],
        pb: 4,
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
        gridGap: [4, null, 7],
        pt: [7, null, 9],
        pl: 4,
        pb: 4,
        '& > div:last-of-type': {
            width: '10em',
            pr: 4,
            button: {
                right: '0.5em',
            },
        },
    },
    popularCard: {
        position: 'relative',
        width: '9em',
        display: 'flex',
        alignSelf: 'start',
        flexDirection: 'column',
        cursor: 'pointer',
        p: {
            mx: 3,
        },
        button: {
            position: 'absolute',
            top: '-1.5em',
            right: '-0.5em',
        },
        'p,button': {
            zIndex: 1, // avoids neumorph shadow bleed
        },
        '&:hover > div:first-of-type': {
            transform: 'translateY(-0.5em)',
        },
    },
    imageWrap: {
        size: '8em',
        padding: 4,
        mb: 4,
        borderRadius: 30,
        alignSelf: 'center',
        bg: ['secondary.pale', null, 'inherit'],
        boxShadow: t => [
            'sm',
            null,
            `1em 1em 3em ${t.colors.primary.neumorph.dark}, -1em -1em 3em ${t.colors.primary.neumorph.light}`,
        ],
        transition: 'transform 0.5s ease-out',
    },
    categoryScrollable: {
        gridGap: 4,
        pl: 4,
        pt: 7,
        pb: 6,
        '& > div:last-of-type': {
            width: '8em',
            pr: 4,
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
        boxShadow: '0 4px 6px -1px rgba(0,0,0,0.25), 0 2px 4px -1px rgba(0,0,0,0.06)',
        transition: 'transform 0.5s ease-out, box-shadow 0.5s, background-size 0.7s ease-out',
        ':hover': {
            transform: 'translateY(-0.5em)',
            backgroundSize: '120%',
            boxShadow: 'xl',
        },
    }),
    favouriteCard: {
        position: 'relative',
        display: 'flex',
        alignItems: 'center',
        width: 'calc(100% - 4em)',
        p: 4,
        mx: 6,
        mt: 7,
        mb: '-0.5em',
        borderRadius: '1.5em',
        bg: 'secondary.pale',
        boxShadow: 'sm',
        cursor: 'pointer',
        transition: 'box-shadow 0.5s ease-out, transform 0.4s ease-out',
        button: {
            mr: '-2.25em',
        },
        '& > div:last-of-type': {
            flex: 1,
        },
        ':hover': {
            boxShadow: 'xl',
            transform: 'scale(1.05)',
        },
    },
    imageBox: {
        size: '4em',
        mr: 4,
    },
}

export default styles
