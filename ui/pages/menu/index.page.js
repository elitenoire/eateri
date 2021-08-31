/** @jsx jsx */
import { jsx } from '@theme-ui/core'
import Image from 'next/image'
import { Box, AspectRatio } from '@theme-ui/components'

import { Text } from '~@/typography'
import { Button } from '~@/general'
import { Linkable } from '~@/navigation'
import { getLayout as getMenuLayout } from '~@/layout/MenuLayout'

import styles, { foodCardStyle } from './style'

import url from '~/public/dish.png'

function MenuFoodCard() {
    return (
        <Linkable href="#" sx={foodCardStyle.linkable}>
            <div sx={foodCardStyle.card}>
                <div sx={foodCardStyle.imageWrap}>
                    <AspectRatio ratio={1}>
                        <Image src={url} alt="" layout="fill" objectFit="cover" objectPosition="center" />
                    </AspectRatio>
                </div>
                <div sx={foodCardStyle.content}>
                    <div>
                        <Box p={2} bg="gray" />
                    </div>
                    <Text size={[null, null, null, 1]} mb={2} weight="500" decoration="none" truncate={2}>
                        Chicken Fried Rice with Egg Sauce
                    </Text>
                    <Text weight="bold">N1500</Text>
                </div>
                <div sx={foodCardStyle.actionCart}>
                    <Button brand="solid" color="secondary" size="lg" icon="add" ariaLabel="Add to cart" />
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
        </Linkable>
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

            <Box bg="gray" p={13} mt={2}>
                F
            </Box>
            <Box bg="gray" p={13} mt={2}>
                F
            </Box>
            <Box bg="gray" p={13} mt={2}>
                F
            </Box>
            <Box bg="gray" p={13} mt={2}>
                F
            </Box>
        </div>
    )
}

MenuPage.getLayout = getMenuLayout

export default MenuPage
