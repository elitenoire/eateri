import { Link } from '~@core/navigation'

import styles from './style'

export default function Linkable({ accessibilityText, hover, className, children, ...rest }) {
    return (
        <div sx={styles.wrapper} className={className} data-hoverable={hover ? '' : null}>
            {children}
            <Link sx={styles.link} {...rest}>
                <span className="visually-hidden">{accessibilityText}</span>
            </Link>
        </div>
    )
}
