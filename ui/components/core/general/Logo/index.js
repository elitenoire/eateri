import { forwardRef } from 'react'
import { Link as LinkTag } from '~@core/navigation'
import { ReactComponent as SolidLogo } from '~/public/inlineSvg/logo.svg'
import { ReactComponent as PlainLogo } from '~/public/inlineSvg/logo-cutout.svg'
import { ReactComponent as LogoText } from '~/public/inlineSvg/logo-tt.svg'

import styles from './style'

const getLogoBoxStyle = ({ plain, size, color, hoverColor, linkColor, link }) => ({
    ...styles.logoBox,
    ...(!link && {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
    }),
    ...(size && { fontSize: size }),
    ...(color &&
        link && {
            transition: plain && hoverColor ? 'color 0.25s' : 'none',
            '&,&:active,&:visited': { color: plain ? color : linkColor || `${color}.base` },
            '&:hover': { color: plain ? hoverColor || color : 'inherit' },
        }),
    ...(color && !link && { color: plain ? color : `${color}.base` }),
})

const getLogoStyle = ({ noText, size, plain, color }) => ({
    ...(noText && size && { fontSize: size }),
    ...(!plain && styles[color]),
})

const Logo = forwardRef(function Logo(
    {
        as,
        ariaLabel = 'Eateri Home',
        color = 'primary',
        hoverColor,
        plain,
        size,
        link,
        linkColor,
        noText,
        animated,
        title,
        ...rest
    },
    ref
) {
    const Tag = link ? LinkTag : as || 'div'
    const LogoSvg = plain ? PlainLogo : SolidLogo

    return (
        <Tag
            ref={ref}
            data-animated={animated ? '' : null}
            sx={getLogoBoxStyle({ plain, color, hoverColor, size, link, linkColor })}
            aria-label={ariaLabel}
            title={title || ariaLabel}
            {...rest}
        >
            <LogoSvg
                aria-hidden="true"
                focusable="false"
                className="logo"
                sx={getLogoStyle({ noText, size, plain, color })}
            />
            {!noText && <LogoText aria-hidden="true" focusable="false" fill="red" className="logo-text" />}
        </Tag>
    )
})

export default Logo
