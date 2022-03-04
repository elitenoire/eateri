import { Badge } from '@theme-ui/components'
import { Button, AspectImage } from '~@core/general'
import { Text } from '~@core/typography'
import { Link } from '~@core/navigation'

import styles from './style'

function FavoriteCard({ href = '/#', imgUrl, imgAlt = '', title, ...rest }) {
    return (
        <div sx={styles.favoriteCardWrap} {...rest}>
            <Link variant="plain" href={href} sx={styles.favoriteCard}>
                <div sx={styles.favoriteCardImageWrap}>
                    <AspectImage src={imgUrl} alt={imgAlt} />
                </div>
                <div sx={styles.favoriteCardContent}>
                    <Text mb={1} weight="bold" truncate>
                        {title}
                    </Text>
                    <Text mb={1} color="textLight">
                        ₦1500
                    </Text>
                    <Badge as="p" variant="highlight">
                        ★4.8
                    </Badge>
                </div>
            </Link>
            <Button brand="solid" size="lg" color="secondary" icon="add" ariaLabel="Add to bag" />
        </div>
    )
}

export default FavoriteCard
