import { Container } from '@theme-ui/components'
import { Heading, Text } from '~@core/typography'
import { Reveal, fadeInLeft, fadeInRight } from '~@core/general'
import { LinkButton } from '~@core/navigation'
import Hero from '../common/Hero'
import DiningSpotCard from '~@common/card/DiningSpotCard'
import ImageOverlayCard from '~@common/card/ImageOverlayCard'

import styles from './style'

import { ReactComponent as DineSvg } from '~/public/inlineSvg/dine.svg'
import { ReactComponent as DiningLoveDoodle } from '~/public/inlineSvg/dining-love.svg'

export default function Dining({ hideBackLink }) {
    return (
        <>
            <Hero
                bg="secondary.hover"
                color="textOnSecondary"
                title="Dine-in & Buffet"
                text={
                    <>
                        Join Us
                        <Text as="span" ml={2}>
                            At The
                        </Text>
                        Table
                    </>
                }
                svg={<DineSvg sx={styles.svgDine} />}
                hideBackLink={hideBackLink}
            >
                <Text weight="light" color="textDark" size={7} mb={4}>
                    Bring your appetite, a culinary feast awaits you.
                </Text>
                <Text size={3}>
                    At Eateri, you are never far from a great meal with a warm, inviting welcome. Our delicious buffet
                    menu offers unmatched variety of quality, healthy dishes for your satisfaction. We use only fresh
                    premium ingredients for a taste that will have you coming back for more.
                </Text>
            </Hero>
            <Container variant="loose" className="hide-overflow">
                <section sx={styles.flexWrap}>
                    <div sx={styles.column}>
                        <div>
                            <Reveal motion={fadeInLeft} duration={800} threshold={0.2} whenInView>
                                <Heading variant="h1" spacing="tight" title sx={styles.bar}>
                                    <Text as="span" color="accent.base" spacing={0} size={7}>
                                        3
                                    </Text>{' '}
                                    dining spots - all different, yet very much the same.
                                </Heading>
                            </Reveal>
                            <DiningSpotCard
                                title="Eateri Restaurant"
                                img="/eateri-spot.jpg"
                                alt="Dining at Eateri Restaurant"
                            >
                                Begin your culinary journey at the heart of Eateri offering an authentic selection of
                                delicious dishes. Order from the à la carte menu or sample a variety of dishes from the
                                buffet. The setting is stylishly vibrant with intimate dining areas to indulge and enjoy
                                intriguing flavours.
                            </DiningSpotCard>
                        </div>
                    </div>
                    <div sx={styles.column}>
                        <div>
                            <DiningSpotCard
                                title="The League Bar"
                                img="/the-league-bar.jpg"
                                alt="Dining at The League Bar"
                            >
                                The League Bar is the perfect spot to enjoy amazing cocktails and mocktails. The chic,
                                sophisticated lounge invites friendly conversations while the bar serves tasty bites
                                along with a variety of beers, wines and spirits.
                            </DiningSpotCard>
                            <DiningSpotCard
                                title="SuperSub Cafe"
                                img="/supersub-cafe.jpg"
                                alt="Dining at SuperSub Cafe"
                            >
                                A refuelling retreat popular by day and night. You'll find peaceful corners to do some
                                work, read or while away an afternoon. The cafe serves hot/cold drinks, light lunches,
                                sweet treats and tasty takeaways for everyone.
                            </DiningSpotCard>
                        </div>
                    </div>
                </section>
                <Container as="section" variant="maxi">
                    <Reveal
                        as={Container}
                        variant="content"
                        motion={fadeInRight}
                        duration={800}
                        threshold={0.5}
                        whenInView
                    >
                        <Heading variant="h1" spacing="tight" title sx={styles.rightBar}>
                            Enjoy{' '}
                            <Text as="span" color="accent.base">
                                the most value
                            </Text>{' '}
                            when you dine.
                        </Heading>
                    </Reveal>
                    <div sx={styles.doodle}>
                        <DiningLoveDoodle />
                    </div>
                    <div sx={styles.grid}>
                        <Reveal threshold={0.2} whenInView>
                            <div>
                                <ImageOverlayCard
                                    color="primary.base"
                                    img="/cater-cocktails.jpg"
                                    alt="Happy Hour Offer"
                                    title="Happy Hour"
                                    subtitle="Offered Weekdays. 4PM - 7PM."
                                >
                                    Half price selected drinks + appetizers.
                                </ImageOverlayCard>
                            </div>
                        </Reveal>
                        <Reveal threshold={0.2} delay={200} whenInView>
                            <div>
                                <ImageOverlayCard
                                    color="accent.base"
                                    img="/cater-snacks.jpg"
                                    alt="Bottomless Brunch Offer"
                                    title="Bottomless Brunch"
                                    subtitle="Offered Sat - Sun. 11AM - 5PM."
                                    className="style-1"
                                >
                                    All-you-can-eat Buffet for N5000. Drinks inclusive.
                                </ImageOverlayCard>
                            </div>
                        </Reveal>
                        <Reveal threshold={0.2} whenInView>
                            <div>
                                <ImageOverlayCard
                                    color="highlight.base"
                                    img="/cater-candybar.jpg"
                                    alt="2-for-1 Twosday Offer"
                                    title="2-4-1 Twosday"
                                    subtitle="Offered Tuesday. 12PM - 2PM, 5PM - 7PM"
                                    className="style-2"
                                >
                                    Buy a main meal and get your second free!
                                </ImageOverlayCard>
                            </div>
                        </Reveal>
                        <Reveal threshold={0.2} delay={200} whenInView>
                            <div>
                                <div sx={styles.card}>
                                    <Reveal duration={600} threshold={0.2} cascade whenInView>
                                        <Heading
                                            as="h3"
                                            color="primary.base"
                                            variant="h4"
                                            spacing="tight"
                                            transform="uppercase"
                                            title
                                            stroke
                                        >
                                            Help a charity
                                        </Heading>
                                        <Text color="whiteFade.70" mb={4}>
                                            We give 10% of your dinner bill to a charity of your choice when you book
                                            ahead.
                                        </Text>
                                    </Reveal>
                                    <div>
                                        <LinkButton href="/reservations" color="accent" link>
                                            Book Now
                                        </LinkButton>
                                    </div>
                                </div>
                            </div>
                        </Reveal>
                    </div>
                    <div sx={styles.disclaimer}>
                        <Text size={1}>T&Cs apply.</Text>
                        <Text size={1}>** All deals are subject to availability **</Text>
                    </div>
                </Container>
            </Container>
        </>
    )
}
