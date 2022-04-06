import { MemphisFrame } from '~@core/other'
import { Heading, Text } from '~@core/typography'
import { AspectImage } from '~@core/general'
import { Reveal, fadeInRight, fadeInLeft, popIn } from '~@core/general/Reveal'
import { LinkButton } from '~@core/navigation'
import styles from './style'

import chefImgUrl from '~/public/about-chef.jpg'
import spiceImgUrl from '~/public/spice-bowl.png'

function About() {
    return (
        <section id="homepage-about" sx={styles.section}>
            <div sx={styles.container}>
                <Reveal motion={fadeInRight} threshold={0.3} duration={600} whenInView>
                    <div>
                        <MemphisFrame sx={styles.imageWrap}>
                            <AspectImage ratio={3 / 5} src={chefImgUrl} alt="" />
                        </MemphisFrame>
                    </div>
                </Reveal>
                <Reveal motion={popIn} duration={1000} delay={100} threshold={0.3} whenInView>
                    <div sx={styles.image}>
                        <AspectImage src={spiceImgUrl} alt="" />
                    </div>
                </Reveal>
                <Reveal as="div" motion={fadeInLeft} delay={100} threshold={0.2} cascade whenInView sx={styles.content}>
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
                    <div>
                        <LinkButton href="/about" color="accent" brand="outline">
                            Learn More
                        </LinkButton>
                    </div>
                </Reveal>
            </div>
        </section>
    )
}

export default About
