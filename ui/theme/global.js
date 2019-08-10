import { createGlobalStyle, css } from 'styled-components'
import { up } from 'styled-breakpoints'
// Custom fonts
import 'typeface-comfortaa'
import 'typeface-overpass'

const Global = createGlobalStyle`
*, *:after, *:before {
  box-sizing: border-box;
  padding: 0;
  margin: 0;
}
*:focus {
  outline: 0;
  box-shadow: 0 0 0 3px rgba(0, 123, 255, 0.5);
}
html, body, #__next {
  height: 100%;
}
svg {
  fill: currentColor;
  width: 1.2em;
  height: 1.2em;
}
a, a:active, a:visited {
  color: inherit;
}
${({
    theme: {
        fluidTypography: { minFontSize, maxFontSize, minLineHeight, maxLineHeight },
        breakpoints: { xs, xl },
        typography: { bodyFontFamily, bodyColor },
    },
}) => css`
    body {
        font-family: ${bodyFontFamily};
        font-size: ${minFontSize}em;
        line-height: ${minLineHeight}em;
        color: ${bodyColor};
        ${up('xs')} {
            font-size: calc(
                ${minFontSize}em + (${maxFontSize} - ${minFontSize}) *
                    ((100vw - ${parseFloat(xs) / 16}em) / (${(parseFloat(xl) - parseFloat(xs)) / 16}))
            );
            line-height: calc(
                ${minLineHeight}em + (${maxLineHeight} - ${minLineHeight}) *
                    ((100vw - ${parseFloat(xs) / 16}em) / (${(parseFloat(xl) - parseFloat(xs)) / 16}))
            );
        }
        ${up('xl')} {
            font-size: ${maxFontSize}em;
            line-height: ${maxLineHeight}em;
        }
    }
`}
`

export default Global
