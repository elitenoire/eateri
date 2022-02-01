import { Container } from '@theme-ui/components'
import { Scrollable } from '~@core/display'
import { Icon, Reveal } from '~@core/general'
import { Heading, Text } from '~@core/typography'
import { WaveDecoration } from '~@core/other'
import { ReactComponent as DoodleBgSvg } from '~/public/inlineSvg/bg-blobring.svg'

import styles from './style'

import { offers } from './data'

function Offers() {
    return (
        <section sx={styles.section}>
            <Container variant="loose" sx={styles.container}>
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
                                <Text as="span" sx={styles.textDiscount}>
                                    30% off{' '}
                                </Text>
                                <br />
                                Your first online order!
                            </Text>
                            <Text sx={styles.textSkew} my={2} color="textOnAccent" bg="accent.light">
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
            </Container>
            <WaveDecoration color="background" />
        </section>
    )
}

export default Offers
