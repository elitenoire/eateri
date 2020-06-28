/** @jsx jsx */
import { jsx } from '@theme-ui/core'
import { Container, Image, Badge } from '@theme-ui/components'
import { Media } from '~/context/media'
import { Heading, Text } from '~@/typography'
import Scrollable from '~@/display/Scrollable'
import Button from '~@/general/Button'
import styles from './style'

import url from '~/public/dish.png'
import imgUrl from '~/public/c-rice.jpg'

const PopularCard = ({ title }) => (
    <div sx={styles.popularCard}>
        <div sx={styles.imageWrap}>
            <Image src={url} />
        </div>
        <Text size={1} mb={1} weight="bold" truncate={2}>
            {title}
        </Text>
        <div className="flex-split">
            <Text size={1} line="tight" color={['textLight', null, 'inherit']}>
                ₦1500
            </Text>
            <Badge as="p" variant="highlight" sx={styles.badgeRating}>
                ★4.8
            </Badge>
        </div>
        <Button
            type="solid"
            size="md"
            color="secondary"
            icon="add"
            ariaLabel="Add to cart"
            // onClick={addToCart}
        />
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

const FavoriteCard = ({ img, title }) => (
    <div sx={styles.favoriteCard}>
        <div sx={styles.imageBox}>
            <Image src={url} />
        </div>
        <div>
            <Text size={1} mb={1} weight="bold" truncate>
                {title}
            </Text>
            <Text size={1} mb={1} color="textLight">
                ₦1500
            </Text>
            <Badge as="p" variant="highlight">
                ★4.8
            </Badge>
        </div>
        <Button
            type="solid"
            size="md"
            color="secondary"
            icon="add"
            ariaLabel="Add to cart"
            // onClick={addToCart}
        />
    </div>
)

const Menu = () => (
    <Container as="section" id="homepage-menu" variant="loose" sx={styles.section}>
        <Container variant="content" sx={styles.sectionHeader}>
            <Text as="h2" variant="block" mb={2} color="secondary.pale">
                Explore Our Menu
            </Text>
            <Heading as="p" variant="h2" color="text" weight="extrabold" title>
                Explore 80+ Delicious Dishes
            </Heading>
            <Text>
                We have more than 80 dishes with the best tastes, flavours and recipes from around the world. What do
                you fancy from our menu?
            </Text>
        </Container>
        <Container as="ul">
            <li sx={styles.menuBox}>
                <div className="flex-split" sx={styles.menuBoxHeader}>
                    <Heading as="h3" variant="h4">
                        Popular{' '}
                        <Text as="span" weight="light" size={1}>
                            Selection
                        </Text>
                    </Heading>
                    <Text size={1}>See All</Text>
                </div>
                <Scrollable as="ul" pad="0.25em" sx={styles.popularScrollable}>
                    {[
                        'Jollof Rice',
                        'Egusi Soup',
                        'Teriyaki Sauce & Rice',
                        'Chilli Con Carne',
                        'Mediterranean Pizza',
                        'Grilled Steak Tomato Salad',
                    ].map(dish => (
                        <li>
                            <PopularCard key={dish} title={dish} />
                        </li>
                    ))}
                </Scrollable>
            </li>
            <li sx={styles.menuBox}>
                <div className="flex-split" sx={styles.menuBoxHeader}>
                    <Heading as="h3" variant="h4">
                        Category
                    </Heading>
                    <Text size={1}>See All</Text>
                </div>
                <Scrollable as="ul" pad={['0.25em', null, '1em']} sx={styles.categoryScrollable}>
                    {['African', 'Chinese', 'Vegan', 'Rice', 'Soups', 'Desserts', 'Drinks'].map(c => (
                        <li>
                            <CategoryCard key={c} img={imgUrl} title={c} />
                        </li>
                    ))}
                </Scrollable>
            </li>
            <Media lessThan="tabletS">
                {mediaClass => (
                    <li className={mediaClass} sx={styles.menuBox}>
                        <div className="flex-split" sx={styles.menuBoxHeader}>
                            <Heading as="h3" variant="h4">
                                Favorite
                            </Heading>
                            <Text size={1}>See All</Text>
                        </div>
                        <ul>
                            {['Red Lentil Soup', 'Thai Fried Chicken', 'Pasta & Chicken'].map(dish => (
                                <li>
                                    <FavoriteCard key={dish} title={dish} />
                                </li>
                            ))}
                        </ul>
                    </li>
                )}
            </Media>
        </Container>
    </Container>
)

export default Menu
