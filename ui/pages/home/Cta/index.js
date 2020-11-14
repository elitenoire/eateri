/** @jsx jsx */
import { jsx } from '@theme-ui/core'
import { Container } from '@theme-ui/components'
import { Button } from '~@/general'
import { Reveal, fadeIn } from '~@/general/Reveal'
import { Text } from '~@/typography'

import styles from './style'

const Cta = () => (
    <Container as="section" variant="loose" id="home-cta" sx={styles.cta}>
        <Container sx={styles.card}>
            <Reveal motion={fadeIn} duration={600} whenInView>
                <Text size={6} weight="bold" line="tight" spacing="wide">
                    <span>Hungry?</span> Order From <span>Our Menu</span> & Have It Delivered To You.
                </Text>
                <Button size="lg">View Menu</Button>
            </Reveal>
        </Container>
    </Container>
)

export default Cta
