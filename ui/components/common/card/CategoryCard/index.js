import Image from 'next/image'
import { Text } from '~@core/typography'

import styles from './style'

function CategoryCard({ imgUrl, imgAlt = '', title, ...rest }) {
    return (
        <div sx={styles.wrapper} {...rest}>
            <Image src={imgUrl} alt={imgAlt} />
            <Text truncate sx={styles.title}>
                {title}
            </Text>
        </div>
    )
}

export default CategoryCard
