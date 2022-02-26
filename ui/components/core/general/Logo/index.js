import { forwardRef } from 'react'
import { Link as LinkTag } from '~@core/navigation'
import { ReactComponent as SolidLogo } from '~/public/inlineSvg/logo.svg'
import { ReactComponent as PlainLogo } from '~/public/inlineSvg/logo-cutout.svg'
import { ReactComponent as LogoText } from '~/public/inlineSvg/logo-tt.svg'

import styles from './style'

const getLogoBoxStyle = ({ plain, color, colorHover, size, link }) => ({
    ...styles.logoBox,
    ...(size && { fontSize: size }),
    ...(color &&
        link && {
            transition: plain && colorHover ? 'color 0.25s' : 'none',
            '&,&:active,&:visited': { color: plain ? color : `${color}.base` },
            '&:hover': { color: plain ? colorHover || 'inherit' : 'inherit' },
        }),
    ...(color && !link && { color: plain ? color : `${color}.base` }),
})

const getLogoStyle = ({ noText, size, plain, color }) => ({
    ...(noText && size && { fontSize: size }),
    ...(!plain && styles[color]),
})

const Logo = forwardRef(function Logo(
    { as, color = 'primary', colorHover, plain, size, link, noText, animated, ...rest },
    ref
) {
    const Tag = link ? LinkTag : as || 'div'
    const LogoSvg = plain ? PlainLogo : SolidLogo

    return (
        <Tag
            ref={ref}
            data-animated={animated ? '' : null}
            sx={getLogoBoxStyle({ plain, color, colorHover, size, link })}
            {...rest}
        >
            <LogoSvg
                aria-hidden="true"
                focusable="false"
                className="logo"
                sx={getLogoStyle({ noText, size, plain, color })}
            />
            {!noText && <LogoText aria-hidden="true" focusable="false" className="logo-text" />}
        </Tag>
    )
})

export default Logo
