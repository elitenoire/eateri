/** @jsx jsx */
import { jsx } from '@theme-ui/core'
import Link from 'next/link'
import Image from 'next/image'
import { Container, Grid } from '@theme-ui/components'
import { Heading, Text } from '~@/typography'
import { Button, Reveal } from '~@/general'
import MorphCard from './MorphCard'
import styles from './style'

import CateringSvg from '~/public/inlineSvg/catering.svg'
import DeliverySvg from '~/public/inlineSvg/delivery.svg'
import DineSvg from '~/public/inlineSvg/dine.svg'
import TakeoutsSvg from '~/public/inlineSvg/takeouts.svg'

import snacksUrl from '~/public/cater-snacks.jpg'

function ServicesPage() {
    return (
        <Container variant="base" py={13}>
            <h1 className="visually-hidden">Our Services</h1>
            <Reveal as={Container} variant="content" cascade whenInView>
                <Heading as="p" variant="headline" color="text" title>
                    All You Need Is <span className="underline">Eateri!</span>
                </Heading>
                <Text color="textLight" spacing="wider" size={3}>
                    We're all about celebrating life and sharing real food that's fresh, fun and offers excellent value.
                    Order to-go, online or for delivery.
                </Text>
            </Reveal>
            <Container my={13} sx={styles.container}>
                <Grid gap={6} sx={styles.grid}>
                    <div>
                        <MorphCard
                            color="secondary.hover"
                            title="Dine-in & Buffet"
                            href="/services/dine-in-buffet"
                            sx={styles.cardDine}
                            svg={<DineSvg sx={styles.svgDine} />}
                        >
                            <Heading as="h2" variant="h5" mb={2} color="primary.base" title>
                                Dine-in & Buffet
                            </Heading>
                            <Text variant="h1" weight="bold" line="tight" spacing="wide">
                                Join us at the table.
                            </Text>
                            <Text line="normal" size={3} spacing="wider">
                                We offer a wide range of mouth-watering dishes cooked to perfection.
                            </Text>
                            <Link href="/services/dine-in-buffet" passHref>
                                <Button mx={0} my={6} size="lg" brand="outline" color="primary" link>
                                    See Options
                                </Button>
                            </Link>
                        </MorphCard>
                    </div>
                    <div>
                        <MorphCard
                            color="primary.base"
                            title="Click + Collect"
                            href="/services/takeaway"
                            sx={styles.cardTakeouts}
                            svg={<TakeoutsSvg sx={styles.svgTakeouts} />}
                        >
                            <Heading as="h2" variant="h5" mb={2} color="secondary.pale" title>
                                Click + Collect
                            </Heading>
                            <Text variant="h1" weight="bold" line="tight" spacing="wide">
                                Grab a taste of Eateri to go.
                            </Text>
                            <Text line="normal" size={3} spacing="wider">
                                You can order ahead and skip the line. Ready when you are...
                            </Text>
                            <Link href="/services/takeaway" passHref>
                                <Button mx={0} my={6} size="lg" icon="arrowright" color="secondary" link>
                                    Go Go Go
                                </Button>
                            </Link>
                        </MorphCard>
                    </div>
                    <div>
                        <MorphCard
                            color="secondary.light"
                            title="Food Delivery"
                            href="/services/delivery"
                            sx={styles.cardDelivery}
                            svg={<DeliverySvg sx={styles.svgDelivery} />}
                        >
                            <Heading as="h2" variant="h5" mb={2} color="primary.base" title>
                                Food Delivery
                            </Heading>
                            <Text variant="h1" weight="bold" line="tight" spacing="wide">
                                Have your order delivered straight to your door.
                            </Text>
                            <Text line="normal" size={3} spacing="wider">
                                Just stay in, we'll bring your Eateri fix to you fresh and on time.
                            </Text>
                            <Link href="/services/delivery" passHref>
                                <Button mx={0} my={6} size="lg" brand="outline" color="secondary" link>
                                    Order Now
                                </Button>
                            </Link>
                        </MorphCard>
                    </div>
                    <div>
                        <div sx={styles.imageSplit}>
                            <Reveal as="div" duration={500} whenInView>
                                <Text variant="h4" weight="bold" line="tight" spacing="wide">
                                    Healthy snacks at a party buffet.
                                </Text>
                            </Reveal>
                            <div>
                                <Image
                                    src="/cater-cocktails.jpg"
                                    alt=""
                                    layout="fill"
                                    objectFit="cover"
                                    objectPosition="center"
                                />
                            </div>
                        </div>
                    </div>
                    <div>
                        <MorphCard
                            color="secondary.base"
                            title="Event & Catering"
                            href="/services/catering"
                            sx={styles.cardCatering}
                            svg={<CateringSvg sx={styles.svgCatering} />}
                        >
                            <Heading as="h2" variant="h5" mb={2} color="accent.base" title>
                                Event & Catering
                            </Heading>
                            <Text variant="h3" weight="bold" line="tight" spacing="wide">
                                Custom menus, delicious food to complement any event.
                            </Text>
                            <Text line="normal" size={2} spacing="wider">
                                Turn your event plans into a tasty reality courtesy of our dedicated caterers.
                            </Text>
                            <Link href="/services/catering" passHref>
                                <Button mx={0} my={6} size="lg" brand="outline" color="accent" link>
                                    Learn More
                                </Button>
                            </Link>
                        </MorphCard>
                    </div>
                </Grid>
            </Container>
        </Container>
    )
}

export default ServicesPage
