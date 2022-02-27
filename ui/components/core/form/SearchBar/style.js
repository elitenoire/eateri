import { alpha } from '@theme-ui/color'

const styles = {
    wrapper: ({ radius, shadow, outline, bg, color }) => ({
        position: 'relative',
        display: 'flex',
        alignItems: 'center',
        pl: 3,
        pr: 2,
        py: 1,
        bg,
        color: `${color}.base`,
        borderRadius: radius,
        borderWidth: '1.5px',
        borderStyle: 'solid',
        borderColor: outline ? 'currentColor' : 'transparent',
        ...(shadow && { boxShadow: shadow }),
        '& > i': {
            transition: 'opacity 0.2s',
        },
        '&[data-focused]': {
            ...(!outline && { borderColor: 'currentColor' }),
            boxShadow: t => `0 0 0 3px ${t.colors[color].light}`,
            '& > i': {
                opacity: 0.7,
            },
        },
    }),
    search: {
        flex: 1,
        display: 'flex',
        alignItems: 'center',
        label: {
            display: 'flex',
        },
    },
    form: {
        flex: 1,
        mx: 2,
    },
    input: ({ color }) => ({
        border: 'none',
        color: 'text',
        ':focus': {
            boxShadow: 'none',
        },
        '::placeholder': {
            color: `${color}.base`,
            opacity: 0.75,
        },
        '::-webkit-search-cancel-button,::-webkit-search-decoration': {
            appearance: 'none',
            display: 'block',
            height: '20px',
            width: '20px',
            backgroundSize: '20px 20px',
            backgroundRepeat: 'no-repeat',
            backgroundImage: t =>
                `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' width='24' height='24'%3E%3Cpath fill='none' d='M0 0h24v24H0z'/%3E%3Cpath fill='${alpha(
                    `${color}.dark`,
                    1
                )(
                    t
                )}' d='M12 22C6.477 22 2 17.523 2 12S6.477 2 12 2s10 4.477 10 10-4.477 10-10 10zm0-11.414L9.172 7.757 7.757 9.172 10.586 12l-2.829 2.828 1.415 1.415L12 13.414l2.828 2.829 1.415-1.415L13.414 12l2.829-2.828-1.415-1.415L12 10.586z'/%3E%3C/svg%3E")`,
        },
    }),
    filter: {
        display: 'flex',
    },
}

export default styles
