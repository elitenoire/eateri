/** @jsx jsx */
import { jsx } from '@theme-ui/core'
import { Container } from '@theme-ui/components'
import { Button } from '~@/general'
import { Text } from '~@/typography'

import styles from './style'

const Cta = () => (
    <Container as="section" variant="loose" id="home-cta" sx={styles.cta}>
        <Container variant="content" mb={0} sx={styles.card}>
            <Text size={6} weight="bold" color="primary.base" italic>
                Feeling Hungry?
            </Text>
            <Text size={5} weight="bold" line="snug" mb={2}>
                Order from our menu and have it delivered to you.
            </Text>
            <Button>View Menu</Button>
        </Container>
    </Container>
)

export default Cta
