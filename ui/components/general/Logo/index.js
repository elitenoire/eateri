import { forwardRef } from 'react'
import { ReactComponent as SolidLogo } from '~/public/inlineSvg/logo.svg'
import { ReactComponent as PlainLogo } from '~/public/inlineSvg/logo-cutout.svg'
import { ReactComponent as LogoText } from '~/public/inlineSvg/logo-tt.svg'

import styles from './style'

const getLogoBoxStyle = ({ plain, color, size, link, sx }) => ({
    ...styles.logoBox,
    ...(size && { fontSize: size }),
    ...(color && link && { '&,&:active,&:visited': { color: plain ? color : `${color}.base` } }),
    ...(color && !link && { color: plain ? color : `${color}.base` }),
    ...sx,
    '.logo': styles.logoBox['.logo'],
    ...(sx && { '.logo': sx['.logo'] }),
    '.logo-text': styles.logoBox['.logo-text'],
    ...(sx && { '.logo-text': sx['.logo-text'] }),
})

const getLogoStyle = ({ noText, size, plain, color }) => ({
    ...(noText && size && { fontSize: size }),
    ...(!plain && styles[color]),
})

const Logo = forwardRef(function Logo({ color = 'primary', plain, size, link, noText, animated, sx, ...rest }, ref) {
    const Wrapper = link ? 'a' : 'div'
    const LogoSvg = plain ? PlainLogo : SolidLogo

    return (
        <Wrapper
            ref={ref}
            data-animated={animated ? '' : null}
            sx={getLogoBoxStyle({ plain, color, size, link, sx })}
            {...rest}
        >
            <LogoSvg
                aria-hidden="true"
                focusable="false"
                className="logo"
                sx={getLogoStyle({ noText, size, plain, color })}
            />
            {!noText && <LogoText aria-hidden="true" focusable="false" className="logo-text" />}
        </Wrapper>
    )
})

export default Logo
