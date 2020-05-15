/** @jsx jsx */
import { jsx } from '@theme-ui/core'
import { Box, Container, Image } from '@theme-ui/components'
import { MemphisFrame } from '~@/other'
import { Heading, Text } from '~@/typography'
import styles from './style'

import chefImgUrl from '~/public/about-chef.jpg'

const About = () => (
    <Container as="section" id="homepage-about" variant="loose" sx={styles.section}>
        <Container sx={styles.container}>
            <MemphisFrame>
                <Image src={chefImgUrl} />
            </MemphisFrame>
            <Box sx={styles.content}>
                <Text as="h2" variant="block" mb={2} color="primary.base">
                    About Us
                </Text>
                <Heading as="p" variant="h2" color="text" weight="extrabold" title>
                    The Messi of Great Food
                </Heading>
                <Text>
                    Eateri offers premium and authentic cooking, fast and light lunches for an amazing dining
                    experience. We treat all of our customers with utmost care and service.
                </Text>
                <Text my={3}>
                    Choose from a variety of healthy and delicious meal plans designed by our nutritionists and cooked
                    to perfection by our proud Chefs.
                </Text>
                <Text color="accent.base" size={1} sx={{ textDecoration: 'underline' }}>
                    Learn More
                </Text>
            </Box>
        </Container>
    </Container>
)

export default About
