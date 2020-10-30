/** @jsx jsx */
import { jsx } from '@theme-ui/core'
import { Image } from '@theme-ui/components'
import { MemphisFrame } from '~@/other'
import { Heading, Text } from '~@/typography'
import { Button } from '~@/general'
import styles from './style'

import chefImgUrl from '~/public/about-chef.jpg'
import spiceUrl from '~/public/spice-bowl.png'

const About = () => (
    <section id="homepage-about" sx={styles.section}>
        <div sx={styles.container}>
            <MemphisFrame>
                <Image src={chefImgUrl} />
            </MemphisFrame>
            <div sx={styles.image}>
                <Image src={spiceUrl} />
            </div>
            <div sx={styles.content}>
                <Text as="h2" variant="block" mb={2} color="primary.base">
                    About Us
                </Text>
                <Heading as="p" variant="headline" color="heroTitle" title>
                    The Messi of Great Food
                </Heading>
                <Text spacing="wider" size={3}>
                    Eateri offers premium and authentic cooking, fast and light lunches for an amazing dining
                    experience. We treat all of our customers with utmost care and service.
                </Text>
                <div sx={styles.uniquePoints}>
                    <Text weight="medium" spacing="wider">
                        Variety of healthy & delicious meals
                    </Text>
                    <Text weight="medium" spacing="wider">
                        Culinary experts in classic & modern cuisine
                    </Text>
                    <Text weight="medium" spacing="wider">
                        101% satisfaction guaranteed
                    </Text>
                </div>
                <Button color="accent" brand="outline">
                    Learn More
                </Button>
            </div>
        </div>
    </section>
)

export default About
