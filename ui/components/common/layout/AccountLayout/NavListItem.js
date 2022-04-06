import { Link } from '~@core/navigation'
import { Text } from '~@core/typography'
import { Icon } from '~@core/general'

import { navListItemStyle as styles } from './style'

export default function NavListItem({ href, icon, lined, active, hideArrow, children, ...rest }) {
    return (
        <li sx={styles.listItem} data-lined={lined ? '' : null} {...rest}>
            <Link href={href} sx={styles.link} data-active={active ? '' : null}>
                <span sx={styles.iconWrap}>
                    <Icon name={icon} />
                </span>
                <span sx={styles.mobileHidden}>
                    <Text as="span" size={1} weight="medium" transform="capitalize">
                        {children}
                    </Text>
                    {!active && !hideArrow && (
                        <span sx={styles.arrow}>
                            <Icon name="arrowright" />
                        </span>
                    )}
                </span>
            </Link>
        </li>
    )
}
