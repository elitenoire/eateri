import { Text } from '~@core/typography'

import styles from './style'

function BarRating({ as: Tag = 'div', bg, color, label, radius, value = 0, percent = 0, size = 0, ...rest }) {
    return (
        <Tag sx={styles.wrapper} {...rest}>
            <Text as="span" size={size} sx={styles.label}>
                {label}
            </Text>
            <span sx={styles.bar({ color, bg, radius })}>
                <span style={{ width: `${percent}%` }} />
            </span>
            <Text as="span" size={size} sx={styles.value}>{`(${value})`}</Text>
        </Tag>
    )
}

export default BarRating
