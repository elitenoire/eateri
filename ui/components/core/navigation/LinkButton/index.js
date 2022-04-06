import { forwardRef } from 'react'
import NextLink from 'next/link'
import { Button } from '~@core/general'

export const LinkButton = forwardRef(function LinkButton(props, ref) {
    const { as, href, replace, scroll, shallow, prefetch, locale, external, children, ...rest } = props
    if (external && typeof href === 'string') {
        return (
            <Button as="a" ref={ref} href={href} target="_blank" rel="noopener noreferrer" {...rest}>
                {children}
            </Button>
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
            <Button as="a" ref={ref} {...rest}>
                {children}
            </Button>
        </NextLink>
    )
})
