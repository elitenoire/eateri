import { forwardRef } from 'react'
import NextLink from 'next/link'
import { Box, Link as TUILink } from '@theme-ui/components'
import { Icon } from '~@core/general'
import useScrollTo from '~/hooks/useScrollTo'

import styles from './style'

export const Link = forwardRef(function Link(props, ref) {
    const {
        as,
        href,
        replace,
        scroll,
        shallow,
        prefetch,
        locale,
        passHref,
        external,
        showIcon,
        color,
        hoverColor,
        children,
        hash,
        offset = 20,
        ...rest
    } = props
    const { linkScroll } = useScrollTo({ offset })
    const hasHash = typeof href === 'string' && (href.charAt(0) === '#' || hash)

    if (external || hasHash) {
        return (
            <TUILink
                ref={ref}
                href={href}
                {...(!hasHash && { target: '_blank', rel: 'noopener noreferrer' })}
                {...(hasHash && { onClick: linkScroll })}
                sx={styles.link({ color, hoverColor })}
                {...rest}
            >
                {children}
                {showIcon && (
                    <Box as="span" ml={1}>
                        <Icon name="externallink" />
                    </Box>
                )}
            </TUILink>
        )
    }

    return (
        <NextLink
            as={as}
            href={href}
            replace={replace}
            scroll={scroll}
            shallow={shallow}
            prefetch={prefetch}
            locale={locale}
            passHref
        >
            {passHref ? (
                children
            ) : (
                <TUILink ref={ref} sx={styles.link({ color, hoverColor })} {...rest}>
                    {children}
                </TUILink>
            )}
        </NextLink>
    )
})
