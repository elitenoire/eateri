/** @jsx jsx */
import { jsx } from '@theme-ui/core'
import React from 'react'
import SolidLogo from '~/public/inlineSvg/logo.svg'
import PlainLogo from '~/public/inlineSvg/logo-cutout.svg'
import LogoText from '~/public/inlineSvg/logo-tt.svg'

import styles from './style'

const getLogoBoxStyle = ({ plain, color, size, sx }) => ({
    ...styles.logoBox,
    ...(size && { fontSize: size }),
    ...(plain ? { ...(color && { color }) } : { color: `${color}.base` }),
    ...sx,
    '.logo': styles.logoBox['.logo'],
    ...(sx && { '.logo': sx['.logo'] }),
    '.logo-text': styles.logoBox['.logo-text'],
    ...(sx && { '.logo-text': sx['.logo-text'] }),
})

const Logo = React.forwardRef(({ color, plain, size, link, noText, sx, ...rest }, ref) => {
    const _logoProps = noText
        ? {
              sx: {
                  ...(size && { fontSize: size }),
                  ...(plain ? { ...(color && { color }) } : styles[color]),
                  ...sx,
              },
              ...rest,
          }
        : {
              ...(!plain && {
                  sx: styles[color],
              }),
          }

    const LogoTag = link ? 'a' : 'div'

    const _logo = plain ? (
        <PlainLogo aria-hidden="true" focusable="false" className="logo" {..._logoProps} />
    ) : (
        <SolidLogo aria-hidden="true" focusable="false" className="logo" {..._logoProps} />
    )

    if (noText) {
        return _logo
    }
    return (
        <LogoTag ref={ref} sx={getLogoBoxStyle({ plain, color, size, sx })} {...rest}>
            {_logo}
            <LogoText aria-hidden="true" focusable="false" className="logo-text" />
        </LogoTag>
    )
})

Logo.defaultProps = {
    color: 'primary',
}

Logo.displayName = 'Logo'

export default Logo
