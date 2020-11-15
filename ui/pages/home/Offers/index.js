/** @jsx jsx */
import { jsx } from '@theme-ui/core'
import { Container } from '@theme-ui/components'
import Scrollable from '~@/display/Scrollable'
import { Icon, Reveal, zoomInUp } from '~@/general'
import { Heading, Text } from '~@/typography'
import WaveDecoration from '~@/other/WaveDecoration'
import DoodleBgSvg from '~/public/inlineSvg/bg-offers.svg'
import styles from './style'

import { offers } from './data'

const Offers = () => (
    <section sx={styles.section}>
        <Container variant="loose">
            <Heading as="h2" variant="h4" sx={styles.header}>
                All Offers
            </Heading>
            <Reveal threshold={0.2} duration={800} whenInView>
                <div sx={styles.stackContext}>
                    <div sx={styles.topOffer}>
                        <DoodleBgSvg sx={styles.doodleBg} />
                        <div sx={styles.iconGift}>
                            <Icon name="gift" />
                        </div>
                        <Text size={3}>
                            <Text as="span" size={6} color="primary.base" weight="bold">
                                30% off{' '}
                            </Text>
                            <br />
                            Your first online order!
                        </Text>
                        <Text sx={styles.skewBg} size={3} my={2} color="textOnAccent" bg="accent.light">
                            Code:{' '}
                            <Text as="span" weight="bold" spacing="wide">
                                welcome30
                            </Text>
                        </Text>
                        <Text variant="tiny" weight="light" spacing="wide">
                            T&Cs apply.
                        </Text>
                    </div>
                </div>
            </Reveal>
            <Text as="h3" variant="title" mt={7} mb={7} size={5} weight="normal" align="center">
                Offers Of The Week
            </Text>
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
