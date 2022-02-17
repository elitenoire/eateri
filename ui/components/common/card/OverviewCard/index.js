import { Text } from '~@core/typography'
import { Icon } from '~@core/general'

import styles from './style'

function OverviewCard({ title, icon, children, ...rest }) {
    return (
        <div sx={styles.wrapper} {...rest}>
            <div sx={styles.header}>
                <span sx={styles.iconWrap}>
                    <Icon name={icon} />
                </span>
                <Text weight="bold" truncate sx={styles.title}>
                    {title}
                </Text>
                <span>
                    <Icon name="arrowright" />
                </span>
            </div>
            <div sx={styles.content}>{children}</div>
        </div>
    )
}

export default OverviewCard
