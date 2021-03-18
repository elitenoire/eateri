import { alpha } from '@theme-ui/color'

const styles = {
    container: {
        maxWidth: [null, null, null, '40em', 'maxContainer'],
    },
    grid: {
        gridAutoRows: 'minmax(22em, auto)',
        gridTemplateColumns: [null, null, null, null, '1fr 1fr'],
        '& >div:nth-of-type(3)': {
            gridColumn: [null, null, null, null, 'span 2'],
        },
    },
    morphCard: {
        borderRadius: '0.7em',
        px: 8,
        pt: 9,
        height: '100%',
    },
    cardDine: {
        bg: 'secondary.hover',
        color: 'secondary.light',
    },
    cardTakeouts: {
        bg: 'primary.base',
        color: 'textOnPrimary',
    },
    cardDelivery: {
        display: 'flex',
        flexDirection: ['column', null, null, 'row'],
        bg: 'highlight.pale',
        '& > div:last-of-type': {
            flex: [null, null, null, '1 1 50%'],
            mr: [null, null, null, 11],
        },
    },
    cardCatering: {
        display: 'flex',
        flexDirection: 'column',
        bg: 'secondary.base',
        color: 'textOnSecondary',
    },
    svgDine: {
        display: 'block',
        position: 'relative',
        ml: 'auto',
        top: '-3.25em',
        width: ['38%', null, null, null, '53%'],
    },
    svgTakeouts: {
        display: 'block',
        mx: 'auto',
        width: ['55%', null, null, null, '60%'],
        mb: 6,
    },
    svgDelivery: {
        display: 'block',
        position: 'relative',
        ml: 'auto',
        top: '-2em',
        flex: [null, null, null, '0 1 40%'],
        mr: [null, null, null, '-50px'],
        width: '50%',
    },
    svgCatering: {
        order: -1,
        size: '5em',
        mb: 7,
    },
    imageSplit: {
        display: 'flex',
        flexDirection: 'column',
        height: '100%',
        bg: 'accent.light',
        p: 3,
        borderRadius: '0.7em',
        '& > div:first-of-type': {
            px: 5,
            pt: 7,
            pb: 2,
        },
        '& > div:last-of-type': {
            position: 'relative',
            overflow: 'hidden',
            flex: 1,
            borderRadius: '0.6em',
            bg: t => alpha('accent.pale', 0.3)(t),
            boxShadow: t => `0 0 0 8px ${t.colors.accent.pale}, 0 10px 20px rgba(0,0,0,0.2)`,
            margin: '8px',
        },
    },
}

export default styles
