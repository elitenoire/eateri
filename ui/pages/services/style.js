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
    cardDelivery: {
        display: 'flex',
        flexDirection: ['column', null, null, null, 'row'],
        '& > div:last-of-type': {
            flex: [null, null, null, null, '1 1 50%'],
            mr: [null, null, null, null, 11],
        },
    },
    cardCatering: {
        display: 'flex',
        flexDirection: 'column',
    },
    svgDine: {
        display: 'block',
        position: 'relative',
        ml: 'auto',
        top: '-1.5em',
        width: ['38%', null, null, null, '53%'],
    },
    svgTakeouts: {
        display: 'block',
        width: ['55%', null, null, null, '60%'],
        mx: 'auto',
        my: 6,
    },
    svgDelivery: {
        display: 'block',
        position: 'relative',
        ml: 'auto',
        top: '-1.5em',
        flex: [null, null, null, null, '0 1 40%'],
        mr: [null, null, null, null, '-50px'],
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
        borderBottomLeftRadius: '0.7em',
        borderBottomRightRadius: '0.7em',
        borderTopLeftRadius: 40,
        borderTopRightRadius: 40,
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
