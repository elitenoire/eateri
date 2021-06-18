/** @jsx jsx */
import { jsx } from '@theme-ui/core'
import Link from 'next/link'

import styles from './style'

export default function Linkable({ hover, className, children, accessibilityText, ...props }) {
    return (
        <div sx={styles.wrapper} className={className} data-hoverable={hover ? '' : null}>
            {children}
            <Link passHref {...props}>
                <a sx={styles.link}>
                    <span className="visually-hidden">{accessibilityText}</span>
                </a>
            </Link>
        </div>
    )
}
