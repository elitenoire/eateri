import { alpha } from '@theme-ui/color'
import { mediaQueries as mq } from '~/theme/tokens/rhythm'

const styles = {
    layout: {
        display: 'flex',
        flexDirection: ['column', null, null, 'row'],
        flexWrap: [null, null, null, 'wrap'],
        gap: 6,
    },
    fieldGuest: {
        width: '100%',
    },
    fieldDate: {
        width: [null, null, null, '55%', '45%'],
        'button.calendar--day[aria-current="date"] > span': {
            color: 'accent.hover',
        },
        'button.calendar--day[aria-selected="true"] > span': {
            bg: 'accent.dark',
        },
        'button.calendar--day[aria-selected="true"]:not([aria-current="date"]) > span': {
            color: 'white',
        },
        '&:not([data-style]) button.calendar--day:enabled:not([aria-disabled="true"]):not([aria-selected="true"]) > span':
            {
                transition: ['all 0.35s cubic-bezier(.21,.6,.35,1)', null, 'none'],
                bg: ['accent.light', null, 'inherit'],
            },
        '&:not([data-style]) button.calendar--day:enabled:not([aria-disabled="true"]):not([aria-selected="true"]):hover > span':
            {
                bg: t => ['accent.base', null, alpha('accent.light', 0.5)(t)],
                color: ['white', null, 'initial'],
                boxShadow: t => [`0 0.5em 0.7em -0.3em ${alpha('accent.base', 0.7)(t)}`, null, 'none'],
                transform: ['translateY(-2px)', null, 'none'],
            },
        '&[data-style]': {
            'button.calendar--day[aria-current="date"] > span': {
                color: 'white',
            },
            'button.calendar--day[aria-selected="true"] > span': {
                bg: 'secondary.base',
            },
            'button.calendar--day[aria-selected="true"]:not([aria-current="date"]) > span': {
                color: 'accent.base',
            },
            'button.calendar--day:enabled:not([aria-disabled="true"]):not([aria-selected="true"]) > span': {
                transition: 'all 0.35s cubic-bezier(.21,.6,.35,1)',
            },
            'button.calendar--day:enabled:not([aria-disabled="true"]):not([aria-selected="true"]):hover > span': {
                bg: 'rgba(0,0,0,0.15)',
                boxShadow: 'lg',
                transform: 'translateY(-2px)',
            },
        },
    },
    fieldTime: {
        flex: 1,
        minWidth: 0,
        '& > div': {
            height: '100%',
            pt: [null, null, null, '10px'],
            pl: [null, null, null, '10px'],
            pr: [null, null, null, '10px'],
            pb: [null, null, null, '15px'],
        },
        '.scrollable': {
            flexWrap: [null, null, null, 'wrap'],
            justifyContent: [null, null, null, 'space-around'],
            columnGap: 1,
            maxHeight: [null, null, null, 'calc(21.5em - 10px - 15px)'],
            pr: [null, null, null, '10px'],
            pb: [null, null, null, 0],
            overflowX: [null, null, null, 'hidden'],
            overflowY: [null, null, null, 'auto'],
            '::before, ::after': {
                display: [null, null, null, 'none'],
            },
            li: {
                mx: [2, null, null, 0, 1],
            },
            [mq.tablet]: {
                // hide scroll
                overflow: '-moz-scrollbars-none',
                MsOverflowStyle: 'none',
                scrollbarWidth: 'none',
                '::-webkit-scrollbar': {
                    width: '0 !important',
                    display: 'none',
                    background: 'transparent',
                },
            },
        },
    },
    selectBox: {
        li: {
            py: 1,
            px: 4,
            my: 4,
            textAlign: 'center',
            borderRadius: 'pill',
            cursor: 'pointer',
            minWidth: '4.5em',
            bg: 'accent.light',
            transition: 'all 0.35s cubic-bezier(.21,.6,.35,1)',
        },
        'li[aria-selected="true"]': {
            fontWeight: 'medium',
            bg: 'accent.dark',
            color: 'white',
        },
        'li[aria-disabled="true"]': {
            cursor: 'auto',
            opacity: 0.4,
        },
        'li:not([aria-disabled="true"]):not([aria-selected="true"]):hover': {
            transform: 'translateY(-2px)',
            bg: 'accent.base',
            color: 'white',
            boxShadow: t => `0 0.5em 0.7em -0.3em ${alpha('accent.base', 0.7)(t)}`,
        },
        'li[data-focus-visible]': {
            outline: t => `2px dotted ${t.colors.focusOutline}`,
            outlineOffset: '2px',
        },
        '&[data-style] li': {
            bg: 'rgba(0,0,0,0.08)',
        },
        '&[data-style] li[aria-selected="true"]': {
            bg: 'secondary.base',
            color: 'accent.base',
        },
        '&[data-style] li:not([aria-disabled="true"]):not([aria-selected="true"]):hover': {
            bg: 'rgba(0,0,0,0.15)',
            color: 'inherit',
            boxShadow: 'xl',
        },
    },
}

export default styles
