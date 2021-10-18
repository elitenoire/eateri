import { useRouter } from 'next/router'
import Link from 'next/link'
import { Text } from '~@/typography'

import { categoryLinkStyle as styles } from './style'

export default function CategoryLink({ icon: SvgIcon, exact, href, children, ...rest }) {
    const { pathname } = useRouter()
    const active = exact ? pathname === href : pathname.startsWith(href)

    return (
        <Link href={href} {...rest} passHref>
            <a sx={styles.link}>
                <span sx={styles.iconWrap} data-active={active ? '' : null}>
                    <SvgIcon />
                </span>
                <Text as="span" size={1} weight="bold" transform="capitalize" truncate={2}>
                    {children}
                </Text>
            </a>
        </Link>
    )
}
