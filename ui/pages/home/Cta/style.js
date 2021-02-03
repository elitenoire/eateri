import imgUrl from '~/public/fruit-bowl.png'

const styles = {
    cta: {
        bg: 'background',
        backgroundImage: `url(${imgUrl})`,
        backgroundSize: ['35%', null, null, null, '15%', null, '10%'],
        backgroundPosition: ['120% 140%', null, null, null, 'right', null, '75% 50%'],
        backgroundRepeat: 'no-repeat',
    },
    card: {
        display: 'flex',
        flexDirection: ['column', null, null, null, 'row'],
        alignItems: 'center',
        justifyContent: [null, null, null, null, 'space-between'],
        textAlign: ['center', null, null, null, 'left'],
        maxWidth: 'maxContainer',
        py: 13,
        p: {
            flex: 1,
            mb: [3, null, null, null, 0],
            maxWidth: '18em',
        },
        'p span:first-of-type': {
            color: 'accent.base',
        },
        'p span:last-of-type': {
            color: 'primary.base',
        },
        button: {
            fontSize: 4,
        },
    },
}

export default styles
