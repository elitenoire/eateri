import { Container } from '@theme-ui/components'
import { AspectImage, Reveal, fadeIn } from '~@core/general'
import { Text } from '~@core/typography'
import { LinkButton } from '~@core/navigation'

import imgUrl from '~/public/fruit-bowl.png'

import styles from './style'

function Cta() {
    return (
        <Container as="section" variant="loose" id="home-cta" sx={styles.cta}>
            <div sx={styles.imageWrap}>
                <AspectImage src={imgUrl} alt="" objectFit="contain" />
            </div>
            <div sx={styles.card}>
                <Reveal motion={fadeIn} duration={600} whenInView>
                    <Text size={6} weight="bold" line="tight" spacing="wide" sx={styles.text}>
                        <span>Hungry?</span> Order From <span>Our Menu</span> & Have It Delivered To You.
                    </Text>
                    <div>
                        <LinkButton href="/menu" size="lg">
                            View Menu
                        </LinkButton>
                    </div>
                </Reveal>
            </div>
        </Container>
    )
}

export default Cta
