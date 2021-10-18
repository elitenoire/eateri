import { rhythm as R } from '~/theme/tokens/rhythm'
import logobgUrl from '~/public/logo-bg.svg'

const styles = {
    background: {
        backgroundImage: `url('${logobgUrl}')`,
        backgroundSize: '170%',
        backgroundAttachment: 'fixed',
        '&[data-padded]': {
            pt: 11,
        },
    },
    container: {
        maxWidth: 'maxContainer',
        [`@media screen and (min-width: ${R.breakpoints[3]})`]: {
            px: '1.5em',
        },
    },
    grid: {
        gridTemplateColumns: [null, null, null, null, '3fr 2fr'],
        gridColumnGap: '13',
        gridRowGap: 9,
        py: 11,
        px: [7, null, null, 9],
        borderRadius: ['tiny', null, '20'],
        bg: 'white',
    },
    divider: {
        width: '20%',
        borderRadius: 'default',
        height: '0.5em',
    },
    cardWrap: {
        gridRow: [null, null, null, null, 'span 2'],
        mt: [null, null, null, null, 11],
        width: 'fluid',
        maxWidth: '32em',
    },
    card: {
        position: 'relative',
        flexDirection: [null, null, null, null, 'column'],
        alignItems: ['center', null, null, null, 'initial'],
        justifyContent: ['space-around', null, null, null, 'initial'],
        // textAlign: 'left',
    },
    cardBg: {
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        borderRadius: 'inherit',
        zIndex: -1,
    },
}

export default styles
