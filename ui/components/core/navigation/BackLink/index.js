import { Link } from '~@core/navigation'
import { Icon } from '~@core/general'

import styles from './style'

function BackLink({ children, ...rest }) {
    return (
        <Link variant="back" sx={styles.backLink} {...rest}>
            <Icon name="arrowleft" opacity={0.6} />
            <Icon name="arrowleft" mr={2} ml="-0.25em" />
            {children || 'Back'}
        </Link>
    )
}

export default BackLink
