import logobgUrl from '~/public/logo-bg.svg'

const styles = {
    cta: {
        background: ({ colors }) =>
            `url('${logobgUrl}'), linear-gradient(to bottom, ${colors.secondary.pale}, ${colors.secondary.light})`,
        backgroundSize: 'cover',
        backgroundPosition: 'bottom',
        py: 13,
        textAlign: 'center',
    },
    card: {
        bg: 'secondary.pale',
        borderRadius: 30,
        boxShadow: '2xl',
        padding: 7,
    },
}

export default styles
