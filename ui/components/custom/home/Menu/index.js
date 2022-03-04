import Image from 'next/image'
import { Container } from '@theme-ui/components'
import { Media } from '~/context/media'
import { Heading, Text } from '~@core/typography'
import { Scrollable } from '~@core/display'
import { Reveal, fadeInLeft } from '~@core/general'
import { Link } from '~@core/navigation'
import FoodCard from '~@common/card/FoodCard'
import CategoryCard from '~@common/card/CategoryCard'
import FavoriteCard from '~@common/card/FavoriteCard'
import styles from './style'

import url from '~/public/dish.png'
import imgUrl from '~/public/c-rice.jpg'

import spoonRopeUrl from '~/public/spoon-rope.png'
import sausagesUrl from '~/public/sausages.png'
import menuLeafUrl from '~/public/menuleaf.png'

function Menu() {
    return (
        <Container as="section" id="homepage-menu" variant="loose" sx={styles.section}>
            <Reveal as={Container} forwardAs="header" variant="content" sx={styles.sectionHeader} cascade whenInView>
                <Text as="h2" variant="badgeLink" mb={2} bg="whiteFade.10" color="secondary.pale">
                    <Link href="/menu">Explore Our Menu</Link>
                </Text>
                <Heading as="p" variant="headline" color="text" title>
                    Explore 80+ Delicious Dishes
                </Heading>
                <Text color="textFade" spacing="wider" size={3}>
                    We have more than 80 dishes with the best tastes, flavours and recipes from around the world. What
                    do you fancy from our menu?
                </Text>
            </Reveal>
            <Container sx={styles.menuContainer}>
                <ul>
                    <li sx={styles.menuBox}>
                        <div sx={styles.menuBoxDecor}>
                            <Image
                                src={menuLeafUrl}
                                alt=""
                                unoptimized
                                layout="fill"
                                objectFit="cover"
                                objectPosition="top"
                            />
                        </div>
                        <div className="flex-split" sx={styles.menuBoxHeader}>
                            <Heading as="h3" variant="h4" mb={0}>
                                Popular{' '}
                                <Text as="span" weight="light" size={1}>
                                    Selection
                                </Text>
                            </Heading>
                            <Link href="/#" sx={styles.menuBoxLink}>
                                See All
                            </Link>
                        </div>
                        <div sx={styles.menuBoxBody}>
                            <Reveal
                                as={Scrollable}
                                forwardAs="ul"
                                pad="1px"
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
                        <div sx={styles.menuBoxDecor}>
                            <Image
                                src={menuLeafUrl}
                                alt=""
                                unoptimized
                                layout="fill"
                                objectFit="cover"
                                objectPosition="top"
                            />
                        </div>
                        <div className="flex-split" sx={styles.menuBoxHeader}>
                            <Heading as="h3" variant="h4" mb={0}>
                                Category
                            </Heading>
                            <Link href="/#" sx={styles.menuBoxLink}>
                                See All
                            </Link>
                        </div>
                        <div sx={styles.menuBoxBody}>
                            <Reveal
                                as={Scrollable}
                                forwardAs="ul"
                                pad="1px"
                                sx={styles.categoryScrollable}
                                motion={fadeInLeft}
                                threshold={0.1}
                                cascade
                                whenInView
                            >
                                {['African', 'Chinese', 'Vegan', 'Rice', 'Soups', 'Desserts', 'Drinks'].map(c => (
                                    <li key={c}>
                                        <Link href="/#" variant="block">
                                            <CategoryCard imgUrl={imgUrl} title={c} />
                                        </Link>
                                    </li>
                                ))}
                            </Reveal>
                        </div>
                    </li>
                    <Media lessThan="tabletS">
                        {mediaClass => (
                            <li className={mediaClass} sx={styles.menuBox}>
                                <div className="flex-split" sx={styles.menuBoxHeader}>
                                    <Heading as="h3" variant="h4" mb={0}>
                                        Favorite
                                    </Heading>
                                    <Link href="/#" sx={styles.menuBoxLink}>
                                        See All
                                    </Link>
                                </div>
                                <Reveal as="ul" sx={styles.favoriteList} cascade whenInView>
                                    {['Red Lentil Soup', 'Thai Fried Chicken', 'Pasta & Chicken'].map(dish => (
                                        <li key={dish}>
                                            <FavoriteCard title={dish} imgUrl={url} />
                                        </li>
                                    ))}
                                </Reveal>
                            </li>
                        )}
                    </Media>
                </ul>
                <div sx={styles.decorImageLeft}>
                    <Image src={sausagesUrl} alt="" layout="fill" objectFit="contain" objectPosition="center" />
                </div>
                <div sx={styles.decorImageRight}>
                    <Image src={spoonRopeUrl} alt="" layout="fill" objectFit="contain" objectPosition="center" />
                </div>
            </Container>
        </Container>
    )
}

export default Menu
