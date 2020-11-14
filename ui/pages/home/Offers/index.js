/** @jsx jsx */
import { jsx } from '@theme-ui/core'
import { Container } from '@theme-ui/components'
import Scrollable from '~@/display/Scrollable'
import { Reveal, zoomInUp } from '~@/general'
import { Heading, Text } from '~@/typography'
import WaveDecoration from '~@/other/WaveDecoration'
import styles from './style'

import { offers } from './data'

const Offers = () => (
    <section sx={styles.section}>
        <Container variant="tight">
            <Container sx={styles.stackContext}>
                <Heading as="h2" variant="h4" sx={styles.header}>
                    All Offers
                </Heading>
                <div sx={styles.topOffer}>
                    <Text size={[3, null, 4]}>Get 30% off your first online order</Text>
                    <Text my={2} color="heroTitle">
                        Code:{' '}
                        <Text as="span" weight="bold" spacing="wide">
                            welcome30
                        </Text>
                    </Text>
                    <Text variant="tiny" mt={6} weight="light" spacing="wide">
                        * Offer valid only for first time customers. T&C applies.
                    </Text>
                    <span />
                    <span />
                </div>
                <Text as="h3" variant="title" mt={7} mb={7} size={5} weight="normal" align="center">
                    Offers Of The Week
                </Text>
            </Container>
        </Container>
        <Container variant="loose">
            <Reveal motion={zoomInUp} duration={600} threshold={0.2} whenInView>
                <Scrollable as="ul" flex hideScroll>
                    {offers.map(({ title, text }) => (
                        <li key={title} sx={styles.offersCard}>
                            <Text line="normal">
                                <Text as="span" weight="bold">
                                    {title}
                                </Text>
                                {text}
                            </Text>
                        </li>
                    ))}
                </Scrollable>
            </Reveal>
        </Container>
        <WaveDecoration color="background" />
    </section>
)

export default Offers
