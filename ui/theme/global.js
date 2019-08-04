import { createGlobalStyle } from 'styled-components'

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
  width: 100%;
}
svg {
  fill: currentColor;
  width: 1.2em;
  height: 1.2em;
}
`

export default Global
