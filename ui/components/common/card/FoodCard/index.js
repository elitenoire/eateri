import { Badge } from '@theme-ui/components'
import { Text } from '~@core/typography'
import { Button, AspectImage } from '~@core/general'
import { Link } from '~@core/navigation'
import styles from './style'

function FoodCard({
    as: Tag = 'div',
    href = '#',
    title,
    imgUrl,
    imgAlt = '',
    rating = '4.8',
    onClick,
    imageOnly,
    radius,
    fluid,
    bg,
    shadow,
    reveal,
    linkProps,
    children,
    ...rest
}) {
    return (
        <Tag sx={styles.card} {...rest}>
            <Link variant="block" href={href} {...linkProps}>
                <div sx={styles.imageWrap({ bg, shadow, radius, fluid })} className="food-card--image">
                    <AspectImage src={imgUrl} alt={imgAlt} />
                </div>
                {imageOnly && children}
                {!imageOnly && (
                    <div sx={styles.content} data-hover-reveal={reveal ? '' : null}>
                        {title && (
                            <Text mb={1} weight="bold" truncate={2} sx={styles.title} className="food-card--title">
                                {title}
                            </Text>
                        )}
                        <div sx={styles.flexSplit}>
                            <Text size={1} line="tight" color="textFade">
                                ₦1500
                            </Text>
                            {rating && (
                                <Badge as="p" variant="highlight" className="food-card--rating">
                                    {`★${rating}`}
                                </Badge>
                            )}
                        </div>
                    </div>
                )}
            </Link>
            {onClick && (
                <Button brand="solid" size="lg" color="secondary" icon="add" ariaLabel="Add to bag" onClick={onClick} />
            )}
        </Tag>
    )
}

export default FoodCard
