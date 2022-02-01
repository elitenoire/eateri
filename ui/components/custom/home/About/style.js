import { alpha } from '@theme-ui/color'

const styles = {
    section: {
        pl: ['1.5em', null, '8%', '10%', '20%'],
        pr: [0, null, null, '10%', 0, null, '20%'],
        pt: 13,
        pb: [13, null, null, '8em'],
        bg: 'background',
        overflow: 'hidden', // for animation popIn of image
    },
    container: {
        position: 'relative',
        display: 'flex',
        flexDirection: ['column-reverse', null, null, null, 'row'],
        borderTopLeftRadius: 40,
        borderBottomLeftRadius: 40,
        borderTopRightRadius: [null, null, null, 'tiny', 0, null, 40],
        borderBottomRightRadius: [null, null, null, 'tiny', 0, null, 'tiny'],
        pt: [null, null, null, null, 9],
        pb: [null, null, null, null, 10],
        maxWidth: [null, null, null, null, null, null, 'container'],
        mx: [null, null, null, null, null, null, 'auto'],
        color: 'heroText',
        background: t => [
            null,
            null,
            null,
            null,
            `linear-gradient(45deg,${t.colors.secondary.hover},${t.colors.secondary.base})`,
        ],
    },
    imageWrap: {
        '.m-wrapper > div': {
            borderRadius: 'inherit',
        },
    },
    image: {
        position: 'absolute',
        width: '30%',
        top: ['-5%', null, null, null, 'initial'],
        bottom: [null, null, null, null, '-20%'],
        right: 0,
    },
    content: {
        flex: [null, null, null, null, 1],
        pt: [9, null, null, 11, 2],
        pl: [9, null, null, 11, 2],
        pr: [8, null, null, 13, '7em'],
        pb: ['6em', null, null, null, 2],
        mt: [7, null, null, null, 0],
        mb: ['-6em', null, null, '-7em', 0],
        borderRadius: 'inherit',
        background: t => [
            `linear-gradient(45deg,${t.colors.secondary.hover},${t.colors.secondary.base})`,
            null,
            null,
            null,
            'transparent',
        ],
    },
    uniquePoints: {
        display: 'flex',
        flexDirection: 'column',
        mt: 4,
        mb: 3,
        p: {
            position: 'relative',
            fontWeight: 'light',
            pl: 7,
            mb: 1,
            ':before': {
                content: '""',
                position: 'absolute',
                size: '1.5em',
                left: 0,
                borderRadius: 'circle',
                transform: 'scale(0.45)',
            },
            '&:nth-of-type(1):before': {
                bg: 'primary.base',
                boxShadow: t => `0 0 0 0.5em ${alpha('primary.base', 0.2)(t)}`,
            },
            '&:nth-of-type(2):before': {
                bg: 'highlight.base',
                boxShadow: t => `0 0 0 0.5em ${alpha('highlight.base', 0.2)(t)}`,
            },
            '&:nth-of-type(3):before': {
                bg: 'accent.base',
                boxShadow: t => `0 0 0 0.5em ${alpha('accent.base', 0.2)(t)}`,
            },
        },
    },
}

export default styles
