import oc from 'open-color'

const colorScales = {
    //   grey: {
    //     gray0: oc.gray[0],
    //     gray1: oc.gray[1],
    //     gray2: oc.gray[2],
    //     gray3: oc.gray[3],
    //     gray4: oc.gray[4],
    //     gray5: oc.gray[5],
    //     gray6: oc.gray[6],
    //     gray7: oc.gray[7],
    //     gray8: oc.gray[8],
    //     gray9: oc.gray[9]
    //   },
    gray: oc.gray,
    blue: {
        lightest: oc.blue[0],
        lighter: oc.blue[1],
        light: oc.blue[4],
        base: oc.blue[5],
        dark: oc.blue[7],
    },
    red: {
        lightest: oc.red[0],
        lighter: oc.red[1],
        light: oc.red[4],
        base: oc.red[5],
        dark: oc.red[7],
    },
    orange: {
        lightest: oc.orange[0],
        lighter: oc.orange[1],
        light: oc.orange[4],
        base: oc.orange[5],
        dark: oc.orange[7],
    },
    yellow: {
        lightest: oc.yellow[0],
        lighter: oc.yellow[1],
        light: oc.yellow[4],
        base: oc.yellow[5],
        dark: oc.yellow[7],
    },
    green: {
        lightest: oc.green[0],
        lighter: oc.green[1],
        light: oc.green[4],
        base: oc.green[5],
        dark: oc.green[7],
    },
    lime: {
        lightest: oc.lime[0],
        lighter: oc.lime[1],
        light: oc.lime[4],
        base: oc.lime[5],
        dark: oc.lime[7],
    },
    teal: {
        lightest: oc.teal[0],
        lighter: oc.teal[1],
        light: oc.teal[4],
        base: oc.teal[5],
        dark: oc.teal[7],
    },
    indigo: {
        lightest: oc.indigo[0],
        lighter: oc.indigo[1],
        light: oc.indigo[4],
        base: oc.indigo[5],
        dark: oc.indigo[7],
    },
    violet: {
        lightest: oc.violet[0],
        lighter: oc.violet[1],
        light: oc.violet[4],
        base: oc.violet[5],
        dark: oc.violet[7],
    },
}

const theme = {
    colors: {
        primary: oc.yellow,
        accent: oc.lime,
        ...oc,
        // background:,
        // surface:,
        // error:,
        // success:,
        // warning:,
        // info:,
    },
    sizes: {
        button: [0.4, 0.6, 0.8, 1, 1.2],
        icon: [1, 1.2, 1.4, 1.6, 1.8],
    },
    breakpoints: {
        xs: '375px',
        sm: '576px',
        md: '768px',
        lg: '992px',
        xl: '1280px',
    },
    shadows: {
        card: '0 5px 10px 0 rgba(0, 0, 0, 0.1)',
    },
    fluidTypography: {
        minFontSize: 0.875, // 14px
        maxFontSize: 1.125, // 18px
        minLineHeight: 1.2,
        maxLineHeight: 1.4,
    },
    typography: {
        fontSizes: ['2.074em', '1.728em', '1.44em', '1.2em', '1em', '0.833em'],
        bodyFontFamily: '"Overpass", sans-serif',
        headingFontFamily: '"Comfortaa", sans-serif',
        bodyColor: oc.gray[8],
        headingColor: oc.gray[9],
        bodySize: 'inherit',
        headingSize: 2,
        bodyLineHeight: 'inherit',
    },
}

export default theme
