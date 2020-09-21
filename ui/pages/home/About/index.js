/** @jsx jsx */
import { jsx } from '@theme-ui/core'
import { Container, Image } from '@theme-ui/components'
import { MemphisFrame } from '~@/other'
import { Heading, Text } from '~@/typography'
import { Button } from '~@/general'
import styles from './style'

import chefImgUrl from '~/public/about-chef.jpg'

const About = () => (
    <Container as="section" id="homepage-about" variant="loose" sx={styles.section}>
        <Container sx={styles.container}>
            <MemphisFrame>
                <Image src={chefImgUrl} />
            </MemphisFrame>
            <div sx={styles.content}>
                <Text as="h2" variant="block" mb={2} color="primary.base">
                    About Us
                </Text>
                <Heading as="p" variant="headline" color="text" weight="extrabold" title>
                    The Messi of Great Food
                </Heading>
                <Text spacing="wide">
                    Eateri offers premium and authentic cooking, fast and light lunches for an amazing dining
                    experience. We treat all of our customers with utmost care and service.
                </Text>
                <div sx={styles.uniquePoints}>
                    <Text weight="medium" spacing="wide">
                        Variety of healthy & delicious meals
                    </Text>
                    <Text weight="medium" spacing="wide">
                        Culinary experts in classic & modern cuisine
                    </Text>
                    <Text weight="medium" spacing="wide">
                        101% satisfaction guaranteed
                    </Text>
                </div>
                <Button color="accent" brand="outline">
                    Learn More
                </Button>
            </div>
        </Container>
    </Container>
)

export default About
