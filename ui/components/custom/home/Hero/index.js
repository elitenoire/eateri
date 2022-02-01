import { useEffect, useRef } from 'react'
import { useTabState, Tab, TabList, TabPanel } from 'reakit/Tab'
import { Media } from '~/context/media'
import { Button, AspectImage } from '~@core/general'
import { Reveal, fadeInDown, fadeIn, rollInBottom } from '~@core/general/Reveal'
import { Carousel } from '~@core/display'
import { Heading, Text } from '~@core/typography'
import { QtyInput, useQtyInputState } from '~@core/form'
import { SocialMedia } from '~@core/other'
import useCounter from '~/hooks/useCounter'
import useEffectExceptOnMount from '~/hooks/useEffectExceptOnMount'
import styles from './style'
import { foodMenu, menuList } from './data'

import url from '~/public/dish.png'

function Hero() {
    const carouselItemChanged = useRef(false)

    const {
        count,
        direction,
        increment: goNext,
        decrement: goPrev,
        goto,
        isStart,
        isEnd,
    } = useCounter({
        end: foodMenu.length > 1 ? foodMenu.length - 1 : foodMenu.length || 0,
    })

    const { qty, defaultQty, onQtyChange, reset, resetQty } = useQtyInputState()

    const tabState = useTabState({
        baseId: 'chef-menu',
        manual: true,
        selectedId: `chef-menu-${menuList[0]}`,
    })

    useEffectExceptOnMount(() => {
        carouselItemChanged.current = true
    }, [count])

    useEffect(() => {
        if (carouselItemChanged.current) {
            if (qty !== defaultQty) {
                resetQty()
            }
            carouselItemChanged.current = false
        }
    }, [count, qty, defaultQty, resetQty])

    return (
        <section id="homepage-hero" sx={styles.section}>
            <div sx={styles.main}>
                <div sx={styles.socialLinks}>
                    <SocialMedia />
                </div>
                <TabList {...tabState} aria-label="Chef's Special Menu" sx={styles.menuList}>
                    {menuList.map((_menu, idx) => (
                        <Tab
                            {...tabState}
                            as={Button}
                            key={idx + _menu}
                            id={`chef-menu-${_menu}`}
                            brand="ghost"
                            shape="flat"
                            size="md"
                            ghostText
                        >
                            {_menu}
                        </Tab>
                    ))}
                </TabList>
                <div sx={styles.contentGrid} className="content-panel grid-tabletS-up">
                    <div sx={styles.contentDetails} className="A">
                        <div sx={styles.contentHeader}>
                            <Heading variant="h3" mb={0} sx={styles.contentHeadline}>
                                Chef's Special
                            </Heading>
                            <Text className="only-mobile" pt={1} spacing="wide" size={1} color="textFade" line="tight">
                                What do you want to eat?
                            </Text>
                        </div>
                        <Reveal
                            as={Heading}
                            forwardAs="h4"
                            variant="h1"
                            key={foodMenu[count].name}
                            className="tabletS-up"
                            my={1}
                            sx={styles.contentTitle}
                            motion={fadeInDown}
                            delay={100}
                            cascade
                        >
                            {foodMenu[count].name}
                        </Reveal>
                        <Reveal motion={fadeInDown} duration={800}>
                            <Text key={foodMenu[count].name} className="tabletS-up" sx={styles.contentDesc} overflow>
                                {foodMenu[count].description}
                            </Text>
                        </Reveal>
                        <Media lessThan="tabletS">
                            <Carousel
                                items={foodMenu}
                                selected={count}
                                animation="shift"
                                itemWidth={80}
                                goto={goto}
                                isMobile
                            />
                        </Media>
                    </div>
                    <Reveal as="div" motion={rollInBottom} duration={800} sx={styles.contentImage} className="B">
                        <div sx={styles.contentImageWrap}>
                            <AspectImage key={`img-${foodMenu[count].name}`} src={url} alt={foodMenu[count].name} />
                        </div>
                    </Reveal>
                    <div sx={styles.contentOrder} className="C">
                        <Reveal motion={fadeIn}>
                            <Text key={foodMenu[count].price} sx={styles.contentPrice}>
                                {`₦${foodMenu[count].price * qty}`}
                            </Text>
                        </Reveal>
                        <QtyInput
                            size="sm"
                            color="accent"
                            qty={qty}
                            reset={reset}
                            onChange={onQtyChange}
                            sx={styles.contentQty}
                        />
                        <Button mt={2} brand="outline" size="lg" icon="bag">
                            Order Now
                        </Button>
                    </div>
                </div>
            </div>
            <Media greaterThanOrEqual="tabletS" sx={styles.controls}>
                <div sx={styles.arrows}>
                    <Button
                        mr={1}
                        brand="outline"
                        color="accent"
                        icon="arrowleft"
                        ariaLabel="Previous special dish"
                        onClick={goPrev}
                        disabled={isStart}
                    />
                    <Text sx={styles.counts}>
                        <Reveal motion={fadeIn} duration={500}>
                            <Text as="span" key={count} size={5} weight="bold">
                                {count + 1}
                            </Text>
                        </Reveal>
                        /{foodMenu.length}
                    </Text>
                    <Button
                        ml={1}
                        brand="outline"
                        color="accent"
                        icon="arrowright"
                        ariaLabel="Next special dish"
                        onClick={goNext}
                        disabled={isEnd}
                    />
                </div>
                <Carousel
                    items={foodMenu}
                    selected={count}
                    visible={3}
                    animation="slide"
                    goto={goto}
                    direction={direction}
                />
            </Media>
        </section>
    )
}

export default Hero
