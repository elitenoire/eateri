import colors from './tokens/colors'
import display from './tokens/display'
import fonts from './tokens/fonts'
import rythmn from './tokens/rythmn'
import variants from './tokens/variants'

export default {
    useColorSchemeMediaQuery: true,
    initialColorModeName: 'light',
    useCustomProperties: true,
    useBorderBox: false,
    fluidBodyFontSize: [1, null, 2, null, 3, null, 4],
    // fluidBodyLineHeight: ['none', null, null, null, 'tight', null, 'snug'],
    colors,
    ...fonts,
    ...display,
    ...variants,
    ...rythmn,
    pseudos: {
        _after: '&:after',
        _before: '&:before',
        _disabled:
            '&:disabled, &:disabled:focus, &:disabled:hover, &[aria-disabled=true], &[aria-disabled=true]:focus, &[aria-disabled=true]:hover',
    },
}
