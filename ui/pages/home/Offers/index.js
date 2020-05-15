/** @jsx jsx */
import { jsx } from '@theme-ui/core'
import { Container } from '@theme-ui/components'
import Scrollable from '~@/display/Scrollable'
import { Heading, Text } from '~@/typography'
import WaveDecoration from '~@/other/WaveDecoration'
import styles from './style'

const offers = [
    {
        title: 'See All Offers',
    },
    {
        title: 'Buy 1, Get 1',
        text: 'Half Price On Pizzas',
    },
    {
        title: '20% Off',
        text: 'Vegan Meals',
    },
    {
        title: '3 For 2',
        text: 'Selected Burgers',
    },
    {
        title: 'Save ₦500',
        text: 'On Orders Above ₦2000',
    },
    {
        title: 'Buffet',
        text: 'For Just ₦4000 This Friday',
    },
]

const OffersCard = ({ title, text }) => (
    <div sx={styles.offersCard}>
        <Text size={1}>
            <Text as="span" size={3} weight="bold">
                {title}
            </Text>
            {text}
        </Text>
    </div>
)

const Offers = () => (
    <section sx={styles.section}>
        <Container variant="tight">
            <Container>
                <Heading as="h2" variant="h4" sx={styles.header}>
                    All Offers
                </Heading>
                <div sx={styles.topOffer}>
                    <Text size={4}>Get 30% off your first online order</Text>
                    <Text my={2} color="heroTitle">
                        Code:{' '}
                        <Text as="span" weight="bold" spacing="wide">
                            welcome30
                        </Text>
                    </Text>
                    <Text variant="tiny" mt={6} weight="light">
                        * Offer valid only for first time customers. T&C applies.
                    </Text>
                    <span />
                    <span />
                </div>
                <Text as="h3" variant="title" my={7} size={5} weight="normal" align="center">
                    Offers Of The Week
                </Text>
            </Container>
        </Container>
        <Container variant="loose">
            <Scrollable flex hideScroll>
                {offers.map(({ title, text }) => (
                    <OffersCard key={title} title={title} text={text} />
                ))}
            </Scrollable>
        </Container>
        <WaveDecoration color="muted" />
    </section>
)

export default Offers
