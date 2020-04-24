/** @jsx jsx */
import { jsx } from '@theme-ui/core'
import { Flex } from '@theme-ui/components'
import { useTabState, Tab, TabList, TabPanel } from 'reakit/Tab'
import { Media } from '~/context/media'
import useCounter from '~/hooks/useCounter'
import { Button, Icon } from '~@/general'
import { Carousel, CarouselCard } from '~@/display'
import { Heading, Text } from '~@/typography'
import styles from './style'
import { foodMenu, menuList } from './data'
import url from '~/public/dish.png'

const Hero = () => {
    const { count, direction, increment: goNext, decrement: goPrev, isCyclic, goto, onStart, onEnd } = useCounter({
        end: foodMenu.length > 1 ? foodMenu.length - 1 : foodMenu.length || 0,
        isCyclic: true,
    })

    const { count: qty, increment, decrement, onStart: isMinQty, onEnd: isMaxQty } = useCounter({
        start: 1,
        end: 5,
    })

    const tabState = useTabState({
        baseId: 'chef-menu',
        manual: true,
        selectedId: `chef-menu-${menuList[0]}`,
    })

    return (
        <section sx={styles.container}>
            <div sx={styles.main}>
                <div sx={styles.socialLinks}>
                    <a href="https://github.com/elitenoire/eateri" aria-label="See source code" title="See source code">
                        <Icon name="github" />
                    </a>
                    <a href="#" aria-label="See our tweets" title="See our tweets">
                        <Icon name="twitter" />
                    </a>
                    <a href="#" aria-label="See instagram gallery" title="See instagram gallery">
                        <Icon name="instagram" />
                    </a>
                </div>
                <TabList {...tabState} aria-label="Chef's Special Menu" sx={styles.menuList}>
                    {menuList.map((_menu, idx) => (
                        <Tab
                            {...tabState}
                            as={Button}
                            key={idx + _menu}
                            id={`chef-menu-${_menu}`}
                            type="ghost"
                            shape="flat"
                            size="sm"
                            ghostText
                        >
                            {_menu}
                        </Tab>
                    ))}
                </TabList>
                <div sx={styles.contentGrid} className="content-panel grid-tabletS-up">
                    <div sx={styles.contentDetails} className="A">
                        <div>
                            <Text className="only-mobile" size={3} mt={2} mb={1}>
                                Welcome,{' '}
                                <Text as="span" weight="medium">
                                    Guest
                                </Text>
                                .
                            </Text>
                            <Heading sx={styles.contentHeadline}>Chef's Special</Heading>
                        </div>
                        <Heading
                            as="h4"
                            variant="h1"
                            key={foodMenu[count].name}
                            className="tabletS-up vivify popIn"
                            my={1}
                            sx={styles.contentTitle}
                        >
                            {foodMenu[count].name}
                        </Heading>
                        <Text
                            key={`desc-${foodMenu[count].name}`}
                            className="tabletS-up vivify fadeIn duration-1000"
                            sx={styles.contentDesc}
                            overflow
                        >
                            {foodMenu[count].description}
                        </Text>
                        <Media lessThan="tabletS" sx={styles.carouselWrap}>
                            <Carousel
                                items={foodMenu}
                                selected={count}
                                visible={3}
                                animation="stack"
                                goto={goto}
                                direction={direction}
                            >
                                {d => <CarouselCard data={d} isMobile />}
                            </Carousel>
                        </Media>
                    </div>
                    <div sx={styles.contentImage} className="B">
                        <img
                            key={`img-${foodMenu[count].name}`}
                            className="vivify rollInBottom"
                            src={url}
                            alt={foodMenu[count].name}
                        />
                    </div>
                    <div sx={styles.contentOrder} className="C">
                        <Text
                            key={foodMenu[count].price}
                            className="vivify fadeIn duration-1000"
                            sx={styles.contentPrice}
                        >
                            {`₦${foodMenu[count].price}`}
                        </Text>
                        <Flex sx={styles.contentQty}>
                            <Button
                                type="ghost"
                                color="accent"
                                size="sm"
                                icon="subtract"
                                ariaLabel="Decrease meal quantity"
                                onClick={decrement}
                                disabled={isMinQty}
                            />
                            <Text mx={3}>{qty}</Text>
                            <Button
                                type="ghost"
                                color="accent"
                                size="sm"
                                icon="add"
                                ariaLabel="Increase meal quantity"
                                onClick={increment}
                                disabled={isMaxQty}
                            />
                        </Flex>
                        <Button type="outline" size="lg" icon="cart">
                            Order Now
                        </Button>
                    </div>
                </div>
            </div>
            <Media greaterThanOrEqual="tabletS" sx={styles.controls}>
                <div sx={styles.arrows}>
                    <Button
                        type="outline"
                        color="accent"
                        icon="arrowleft"
                        ariaLabel="Previous Special"
                        onClick={goPrev}
                        disabled={onStart}
                    />
                    <Text sx={styles.counts}>
                        <Text as="span" key={count} className="vivify fadeIn duration-500" size={5} weight="bold">
                            {count + 1}
                        </Text>
                        /{foodMenu.length}
                    </Text>
                    <Button
                        type="outline"
                        color="accent"
                        icon="arrowright"
                        ariaLabel="Next Special"
                        onClick={goNext}
                        disabled={onEnd}
                    />
                </div>
                <Carousel
                    items={foodMenu}
                    selected={count}
                    visible={3}
                    animation="slide"
                    itemOffset={0}
                    goto={goto}
                    direction={direction}
                    infinite={isCyclic}
                >
                    {i => <CarouselCard data={i} />}
                </Carousel>
            </Media>
        </section>
    )
}

export default Hero
