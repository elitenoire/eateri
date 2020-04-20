import { alpha } from '@theme-ui/color'

const styles = {
    carouselCard: {
        display: 'flex',
        alignItems: 'center',
        height: 'inherit',
        padding: 2,
        fontSize: [null, null, 0],
        borderRadius: '50em 5em 0 0',
        borderBottom: '2px solid transparent',
        bg: 'rgba(255,255,255,0.008)',
        boxShadow: t => `0 1px 10px 1px ${alpha('secondary.base', 0.08)(t)}`,
        transition: 'transform 0.3s, border 0.3s',
        cursor: 'pointer',
        ':active': {
            transform: 'scale(0.95)',
        },
        div: {
            px: 4,
        },
        img: {
            height: ['auto', null, '50%', '70%'],
        },
    },
}

export default styles
