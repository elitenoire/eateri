/** @jsx jsx */
import { jsx } from '@theme-ui/core'
import { Container } from '@theme-ui/components'
import { Heading, Text } from '~@/typography'
import { Icon } from '~@/general'

import ImageStrip from './ImageStrip'
import WaveDecoration from '~@/other/WaveDecoration'

import styles from './style'

const Gallery = () => (
    <section id="home-gallery" sx={styles.section}>
        <Container variant="loose" mb={8}>
            <Text as="h2" variant="block" mb={2} color="accent.base">
                Gallery
            </Text>
            <Heading as="p" variant="headline" color="text" weight="extrabold" title>
                Feed Your Eyes!
            </Heading>
            <Text color="textLight" mb={2} size={3} spacing="wider">
                Here's hoping our photos do the talking if words are not enough.
            </Text>
            <Text color="highlight.base" mb={11} size={1} weight="light" spacing="wide">
                #whyiloveeateri #greatfood #simplythebest
            </Text>
            <ImageStrip />
            <Text as="a" href="#" weight="light" size={7} italic sx={styles.subText}>
                ~See more on insta~
                <span>→</span>
                <Icon name="instagram" />
            </Text>
        </Container>
        <WaveDecoration color="accent.base" />
    </section>
)

export default Gallery
