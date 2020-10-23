import logobgUrl from '~/public/logo-bg.svg'

const styles = {
    cta: {
        // background: ({ colors }) =>
        //     `url('${logobgUrl}'), linear-gradient(to bottom, ${colors.secondary.pale}, ${colors.secondary.light})`,
        backgroundImage: ({ colors }) =>
            `url('${logobgUrl}'), linear-gradient(to right, ${colors.accent.pale}, ${colors.highlight.pale},${colors.primary.pale},${colors.highlight.pale},${colors.accent.pale})`,
        backgroundSize: 'cover',
        backgroundPosition: 'bottom',
        backgroundAttachment: 'fixed',
        py: 13,
        textAlign: 'center',
    },
    card: {
        bg: 'primary.pale', // 'muted',
        borderRadius: 'round',
        boxShadow: '2xl',
        py: 7,
        px: 8,
    },
}

export default styles
