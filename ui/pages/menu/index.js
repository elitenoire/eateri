import { Progress } from '@theme-ui/components'
import { Text } from '~@core/typography'
import { Button } from '~@core/general'
import { getLayout as getMenuLayout } from '~@common/layout/MenuLayout'
import MenuFoodCard from '~@common/card/MenuFoodCard'

import styles from '~/styles/menu'

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
