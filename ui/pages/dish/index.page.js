/** @jsx jsx */
import { jsx } from '@theme-ui/core'
import { useState, useRef, useEffect } from 'react'
import Image from 'next/image'
import useInView from 'react-cool-inview'
import { Box, Flex, AspectRatio, Container } from '@theme-ui/components'
import { useRadioState, Radio, RadioGroup } from 'reakit/Radio'
import { Text, Heading } from '~@/typography'
import { Button, ButtonBase, Icon, Reveal, slideUp, slideDown } from '~@/general'
import { BackLink } from '~@/navigation'
import { QtyInput, useQtyInputState, StarRating, BarRating } from '~@/form'
import { Scrollable, FoodCard } from '~@/display'

import styles from './style'

import url from '~/public/dish.png'

function DishLayout() {
    const { qty, onQtyChange } = useQtyInputState()
    const radio = useRadioState({ state: 's' })

    const firstRenderRef = useRef(true)
    const [showBar, setShowBar] = useState(false)

    const { ref: otherRef } = useInView({
        threshold: 0.2,
        onEnter: () => {
            setShowBar(true)
        },
        onLeave: ({ scrollDirection: { vertical } }) => {
            if (vertical === 'up') {
                setShowBar(true)
            } else if (vertical === 'down') {
                setShowBar(false)
            }
        },
    })

    useEffect(() => {
        firstRenderRef.current = false
    }, [])

    return (
        <Container variant="maxi" sx={styles.container}>
            <BackLink href="/menu" sx={styles.backLink}>
                Back to menu
            </BackLink>
            <div sx={styles.fixedToTop}>
                <div sx={styles.mobileBackLink}>
                    <BackLink href="/menu" m={0} py={4} px={6}>
                        Back to menu
                    </BackLink>
                </div>
            </div>
            <div sx={styles.hero}>
                <div>
                    <div sx={styles.imageContainer}>
                        <div sx={styles.imageWrap}>
                            <AspectRatio ratio={1}>
                                <Image src={url} alt="" layout="fill" objectFit="cover" objectPosition="center" />
                            </AspectRatio>
                        </div>
                    </div>
                    <div sx={styles.extraInfoWrap}>
                        <ul sx={styles.extraInfoList}>
                            <li>
                                <span>
                                    <Icon name="leaf" />
                                </span>
                                Healthy
                            </li>
                            <li>
                                <span>
                                    <Icon name="fire" />
                                </span>
                                520kcal
                            </li>
                            <li>
                                <span>
                                    <Icon name="timer" />
                                </span>
                                45min - 1hr
                            </li>
                        </ul>
                        <div sx={styles.offerBox}>
                            <Text size={1} sx={styles.offerText}>
                                free delivery when you spend N5000
                            </Text>
                        </div>
                    </div>
                </div>
                <div>
                    <div sx={styles.content}>
                        <div sx={styles.header}>
                            <div sx={styles.titleWrap}>
                                <Heading as="h1" title sx={styles.title}>
                                    Fried Rice Chicken & Soy Sauce
                                </Heading>
                                <Button
                                    brand="pale"
                                    color="secondary.base"
                                    scaleIcon="lg"
                                    alpha
                                    icon="heart"
                                    ariaLabel="Save for Later"
                                />
                            </div>
                            <Button brand="ghost" color="secondary" ghostText noHoverUp sx={styles.rating}>
                                <StarRating
                                    size="1.2em"
                                    selectedRating={4.35}
                                    starFillColor="text"
                                    isReadOnly
                                    outline
                                />
                                <Text as="span" size={1} weight="bold" ml={2}>
                                    4.35
                                </Text>
                                <Text as="span" size={1} weight="bold" ml={2}>
                                    (5)
                                </Text>
                            </Button>
                        </div>
                        <div sx={styles.flexSplit}>
                            <Text size={5} weight="500" color="text">
                                {`N${1500 * qty}`}
                            </Text>
                            <QtyInput brand="outline" qty={qty} onChange={onQtyChange} />
                        </div>
                        <Box my={4}>
                            <Text size={0} mb={2} weight="bold">
                                Size
                            </Text>
                            <RadioGroup {...radio} aria-label="Select size">
                                <Radio
                                    as={Button}
                                    {...radio}
                                    mr={4}
                                    brand="subtle"
                                    color="secondary"
                                    bg="secondary.base"
                                    outlineColor="blackFade.30"
                                    outline
                                    noHoverUp
                                    active={radio.state === 's'}
                                    value="s"
                                    sx={styles.option}
                                >
                                    S
                                </Radio>
                                <Radio
                                    as={Button}
                                    {...radio}
                                    mr={4}
                                    brand="subtle"
                                    color="secondary"
                                    bg="secondary.base"
                                    outlineColor="blackFade.30"
                                    outline
                                    noHoverUp
                                    active={radio.state === 'm'}
                                    value="m"
                                    sx={styles.option}
                                >
                                    M
                                </Radio>
                                <Radio
                                    as={Button}
                                    {...radio}
                                    brand="subtle"
                                    color="secondary"
                                    bg="secondary.base"
                                    outlineColor="blackFade.30"
                                    outline
                                    disabled
                                    noHoverUp
                                    active={radio.state === 'l'}
                                    value="l"
                                    sx={styles.option}
                                >
                                    L
                                </Radio>
                            </RadioGroup>
                        </Box>
                        <Text mt={2}>
                            Delicious recipes on a cripsy rice and cheese crust, served with your choice of spicy light
                            mayo, soy, seasame or Yin Yang sauce.
                        </Text>
                        <div sx={styles.actionWrap}>
                            <Button color="secondary" size="lg" icon="bag">
                                Add To Bag
                            </Button>
                            <Button brand="pale" alpha color="secondary.base" size="lg">
                                Buy Now
                            </Button>
                        </div>
                    </div>
                </div>
            </div>
            <div ref={otherRef} sx={styles.otherWrap}>
                <section sx={styles.otherSection}>
                    <div sx={styles.flexSplit}>
                        <div>
                            <Heading as="h2" variant="h4" mb={0}>
                                Picked for you
                            </Heading>
                            <Text size={0} mt={1} color="textFade">
                                Other meals you can try
                            </Text>
                        </div>
                        <div>
                            <Button
                                mr={1}
                                brand="subtle"
                                color="secondary"
                                icon="arrowleft"
                                ariaLabel="Scroll backwards"
                                // onClick={goPrev}
                                // disabled={isStart}
                            />
                            <Button
                                ml={1}
                                brand="subtle"
                                color="secondary"
                                icon="arrowright"
                                ariaLabel="Scroll forwards"
                                // onClick={goNext}
                                // disabled={isEnd}
                            />
                        </div>
                    </div>
                    <Scrollable as="ul" pad="0.25em" hideScroll sx={styles.scrollable}>
                        {[
                            'Jollof Rice',
                            'Egusi Soup',
                            'Teriyaki Sauce & Rice',
                            'Chilli Con Carne',
                            'Mediterranean Pizza',
                            'Grilled Steak Tomato Salad',
                        ].map(dish => (
                            <li key={dish}>
                                <FoodCard title={dish} rating="4.75" imgUrl={url} />
                            </li>
                        ))}
                    </Scrollable>
                </section>
                <section sx={styles.reviewWrap}>
                    <div sx={styles.otherSection}>
                        <div sx={styles.reviewContentWrap}>
                            <Heading as="h2" variant="h4" fluid>
                                Reviews
                            </Heading>
                            <div sx={styles.reviewContent}>
                                <div>
                                    <Flex>
                                        <StarRating
                                            size="1.2em"
                                            selectedRating={4.35}
                                            starFillColor="text"
                                            isReadOnly
                                            outline
                                        />
                                        <Text as="span" size={1} weight="bold" ml={2}>
                                            4.35
                                        </Text>
                                        <Text as="span" size={1} weight="bold" ml={2}>
                                            (5 Reviews)
                                        </Text>
                                    </Flex>
                                    <Text size={0} mt={1} color="textFade">
                                        Recommended by 73% customers
                                    </Text>
                                </div>
                                <Box pt={4}>
                                    <BarRating label="5 stars" value={18} percent={72} />
                                    <BarRating label="4 stars" value={5} percent={20} />
                                    <BarRating label="3 stars" value={2} percent={8} />
                                    <BarRating label="2 stars" value={0} percent={0} />
                                    <BarRating label="1 star" value={0} percent={0} />
                                </Box>
                                <Text size={0} color="textFade">
                                    25 total ratings
                                </Text>
                            </div>
                            <div sx={styles.reviewContent}>
                                <div sx={styles.reviewBand}>
                                    <Heading as="h3" size={2} mb={4}>
                                        Most Recent Review
                                    </Heading>
                                    <article>
                                        <div>
                                            <div sx={styles.flexSplit}>
                                                <StarRating
                                                    size="1em"
                                                    selectedRating={4.85}
                                                    starFillColor="text"
                                                    isReadOnly
                                                    outline
                                                />
                                                <Text size={0} color="textLight">
                                                    10 days ago
                                                </Text>
                                            </div>
                                            <Text size={0} color="textLight">
                                                Anonymous
                                            </Text>
                                        </div>
                                        <Heading as="h4" variant="small" mt={3} mb={1}>
                                            Tasty
                                        </Heading>
                                        <Text size={0}>Very delicious food. Delivery was fast too!</Text>
                                    </article>
                                    <Button
                                        mt={5}
                                        brand="subtle"
                                        shape="flat"
                                        bg="gray"
                                        outlineColor="gray"
                                        outline
                                        fluid
                                    >
                                        View All Reviews
                                    </Button>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <Box as="section" data-lined bg={[null, null, null, 'primary.light']} sx={styles.otherSection}>
                    <div sx={styles.flexLayout}>
                        <div sx={styles.sectionHeader}>
                            <div>
                                <Heading as="h2" variant="h4" mb={0} sx={styles.tabletVisible}>
                                    Recently seen
                                </Heading>
                                <Heading as="h2" variant="h4" transform="uppercase" sx={styles.tabletHidden}>
                                    You've just seen these...
                                </Heading>
                                <Text size={0} mt={1} color="textFade">
                                    Can we tempt you one more time?
                                </Text>
                                <Text size={0} color="textFade" sx={styles.tabletHidden}>
                                    Sometimes the best food is just what you're craving.
                                </Text>
                            </div>
                            <div sx={styles.scrollNav}>
                                <Button
                                    mr={1}
                                    brand="subtle"
                                    color="secondary"
                                    icon="arrowleft"
                                    ariaLabel="Scroll backwards"
                                    // onClick={goPrev}
                                    // disabled={isStart}
                                    sx={styles.scrollNavButton}
                                />
                                <Button
                                    ml={1}
                                    brand="subtle"
                                    color="secondary"
                                    icon="arrowright"
                                    ariaLabel="Scroll forwards"
                                    // onClick={goNext}
                                    // disabled={isEnd}
                                    sx={styles.scrollNavButton}
                                />
                            </div>
                        </div>
                        <div sx={styles.sectionContent}>
                            <Scrollable as="ul" pad="0.25em" hideScroll sx={styles.scrollableRecently}>
                                {[
                                    'Jollof Rice',
                                    'Egusi Soup',
                                    'Teriyaki Sauce & Rice',
                                    'Chilli Con Carne',
                                    'Mediterranean Pizza',
                                    'Grilled Steak Tomato Salad',
                                ].map(dish => (
                                    <li key={dish}>
                                        <FoodCard imgUrl={url} bg="white" shadow="soft" imageOnly>
                                            {dish}
                                        </FoodCard>
                                    </li>
                                ))}
                            </Scrollable>
                        </div>
                    </div>
                </Box>
                <aside sx={styles.fixedToBottom}>
                    <Reveal
                        motion={showBar ? slideUp : slideDown}
                        duration={!showBar && firstRenderRef.current ? 0 : 400}
                        hideUntilReveal
                    >
                        <Container variant="maxi">
                            <div sx={styles.bottomBar}>
                                <div sx={styles.priceTotal}>
                                    <Text size={0} color="whiteFade.20" truncate>
                                        Fried Rice Chicken & Soy Sauce
                                    </Text>
                                    <Text size={1} mr={2} color="whiteFade.50">
                                        Total:
                                    </Text>
                                    <Text size={3} weight="500" line="snug" color="textOnSecondary">
                                        <span>N</span>5,000.00
                                    </Text>
                                </div>
                                <div sx={styles.actions}>
                                    <ButtonBase noHoverUp>Buy Now</ButtonBase>
                                    <ButtonBase noHoverUp>
                                        <span aria-label="Add to bag" sx={styles.mobileVisible}>
                                            <span sx={styles.addBagIcon}>
                                                <Icon name="bag" sx={styles.bagIcon} />
                                            </span>
                                        </span>
                                        <span sx={styles.mobileHidden}>Add to bag</span>
                                    </ButtonBase>
                                </div>
                            </div>
                        </Container>
                    </Reveal>
                </aside>
            </div>
        </Container>
    )
}

export default DishLayout
