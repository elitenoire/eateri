import { alpha, getColor } from '@theme-ui/color'
import { readableColor, isDark } from '~/lib/utils'

const styles = {
    section: {
        bg: 'muted',
    },
    container: {
        pt: 4,
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
    },
    subText: {
        position: 'relative',
        pl: 7,
        opacity: 0.5,
        mb: 4,
        svg: {
            position: 'absolute',
            left: 0,
            top: '-0.35em',
            fontSize: '3.5em',
            color: 'textLight',
            opacity: 0.4,
            zIndex: -1,
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
        width: ['60%', null, null, '50%'],
        left: ['30%', null, null, '25%'],
        bottom: '-10%',
    },
}

export default styles
