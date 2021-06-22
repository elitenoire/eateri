/** @jsx jsx */
import { jsx } from '@theme-ui/core'
import Link from 'next/link'
import { Container } from '@theme-ui/components'
import { Button, Reveal, fadeIn } from '~@/general'
import { Text } from '~@/typography'

import styles from './style'

function Cta() {
    return (
        <Container as="section" variant="loose" id="home-cta" sx={styles.cta}>
            <Container sx={styles.card}>
                <Reveal motion={fadeIn} duration={600} whenInView>
                    <Text size={6} weight="bold" line="tight" spacing="wide">
                        <span>Hungry?</span> Order From <span>Our Menu</span> & Have It Delivered To You.
                    </Text>
                    <div>
                        <Link href="/menu">
                            <Button size="lg" link>
                                View Menu
                            </Button>
                        </Link>
                    </div>
                </Reveal>
            </Container>
        </Container>
    )
}

export default Cta
