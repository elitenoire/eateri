/** @jsx jsx */
import { jsx } from '@theme-ui/core'
import { Container, Card, Grid } from '@theme-ui/components'
import { Heading, Text } from '~@/typography'
import WaveDecoration from '~@/other/WaveDecoration'
import Icon from '~@/general/Icon'
import styles from './style'

import CateringSvg from '~/public/inlineSvg/catering.svg'
import DeliverySvg from '~/public/inlineSvg/delivery.svg'
import DineSvg from '~/public/inlineSvg/dine.svg'
import TakeoutsSvg from '~/public/inlineSvg/takeouts.svg'

const Services = () => (
    <section id="homepage-services" sx={styles.section}>
        <Container variant="loose">
            <Container variant="content">
                <Text as="h2" variant="block" mb={2} color="primary.base">
                    Our Services
                </Text>
                <Heading as="p" variant="h2" weight="extrabold" title>
                    Why We Are The Top Faves!
                </Heading>
                <Text color="textLighter">
                    Whether you're planning the party of the year, a cocktail masterclass or a simple but stylish dinner
                    with friends, you're in expert hands.
                </Text>
            </Container>
            <Grid gap={4} sx={styles.grid}>
                <Card variant="services" title="Dining & Buffet" sx={styles.cardDine}>
                    <Text variant="title" sx={styles.cardText}>
                        Join Us
                        <span>At The</span>
                        Table
                    </Text>
                    <DineSvg sx={styles.svgDine} />
                </Card>
                <Card variant="services" title="Order Takeouts" sx={styles.cardTakeouts}>
                    <Text variant="title" sx={styles.cardText}>
                        The
                        <span>Perfect</span>
                        Grab-n-go!
                    </Text>
                    <TakeoutsSvg sx={styles.svgTakeouts} />
                </Card>
                <Card variant="services" title="Food Delivery" sx={styles.cardDelivery}>
                    <Text variant="title" size={5}>
                        Speedy
                        <span>DELIVERY</span>
                        To your doorsteps
                    </Text>
                    <DeliverySvg sx={styles.svgDelivery} />
                </Card>
                <div sx={styles.gridRowFlex}>
                    <Card variant="services" title="Dinner Reservations" sx={styles.cardReserve}>
                        <div>
                            <Text variant="title" size={4}>
                                Reservations
                            </Text>
                            <hr sx={styles.divider} />
                            <Text variant="title" size={4}>
                                17:00 - 23:00 PM
                            </Text>
                        </div>
                        <Icon name="arrowgofill" />
                    </Card>
                    <Card variant="services" title="Event Catering" sx={styles.cardCatering}>
                        <CateringSvg sx={styles.svgCatering} />
                        Catering
                    </Card>
                </div>
            </Grid>
        </Container>
        <WaveDecoration color="primary.base" />
    </section>
)

export default Services
