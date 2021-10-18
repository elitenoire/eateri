const systemFont =
    '-apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen", "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue", sans-serif'

export const fonts = {
    fonts: {
        body: `Manrope, ${systemFont}`,
        heading: 'inherit',
        title: `Sen, ${systemFont}`,
        system: systemFont,
    },
    fontSizes: [
        '0.75em', // [0] - 12px
        '0.875em', // [1] - 14px
        '1em', // [2] - 16px
        '1.125em', // [3] - 18px
        '1.375em', // [4] - 22px
        '1.5em', // [5] - 24px
        '1.75em', // [6] - 28px
        '2em', // [7] - 32px
        '2.375em', // [8] - 38px
        '2.75em', // [9] - 44px
        '3.375em', // [10] - 54px
        '4em', // [11] - 64px
    ],
    fontWeights: {
        hairline: '100',
        thin: '200',
        light: '300',
        normal: '400',
        medium: '500',
        semibold: '600',
        bold: '700',
        extrabold: '800',
        black: '900',
        body: '400',
        heading: '700',
    },
    lineHeights: {
        none: '1',
        tight: '1.25',
        snug: '1.375',
        normal: '1.5',
        relaxed: '1.625',
        loose: '2',
        body: '1.5',
        heading: '1.1',
    },
    letterSpacings: {
        tighter: '-0.05em',
        tight: '-0.025em',
        normal: '0',
        wide: '0.025em',
        wider: '0.05em',
        widest: '0.1em',
    },
}
