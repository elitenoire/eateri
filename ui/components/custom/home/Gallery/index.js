import { Container } from '@theme-ui/components'
import { Heading, Text } from '~@core/typography'
import { Icon, Reveal } from '~@core/general'
import { WaveDecoration } from '~@core/other'

import ImageStrip from './ImageStrip'

import styles from './style'

function Gallery() {
    return (
        <section id="home-gallery" sx={styles.section}>
            <Container variant="loose" mb={8}>
                <Reveal as="header" cascade whenInView>
                    <Text as="h2" variant="badge" mb={2} bg="accent.pale" color="accent.base">
                        Gallery
                    </Text>
                    <Heading as="p" variant="headline" color="text" title>
                        Feed Your Eyes!
                    </Heading>
                    <Text color="textLight" mb={2} size={3} spacing="wider">
                        Here's hoping our photos do the talking if words are not enough.
                    </Text>
                    <Text color="highlight.base" mb={11} size={1} weight="light" spacing="wide">
                        #whyiloveeateri #greatfood #simplythebest
                    </Text>
                </Reveal>
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
}

export default Gallery
