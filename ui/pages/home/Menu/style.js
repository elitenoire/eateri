import { alpha } from '@theme-ui/color'
import { mediaQueries as mq } from '~/theme/tokens/rhythm'

import menufoodRUrl from '~/public/menufood-r.png'
import menufoodLUrl from '~/public/menufood-l.png'
import menuLeafUrl from '~/public/menuleaf.png'

const styles = {
    section: {
        position: 'relative',
        pt: [7, null, 10],
        pb: 4,
        bg: ['background', null, 'primary.base'],
        overflow: [null, null, null, 'hidden'],
        '.flex-split': {
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'flex-end',
        },
        ul: {
            listStyle: 'none',
        },
    },
    sectionHeader: {
        display: ['none', null, 'block'],
    },
    menuBox: {
        display: 'block',
        position: 'relative',
        pt: [0, null, 6],
        pb: [2, null, 0],
        mb: [4, null, 11],
        border: [null, null, '1px solid'],
        borderRadius: [null, null, 40],
        '.scrollable': {
            mx: ['-1.5em', null, 'auto'],
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
        alignItems: 'center !important',
        mx: [null, null, 6],
        h3: {
            mb: 0,
        },
        span: {
            display: ['none', null, null, 'initial'],
        },
        p: {
            // temp styles to mimic a link
            color: ['highlight.base', null, 'inherit'],
            textDecoration: [null, null, 'underline'],
            cursor: 'pointer',
        },
    },
    menuBoxBody: {
        overflow: [null, null, 'hidden'],
        borderRadius: [null, null, 'inherit'],
    },
    popularScrollable: {
        gridGap: [4, null, 7],
        pt: [8, null, 9],
        pb: 4,
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
            top: '-1.75em',
            right: '-1em',
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
        bg: t => [alpha('secondary.pale', 0.85)(t), null, 'inherit'],
        boxShadow: ({ colors: { primary } }) => [
            'sm',
            null,
            `1em 1em 3em ${primary.neumorph.dark}, -1em -1em 3em ${primary.neumorph.light}`,
        ],
        transition: 'transform 0.5s ease-out',
    },
    badgeRating: {
        color: [null, null, 'secondary.pale'],
        bg: t => [null, null, alpha('secondary.base', 0.08)(t)],
    },
    categoryScrollable: {
        gridGap: 4,
        pt: 7,
        pb: 6,
    },
    categoryCardWrap: {
        display: 'flex',
        width: ['8em', null, '7em'],
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
        size: ['7em', null, '6em'],
        display: 'flex',
        alignItems: 'flex-end',
        justifyContent: 'center',
        borderRadius: [30, null, 25],
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
    favoriteList: {
        pl: '2em',
    },
    favoriteCard: {
        position: 'relative',
        display: 'flex',
        alignItems: 'center',
        width: 'calc(100% - 1em)',
        p: 4,
        mt: 7,
        borderRadius: '1.5em',
        bg: 'background',
        boxShadow: ({ colors }) =>
            `20px 20px 40px ${colors.cardNeumorph.dark},-20px -20px 40px ${colors.cardNeumorph.light}`,
        cursor: 'pointer',
        transition: 'box-shadow 0.5s ease-out, transform 0.4s ease-out',
        button: {
            mr: '-2.25em',
        },
        '& > div:last-of-type': {
            flex: 1,
            minWidth: 0,
        },
        ':hover': {
            boxShadow: 'xl',
            transform: 'scale(1.05)',
        },
    },
    imageBox: {
        size: '6em',
        mr: 4,
        ml: '-3em',
    },
    pmSvg: {
        display: ['none', null, null, null, 'block'],
        position: 'absolute',
        right: '-2.95%',
        top: '6em',
        width: '15%',
        '.pm-bubble': {
            opacity: 0.25,
        },
    },
    menufoodR: {
        display: ['none', null, null, 'block'],
        position: 'absolute',
        backgroundImage: `url('${menufoodRUrl}')`,
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        width: '5%',
        height: '75%',
        right: 0,
        bottom: 0,
        transition: 'width 0.5s ease',
        ':hover': {
            width: '10%',
        },
    },
    menufoodL: {
        display: ['none', null, null, 'block'],
        position: 'absolute',
        backgroundImage: `url('${menufoodLUrl}')`,
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        backgroundPosition: 'top right',
        width: '28%',
        height: '100%',
        left: '-14%',
        top: 0,
        transition: 'left 0.5s ease',
        ':hover': {
            left: '-9%',
        },
    },
    menuBoxDecor: {
        display: ['none', null, 'block'],
        position: 'absolute',
        backgroundImage: `url('${menuLeafUrl}')`,
        width: '100%',
        height: '3em',
        top: 'calc(-3em - 1px)',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'top',
        backgroundSize: '90%',
    },
}

export default styles
