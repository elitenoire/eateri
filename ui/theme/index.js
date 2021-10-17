import colors from './tokens/colors'
import display from './tokens/display'
import fonts from './tokens/fonts'
import rhythm from './tokens/rhythm'
import variants from './tokens/variants'

export default {
    config: {
        initialColorModeName: 'light',
        useBorderBox: false,
    },
    fluidBodyFontSize: [2, null, 2, null, 3, null, 4],
    colors,
    ...fonts,
    ...display,
    ...variants,
    ...rhythm,
    pseudos: {
        _after: '&:after',
        _before: '&:before',
        _disabled:
            '&:disabled, &:disabled:focus, &:disabled:hover, &[aria-disabled=true], &[aria-disabled=true]:focus, &[aria-disabled=true]:hover',
    },
}
