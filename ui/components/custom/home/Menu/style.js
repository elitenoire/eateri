import { alpha } from '@theme-ui/color'
import { mediaQueries as mq } from '~/theme/tokens/rhythm'

const styles = {
    section: {
        position: 'relative',
        pt: [7, null, 10, 13],
        pb: [4, null, '10em'],
        bg: ['background', null, 'primary.base'],
        overflow: [null, null, null, 'hidden'],
        '.flex-split': {
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'flex-end',
        },
    },
    sectionHeader: {
        display: ['none', null, 'block'],
    },
    menuContainer: {
        position: [null, null, null, 'relative'],
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
            mx: ['bodyNegative', null, 'auto'],
            li: {
                px: 2,
            },
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
        span: {
            display: ['none', null, null, 'initial'],
        },
    },
    menuBoxLink: {
        '&,:active,:visited': {
            color: ['highlight.base', null, 'inherit'],
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
        '.food-card--image': {
            bg: [null, null, 'inherit'],
            boxShadow: ({ colors: { primary } }) => [
                null,
                null,
                `1em 1em 3em ${primary.neumorph.dark}, -1em -1em 3em ${primary.neumorph.light}`,
            ],
        },
        '.food-card--rating': {
            color: [null, null, 'secondary.pale'],
            bg: t => [null, null, alpha('secondary.base', 0.08)(t)],
        },
    },
    categoryScrollable: {
        gridGap: 4,
        pt: 7,
        pb: 6,
    },
    favoriteList: {
        pl: 7,
    },
    decorImageLeft: {
        display: ['none', null, null, 'block'],
        position: 'absolute',
        width: ['13.5em', null, null, null, '15em'],
        height: ['13.5em', null, null, null, '15em'],
        top: '-60%',
        left: ['-30%', null, null, null, '-27.5%'],
        zIndex: 1,
    },
    decorImageRight: {
        display: ['none', null, null, 'block'],
        position: 'absolute',
        width: '40%',
        height: ['11em', null, null, null, '12.5em'],
        bottom: '-35%',
        right: ['-20%', null, null, null, '-25%'],
        zIndex: 1,
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
    menuBoxDecor: {
        display: ['none', null, 'block'],
        position: 'absolute',
        width: '90%',
        height: '3em',
        top: 'calc(-3em - 1px)',
        left: '5%',
    },
}

export default styles
