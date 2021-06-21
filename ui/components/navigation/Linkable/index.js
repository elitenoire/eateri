/** @jsx jsx */
import { jsx } from '@theme-ui/core'
import Link from 'next/link'

import styles from './style'

export default function Linkable({
    hyperlink,
    hover,
    className,
    href,
    children,
    accessibilityText,
    onClick,
    ...props
}) {
    return (
        <div sx={styles.wrapper} className={className} data-hoverable={hover ? '' : null}>
            {children}
            {hyperlink ? (
                <a sx={styles.link} href={href} onClick={onClick} {...props}>
                    <span className="visually-hidden">{accessibilityText}</span>
                </a>
            ) : (
                <Link href={href} passHref {...props}>
                    <a sx={styles.link}>
                        <span className="visually-hidden">{accessibilityText}</span>
                    </a>
                </Link>
            )}
        </div>
    )
}
