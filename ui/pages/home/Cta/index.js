import Link from 'next/link'
import { Container } from '@theme-ui/components'
import { Button, AspectImage, Reveal, fadeIn } from '~@/general'
import { Text } from '~@/typography'

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
                        <Link href="/menu" passHref>
                            <Button size="lg" link>
                                View Menu
                            </Button>
                        </Link>
                    </div>
                </Reveal>
            </div>
        </Container>
    )
}

export default Cta
