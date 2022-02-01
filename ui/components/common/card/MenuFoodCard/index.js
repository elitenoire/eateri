import NextLink from 'next/link'
import { Box, Link } from '@theme-ui/components'

import { Text } from '~@core/typography'
import { Button, AspectImage } from '~@core/general'

import styles from './style'

import url from '~/public/dish.png'

function MenuFoodCard() {
    return (
        <div sx={styles.card}>
            <NextLink href="#" passHref>
                <Link variant="plain">
                    <div sx={styles.imageWrap}>
                        <AspectImage ratio={1} src={url} />
                    </div>
                    <div sx={styles.content}>
                        <div>
                            <Box p={2} bg="gray" />
                        </div>
                        <Text weight="700" truncate={2} sx={styles.title}>
                            Chicken Fried Rice with Egg Sauce
                        </Text>
                        <Text weight="bold">N1500</Text>
                    </div>
                </Link>
            </NextLink>
            <div sx={styles.actionCart}>
                <Button brand="solid" color="secondary" size="lg" icon="add" ariaLabel="Add to bag" />
            </div>
            <div sx={styles.actionFav}>
                <Button
                    brand="pale"
                    color="secondary.base"
                    bg="secondary.light"
                    alpha={0.95}
                    icon="heart"
                    scaleIcon="lg"
                    ariaLabel="Save for Later"
                />
            </div>
        </div>
    )
}

export default MenuFoodCard
