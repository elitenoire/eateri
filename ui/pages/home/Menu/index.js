/** @jsx jsx */
import { jsx } from '@theme-ui/core'
import Link from 'next/link'
import { Container, Image, Badge } from '@theme-ui/components'
import { Media } from '~/context/media'
import { Heading, Text } from '~@/typography'
import { Scrollable, FoodCard } from '~@/display'
import { Reveal, fadeInLeft } from '~@/general/Reveal'
import Button from '~@/general/Button'
import styles from './style'

import url from '~/public/dish.png'
import imgUrl from '~/public/c-rice.jpg'

function CategoryCard({ img, title }) {
    return (
        <div sx={styles.categoryCardWrap}>
            <div sx={styles.categoryCard(img)}>
                <Text truncate>{title}</Text>
            </div>
        </div>
    )
}

function FavoriteCard({ img, title }) {
    return (
        <div sx={styles.favoriteCard}>
            <div sx={styles.imageBox}>
                <Image src={url} />
            </div>
            <div>
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
            <Button brand="solid" size="lg" color="secondary" icon="add" ariaLabel="Add to bag" />
        </div>
    )
}

function Menu() {
    return (
        <Container as="section" id="homepage-menu" variant="loose" sx={styles.section}>
            <Reveal as={Container} forwardAs="header" variant="content" sx={styles.sectionHeader} cascade whenInView>
                <Text as="h2" variant="badgeLink" mb={2} bg="whiteFade.10" color="secondary.pale">
                    <Link href="/menu" passHref>
                        <a>Explore Our Menu</a>
                    </Link>
                </Text>
                <Heading as="p" variant="headline" color="text" title>
                    Explore 80+ Delicious Dishes
                </Heading>
                <Text color="textFade" spacing="wider" size={3}>
                    We have more than 80 dishes with the best tastes, flavours and recipes from around the world. What
                    do you fancy from our menu?
                </Text>
            </Reveal>
            <Container as="ul" sx={styles.menuContainer}>
                <li sx={styles.menuBox}>
                    <div sx={styles.menuBoxDecor} />
                    <div className="flex-split" sx={styles.menuBoxHeader}>
                        <Heading as="h3" variant="h4">
                            Popular{' '}
                            <Text as="span" weight="light" size={1}>
                                Selection
                            </Text>
                        </Heading>
                        <Text>See All</Text>
                    </div>
                    <div sx={styles.menuBoxBody}>
                        <Reveal
                            as={Scrollable}
                            forwardAs="ul"
                            pad="0.25em"
                            sx={styles.popularScrollable}
                            motion={fadeInLeft}
                            threshold={0.1}
                            cascade
                            whenInView
                        >
                            {[
                                'Jollof Rice',
                                'Egusi Soup',
                                'Teriyaki Sauce & Rice',
                                'Chilli Con Carne',
                                'Mediterranean Pizza',
                                'Grilled Steak Tomato Salad',
                            ].map(dish => (
                                <li key={dish}>
                                    <FoodCard title={dish} imgUrl={url} sx={styles.popularCard} />
                                </li>
                            ))}
                        </Reveal>
                    </div>
                </li>
                <li sx={styles.menuBox}>
                    <div sx={styles.menuBoxDecor} />
                    <div className="flex-split" sx={styles.menuBoxHeader}>
                        <Heading as="h3" variant="h4">
                            Category
                        </Heading>
                        <Text>See All</Text>
                    </div>
                    <div sx={styles.menuBoxBody}>
                        <Reveal
                            as={Scrollable}
                            forwardAs="ul"
                            pad={['0.25em', null, '1em']}
                            sx={styles.categoryScrollable}
                            motion={fadeInLeft}
                            threshold={0.1}
                            cascade
                            whenInView
                        >
                            {['African', 'Chinese', 'Vegan', 'Rice', 'Soups', 'Desserts', 'Drinks'].map(c => (
                                <li key={c}>
                                    <CategoryCard img={imgUrl} title={c} />
                                </li>
                            ))}
                        </Reveal>
                    </div>
                </li>
                <Media lessThan="tabletS">
                    {mediaClass => (
                        <li className={mediaClass} sx={styles.menuBox}>
                            <div className="flex-split" sx={styles.menuBoxHeader}>
                                <Heading as="h3" variant="h4">
                                    Favorite
                                </Heading>
                                <Text>See All</Text>
                            </div>
                            <Reveal as="ul" sx={styles.favoriteList} cascade whenInView>
                                {['Red Lentil Soup', 'Thai Fried Chicken', 'Pasta & Chicken'].map(dish => (
                                    <li key={dish}>
                                        <FavoriteCard title={dish} />
                                    </li>
                                ))}
                            </Reveal>
                        </li>
                    )}
                </Media>
            </Container>
        </Container>
    )
}

export default Menu
