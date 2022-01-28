import { mediaQueries as mq } from '~/theme/tokens/rhythm'

export const categoryLinkStyle = {
    link: {
        display: 'flex',
        flexDirection: ['column', null, null, null, 'row'],
        justifyContent: ['center', null, null, null, 'start'],
        alignItems: 'center',
        borderRadius: 'pill',
        borderWidth: '1px',
        borderStyle: 'solid',
        borderColor: ['transparent', null, null, null, 'gray'],
        bg: [null, null, null, null, 'grayLight'],
        textDecoration: 'none',
        mb: [3, null, null, null, 4],
        p: [null, null, null, null, 1],

        flexGrow: 0,
        flexShrink: 0,
        flexBasis: ['5em', null, '6em', null, '95%'],
        transition: 'transform 0.3s',

        ':focus': {
            boxShadow: t => ['none', null, null, null, `0 0 0 3px ${t.colors.focusOutline}`],
        },
        '&:not([data-active]):hover': {
            borderColor: [null, null, null, null, 'transparent'],
            boxShadow: t => [null, null, null, null, `0 0 0 1.5px ${t.colors.secondary.base}`],
        },
        '&:not([data-active]):active': {
            transform: 'scale(0.98)',
        },
        '&[data-active]': {
            borderColor: [null, null, null, null, 'secondary.base'],
            bg: [null, null, null, null, 'secondary.base'],
            color: [null, null, null, null, 'whiteFade.80'],
        },
        [mq.tabletL]: {
            '&[data-active] > span:first-of-type': {
                borderColor: 'secondary.base',
                boxShadow: t => `0 0 0 3px ${t.colors.primary.base}`,
            },
            '&[data-active]:focus > span:first-of-type': {
                boxShadow: ({ colors }) => `0 0 0 3px ${colors.primary.base}, 0 0 0 6px ${colors.focusOutline}`,
            },
            '&:not([data-active]):hover > span:first-of-type': {
                borderColor: 'transparent',
                boxShadow: t => `0 0 0 1.5px ${t.colors.secondary.base}`,
            },
        },
    },
    iconWrap: {
        borderRadius: 'circle',
        borderWidth: '1.5px',
        borderStyle: 'solid',
        borderColor: ['gray', null, null, null, 'transparent'],
        bg: [null, null, null, null, 'white'],
        mr: [null, null, null, null, 2],
        mb: [2, null, null, null, 0],
        p: [3, null, null, null, 2],

        svg: {
            size: ['2em', null, null, null, '1.5em'],
        },
    },
}

export const styles = {
    banner: {
        display: ['none', null, 'flex'],
        alignItems: 'center',
        position: 'relative',
        height: '20em',
        bg: 'accent.pale',
    },
    imageWrap: {
        position: 'absolute',
        width: ['100%', null, null, null, '65%'],
        top: 0,
        right: 0,
        bottom: 0,
    },
    textWrap: {
        position: 'relative',
        maxWidth: ['28em', null, null, null, '40em'],
        p: 7,
    },
    bgText: {
        bg: 'whiteFade.70',
        p: '10px',
        boxDecorationBreak: 'clone',
    },
    subText: {
        display: ['none', null, null, null, 'block'],
    },
    layoutGrid: {
        display: 'grid',
        gridTemplateColumns: [null, null, null, null, '13em 1fr 1fr'],
        gridTemplateAreas: [
            '"mt" "sf" "mn" "stc" "sv" "c"',
            null,
            '"sf" "mt" "mn" "stc" "sv" "c"',
            null,
            '"mt sf sv" "mn stc stc" "mn c c"',
        ],
        gridGap: 4,
        px: 'body',
        py: 6,
        '& > div:nth-last-of-type(-n+3)': {
            // last 3 grid items
            px: [null, null, 4],
        },
    },
    menuTitle: {
        gridArea: 'mt',
        alignSelf: 'center',
        textAlign: [null, null, 'center', null, 'left'],

        position: [null, null, null, null, 'sticky'],
        top: [null, null, null, null, 0],
        zIndex: [null, null, null, null, 1],
        span: {
            display: [null, null, null, null, 'none'],
        },
    },
    titleMenu: {
        bg: 'background',
        py: [null, null, null, null, 1],
        pl: [null, null, null, null, 1],
    },

    searchFilter: { gridArea: 'sf' },
    searchContainer: {
        position: 'relative',
        bg: 'white',
        width: '100%',
        maxWidth: '35em',
        margin: '0 auto',
        p: [null, null, 4, null, 0],
        top: [null, null, '-3em', null, 0],
        borderRadius: [null, null, 'default'],
        boxShadow: [null, null, '2xl', null, 'none'],
    },

    menuNav: {
        gridArea: 'mn',
        minWidth: 0,
        alignSelf: [null, null, null, null, 'start'],
        position: [null, null, null, null, 'sticky'],
        top: [null, null, null, null, '3.5em'],
    },
    scrollable: {
        flexDirection: [null, null, null, null, 'column'],
        mx: ['bodyNegative', null, null, null, 0],
        maxHeight: [null, null, null, null, 'calc(100vh - 3.75em)'],
        overflowY: [null, null, null, null, 'auto'],
        background: [
            null,
            null,
            null,
            null,
            'linear-gradient(#ffffff 30%, rgba(255,255,255, 0)),linear-gradient(rgba(255,255,255, 0), #ffffff 70%) 0 100%,radial-gradient(farthest-side at 50% 0, rgba(0,0,0, 0.2), rgba(0,0,0,0)),radial-gradient(farthest-side at 50% 100%, rgba(0,0,0, 0.2), rgba(0,0,0,0)) 0 100%',
        ],
        bg: 'background',
        backgroundRepeat: [null, null, null, null, 'no-repeat'],
        backgroundAttachment: [null, null, null, null, 'local, local, scroll, scroll'],
        backgroundSize: [null, null, null, null, '100% 45px, 100% 45px, 100% 15px, 100% 15px'],
    },
    nav: {
        display: 'flex',
        flexDirection: [null, null, null, null, 'column'],
        flexWrap: [null, null, null, null, 'wrap'],
        alignItems: ['start', null, null, null, 'stretch'],
        pt: 3,
        pl: [null, null, null, null, 2],
        mr: [null, null, null, null, 4],
        textAlign: ['center', null, null, null, 'left'],
    },

    searchTermCount: { gridArea: 'stc' },
    searchTermCountHeading: {
        mb: 1,
        mt: [2, null, 4],
    },

    sortView: {
        gridArea: 'sv',
        alignSelf: 'center',
    },
    sortViewContainer: {
        display: 'flex',
        flexWrap: 'wrap',
        gap: 3,
        fontSize: 1,
        justifyContent: ['space-between', null, null, null, 'flex-end'],
    },

    content: { gridArea: 'c' },
}
