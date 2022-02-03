import NextLink from 'next/link'
import { Text } from '~@core/typography'
import { Icon } from '~@core/general'

import { navListItemStyle as styles } from './style'

export default function NavListItem({ href, icon, lined, active, children, ...rest }) {
    return (
        <li sx={styles.listItem} data-lined={lined ? '' : null} data-active={active ? '' : null} {...rest}>
            <NextLink href={href} passHref>
                <a sx={styles.link}>
                    <span sx={styles.iconWrap}>
                        <Icon name={icon} />
                    </span>
                    <Text as="span" size={1} transform="capitalize" sx={styles.label}>
                        {children}
                    </Text>
                </a>
            </NextLink>
        </li>
    )
}
