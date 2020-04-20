const systemFont =
    '-apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen", "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue", sans-serif'

export default {
    fonts: {
        body: `Objectivity, ${systemFont}`, // , sans-serif',
        heading: 'inherit',
        title: `Sen, ${systemFont}`, // , sans-serif',
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
        '3em', // [9] - 48px
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
        none: '1em',
        tight: '1.25em',
        snug: '1.375em',
        normal: '1.5',
        relaxed: '1.625',
        loose: '2',
        body: '1.3',
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
