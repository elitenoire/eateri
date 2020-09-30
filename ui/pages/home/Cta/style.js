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
        bg: 'muted',
        borderRadius: 30,
        boxShadow: '2xl',
        py: 7,
        px: 8,
    },
}

export default styles
