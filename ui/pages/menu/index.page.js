import NextLink from 'next/link'
import Image from 'next/image'
import { Box, AspectRatio, Link, Progress } from '@theme-ui/components'

import { Text } from '~@/typography'
import { Button } from '~@/general'
import { getLayout as getMenuLayout } from '~@/layout/MenuLayout'

import styles, { foodCardStyle } from './style'

import url from '~/public/dish.png'

function MenuFoodCard() {
    return (
        <div sx={foodCardStyle.card}>
            <NextLink href="#" passHref>
                <Link variant="plain">
                    <div sx={foodCardStyle.imageWrap}>
                        <AspectRatio ratio={1}>
                            <Image src={url} alt="" layout="fill" objectFit="cover" objectPosition="center" />
                        </AspectRatio>
                    </div>
                    <div sx={foodCardStyle.content}>
                        <div>
                            <Box p={2} bg="gray" />
                        </div>
                        <Text weight="700" truncate={2} sx={foodCardStyle.title}>
                            Chicken Fried Rice with Egg Sauce
                        </Text>
                        <Text weight="bold">N1500</Text>
                    </div>
                </Link>
            </NextLink>
            <div sx={foodCardStyle.actionCart}>
                <Button brand="solid" color="secondary" size="lg" icon="add" ariaLabel="Add to bag" />
            </div>
            <div sx={foodCardStyle.actionFav}>
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

function MenuPage() {
    return (
        <div>
            <div sx={styles.grid}>
                <MenuFoodCard />
                <MenuFoodCard />
                <MenuFoodCard />
                <MenuFoodCard />
                <MenuFoodCard />
                <MenuFoodCard />
                <MenuFoodCard />
                <MenuFoodCard />
                <MenuFoodCard />
                <MenuFoodCard />
                <MenuFoodCard />
                <MenuFoodCard />
                <MenuFoodCard />
                <MenuFoodCard />
                <MenuFoodCard />
            </div>
            <div sx={styles.container}>
                <Text size={0} mb={4}>
                    Showing 15 of 48 items
                </Text>
                <Progress max={48} value={15} color="primary.base" />
                <Button mt={4} brand="subtle" shape="flat" bg="grayMedium" outlineColor="grayMedium" outline fluid>
                    Load More
                </Button>
            </div>
        </div>
    )
}

MenuPage.getLayout = getMenuLayout

export default MenuPage
