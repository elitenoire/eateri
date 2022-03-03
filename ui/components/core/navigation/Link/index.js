import NextLink from 'next/link'
import { Box, Link as TUILink } from '@theme-ui/components'
import { Icon } from '~@core/general'

export function Link(props) {
    const { as, href, replace, scroll, shallow, prefetch, passHref, external, showIcon, children, ...rest } = props
    if (external && typeof href === 'string') {
        return (
            <TUILink href={href} target="_blank" rel="noopener noreferrer" {...rest}>
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
        <NextLink as={as} href={href} replace={replace} scroll={scroll} shallow={shallow} prefetch={prefetch} passHref>
            {passHref ? children : <TUILink {...rest}>{children}</TUILink>}
        </NextLink>
    )
}
