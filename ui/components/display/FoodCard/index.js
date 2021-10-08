/** @jsx jsx */
import { jsx } from '@theme-ui/core'
import Link from 'next/link'
import { Image, Badge } from '@theme-ui/components'
import { Text } from '~@/typography'
import Button from '~@/general/Button'
import styles from './style'

function FoodCard({
    as: Tag = 'div',
    href = '#',
    title,
    imgUrl,
    rating = '4.8',
    onClick,
    imageOnly,
    bg,
    shadow,
    linkProps,
    children,
    ...rest
}) {
    return (
        <Tag sx={styles.card} {...rest}>
            <Link href={href} {...linkProps} passHref>
                <a sx={styles.link}>
                    <div sx={styles.imageWrap({ bg, shadow })} className="food-card--image">
                        <Image src={imgUrl} />
                    </div>
                    {imageOnly && children && (
                        <div sx={styles.content} data-hover-reveal>
                            <Text weight="bold" size={0} truncate={2} className="food-card--title">
                                {children}
                            </Text>
                        </div>
                    )}
                    {!imageOnly && (
                        <div sx={styles.content}>
                            <Text mb={1} weight="bold" truncate={2} sx={styles.title} className="food-card--title">
                                {title}
                            </Text>
                            <div sx={styles.flexSplit}>
                                <Text line="tight" color="textFade">
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
                </a>
            </Link>
            {!imageOnly && (
                <Button brand="solid" size="lg" color="secondary" icon="add" ariaLabel="Add to bag" onClick={onClick} />
            )}
        </Tag>
    )
}

export default FoodCard
