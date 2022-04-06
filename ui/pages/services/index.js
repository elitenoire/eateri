import Image from 'next/image'
import { Container, Grid } from '@theme-ui/components'
import { Heading, Text } from '~@core/typography'
import { Reveal } from '~@core/general'
import { LinkButton } from '~@core/navigation'
import Squiggle from '~@core/other/Squiggle'
import MorphCard from '~@common/card/MorphCard'
import styles from '~/styles/services'

import { ReactComponent as CateringSvg } from '~/public/inlineSvg/catering.svg'
import { ReactComponent as DeliverySvg } from '~/public/inlineSvg/delivery.svg'
import { ReactComponent as DineSvg } from '~/public/inlineSvg/dine.svg'
import { ReactComponent as TakeoutsSvg } from '~/public/inlineSvg/takeouts.svg'

import snacksUrl from '~/public/cater-snacks.jpg'

function ServicesPage() {
    return (
        <Container variant="base" pt={11} pb={13} sx={styles.container}>
            <Container as="header" variant="content">
                <h1 className="visually-hidden">Our Services</h1>
                <Reveal cascade whenInView>
                    <Heading as="p" variant="intro" color="text" title>
                        All You Need Is <span className="underline">Eateri!</span>
                    </Heading>
                    <Text color="textLight" spacing="wider" size={3}>
                        We're all about celebrating life and sharing real food that's fresh, fun and offers excellent
                        value. Order to-go, online or for delivery.
                    </Text>
                </Reveal>
            </Container>
            <Container my={13} sx={styles.gridContainer}>
                <Grid gap={6} sx={styles.grid}>
                    <div>
                        <MorphCard
                            bg="secondary.hover"
                            color="secondary.light"
                            title="Dine-in & Buffet"
                            svg={<DineSvg sx={styles.svgScale} />}
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
                            <div>
                                <LinkButton href="/services/dining" my={6} size="lg" brand="outline" color="primary">
                                    See Options
                                </LinkButton>
                            </div>
                        </MorphCard>
                    </div>
                    <div>
                        <MorphCard
                            bg="primary.base"
                            color="textOnPrimary"
                            title="Click + Collect"
                            svg={<TakeoutsSvg sx={styles.svgScale} />}
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
                            <div>
                                <LinkButton
                                    href="/services/takeaway"
                                    my={6}
                                    size="lg"
                                    icon="arrowright"
                                    color="secondary"
                                >
                                    Grab It
                                </LinkButton>
                            </div>
                        </MorphCard>
                    </div>
                    <div>
                        <MorphCard
                            bg="secondary.light"
                            color="text"
                            title="Food Delivery"
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
                            <div>
                                <LinkButton
                                    href="/services/delivery"
                                    my={6}
                                    size="lg"
                                    brand="outline"
                                    color="secondary"
                                    link
                                >
                                    Order Now
                                </LinkButton>
                            </div>
                        </MorphCard>
                    </div>
                    <div>
                        <figure sx={styles.imageSplit}>
                            <Reveal as="div" duration={500} whenInView>
                                <Text as="figcaption" variant="h4" weight="bold" line="tight" spacing="wide">
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
                                    className="hover-scale"
                                />
                            </div>
                        </figure>
                    </div>
                    <div>
                        <MorphCard
                            bg="secondary.base"
                            color="textOnSecondary"
                            title="Events & Catering"
                            sx={styles.cardCatering}
                            svg={<CateringSvg sx={styles.svgCatering} />}
                        >
                            <Heading as="h2" variant="h5" mb={2} color="accent.base" title>
                                Events & Catering
                            </Heading>
                            <Text variant="h3" weight="bold" line="tight" spacing="wide">
                                Custom menus, delicious food to complement any event.
                            </Text>
                            <Text line="normal" size={2} spacing="wider">
                                Turn your event plans into a tasty reality courtesy of our dedicated caterers.
                            </Text>
                            <div>
                                <LinkButton
                                    href="/services/catering"
                                    my={6}
                                    size="lg"
                                    brand="outline"
                                    color="accent"
                                    link
                                >
                                    Learn More
                                </LinkButton>
                            </div>
                        </MorphCard>
                    </div>
                </Grid>
            </Container>
            <div sx={styles.squiggle}>
                <Squiggle bg="primary.light" />
            </div>
            <div sx={styles.squiggle2}>
                <Squiggle bg="highlight.light" design={2} shape="diamond" />
            </div>
            <div sx={styles.squiggle3}>
                <Squiggle bg="accent.light" design={2} size="lg" shape="blob2" />
            </div>
        </Container>
    )
}

export default ServicesPage
