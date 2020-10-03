import { alpha, getColor } from '@theme-ui/color'
import { readableColor, isDark } from '~/lib/utils'

const styles = {
    section: {
        bg: 'muted',
    },
    container: {
        pt: 4,
        pb: 13, // temporary for demo
    },
    waveSvg: {
        display: 'block',
        fill: 'primary.base',
    },
    wrapper: {
        display: 'flex',
        alignItems: [null, null, null, null, 'flex-start'],
        flexDirection: ['column', null, null, null, 'row'],
        maxWidth: '60em',
        margin: '0 auto',
    },
    reviewBlock: {
        position: 'relative',
        flex: 1,
        minWidth: 0,
        mt: [13, null, null, null, '8em'],
        mb: [9, null, null, null, 0],
        '.glider--bullets': {
            textAlign: 'center',
            mb: 7,
        },
        '& > svg': {
            position: 'absolute',
            top: 0,
            left: [0, null, null, null, '-10%'],
            fontSize: '7em',
            color: 'textLight',
            opacity: 0.2,
            zIndex: 1,
        },
        '& > p': {
            opacity: 0.5,
            mb: 2,
            textAlign: ['center', null, null, null, 'left'],
        },
    },
    reviewCard: color => ({
        width: '100%',
        maxWidth: '22.5em',
        padding: 9,
        my: 4,
        mx: 'auto',
        textAlign: 'center',
        borderRadius: 20,
        bg: color,
        color: t => alpha(readableColor(color)(t), isDark(getColor(t, color)) ? 0.75 : 0.85)(t),
        '& > span:first-of-type': {
            color: 'black',
        },
    }),
    gliderControlBlock: {
        position: 'absolute',
        right: ['10%', null, null, '15%', 0],
        bottom: '5%',
    },
    imageBlock: {
        position: 'relative',
        flex: 1,
        width: '50%',
        alignSelf: ['center', null, null, null, 'initial'],
        mr: [null, null, null, null, 7],
        ml: [null, null, null, null, '-2em'],
        'svg .m-bean-ring': {
            fill: 'textLight',
            opacity: 0.2,
        },
        'svg .m-bean-bean': {
            fill: 'accent.light',
        },
    },
    gliderIndex: {
        position: 'absolute',
        top: 0,
        opacity: 0.7,
        fontSize: ['8em', null, null, null, '10em'],
        zIndex: 2,
    },
    foodImage: {
        position: 'absolute',
        width: '50%',
        left: '25%',
        bottom: '-10%',
    },
}

export default styles
