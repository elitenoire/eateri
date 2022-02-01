import Image from 'next/image'
import { Text } from '~@core/typography'

import styles from './style'

function CategoryCard({ imgUrl, imgAlt = '', title, ...rest }) {
    return (
        <div sx={styles.categoryCardWrap} {...rest}>
            <div sx={styles.categoryCardContent}>
                <Image src={imgUrl} alt={imgAlt} />
                <Text truncate sx={styles.categoryCardTitle}>
                    {title}
                </Text>
            </div>
        </div>
    )
}

export default CategoryCard
