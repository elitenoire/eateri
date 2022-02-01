import NextLink from 'next/link'
import { Link } from '@theme-ui/components'
import { Icon } from '~@core/general'

import styles from './style'

function BackLink({ href, as, children, ...rest }) {
    return (
        <NextLink href={href} as={as} passHref {...rest}>
            <Link variant="back" mt={7} sx={styles.backLink} {...rest}>
                <Icon name="arrowleft" />
                {children || 'Back'}
            </Link>
        </NextLink>
    )
}

export default BackLink
