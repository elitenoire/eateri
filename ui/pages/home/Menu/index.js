/** @jsx jsx */
import { jsx } from '@theme-ui/core'
import { Container, Image } from '@theme-ui/components'
import { Heading, Text } from '~@/typography'
import Scrollable from '~@/display/Scrollable'
import styles from './style'

import url from '~/public/dish.png'
import imgUrl from '../../../public/c-rice.jpg'

const PopularCard = ({ title }) => (
    <div sx={styles.popularCard}>
        <div sx={styles.imageWrap}>
            <Image src={url} />
        </div>
        <Text size={1} m={2} weight="bold" truncate={2}>
            {title}
        </Text>
        <Text size={1} color={[null, null, 'secondary.pale']}>
            ₦1500
        </Text>
    </div>
)

const CategoryCard = ({ img, title }) => (
    <div sx={styles.categoryCardWrap}>
        <div sx={styles.categoryCard(img)}>
            <Text size={1} truncate>
                {title}
            </Text>
        </div>
    </div>
)

const Menu = () => (
    <section id="homepage-menu" sx={styles.section}>
        <Container>
            <Container variant="content" sx={styles.sectionHeader}>
                <Text as="h2" variant="block" mb={2} color="secondary.pale">
                    Explore Our Menu
                </Text>
                <Heading as="p" variant="h2" color="text" weight="extrabold" title>
                    Explore 80+ Delicious Dishes
                </Heading>
                <Text>
                    We have more than 80 dishes with the best tastes, flavours and recipes from around the world. What
                    do you fancy from our menu?
                </Text>
            </Container>
            <div sx={styles.menuBox}>
                <div sx={styles.menuBoxHeader}>
                    <Heading as="h3" variant="h4">
                        Popular{' '}
                        <Text as="span" weight="light" size={1}>
                            Selection
                        </Text>
                    </Heading>
                    <Text size={1}>See All</Text>
                </div>
                <Scrollable sx={styles.popularScrollable}>
                    {[
                        'Jollof Rice',
                        'Egusi Soup',
                        'Teriyaki Sauce & Rice',
                        'Chilli Con Carne',
                        'Mediterranean Pizza',
                        'Grilled Steak Tomato Salad',
                    ].map(dish => (
                        <PopularCard key={dish} title={dish} />
                    ))}
                </Scrollable>
            </div>
            <div sx={styles.menuBox}>
                <div sx={styles.menuBoxHeader}>
                    <Heading as="h3" variant="h4">
                        Category
                    </Heading>
                    <Text size={1}>See All</Text>
                </div>
                <Scrollable sx={styles.categoryScrollable}>
                    {['African', 'Chinese', 'Vegan', 'Rice', 'Soups', 'Desserts', 'Drinks'].map(c => (
                        <CategoryCard key={c} img={imgUrl} title={c} />
                    ))}
                </Scrollable>
            </div>
        </Container>
    </section>
)

export default Menu
