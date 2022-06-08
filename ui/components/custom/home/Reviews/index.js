import { Container } from '@theme-ui/components'
import { useInView } from 'react-cool-inview'
import { Text, Heading } from '~@core/typography'
import { GliderControl, GliderBullets, Glider, GliderProvider } from '~@core/display'
import { Icon, AspectImage, Reveal, fadeInRight } from '~@core/general'

import { ReactComponent as WaveSvg } from '~/public/inlineSvg/wave-applebtm.svg'
import { ReactComponent as MBean } from '~/public/inlineSvg/m-bean.svg'
import { ReactComponent as ArrowUp } from '~/public/inlineSvg/arrow-up.svg'
import url from '~/public/dish.png'

import reviews from './data'

import styles from './style'

function ReviewCard({ author, review }) {
    return (
        <div sx={styles.reviewCard}>
            <span>⭐⭐⭐⭐⭐</span>
            <Text mt={2} size={6} weight="bold" spacing="normal">
                {review}
            </Text>
            <span>-</span>
            <Text weight="bold" italic>
                {author}
            </Text>
        </div>
    )
}

function Reviews() {
    const { observe, inView } = useInView({
        threshold: 0,
        rootMargin: '100px 0px 100px 0px',
    })

    return (
        <section id="home-feedback" sx={styles.section}>
            <WaveSvg sx={styles.waveSvg} />
            <Container variant="loose" sx={styles.container}>
                <Reveal as={Container} forwardAs="header" variant="content" cascade whenInView>
                    <Text as="h2" variant="badge" mb={2} bg="accent.pale" color="accent.base">
                        Happy Guests
                    </Text>
                    <Heading as="p" variant="headline" color="text" title>
                        What They Are Saying
                    </Heading>
                    <Text color="textLight" spacing="wider" size={3}>
                        At Eateri, we can’t think of anything more exciting than discovering new tastes and sharing them
                        with everyone.
                    </Text>
                </Reveal>
                <GliderProvider autoplay={inView} autoplayInterval={3000}>
                    <div sx={styles.wrapper}>
                        <div sx={styles.imageBlock}>
                            <MBean />
                            <div sx={styles.foodImage}>
                                <AspectImage src={url} />
                            </div>
                        </div>
                        <div ref={observe} sx={styles.reviewBlock}>
                            <GliderBullets colors="secondary.base" count={reviews.length} />
                            <Text weight="light" size={7} italic sx={styles.subText}>
                                ~See for yourself~
                                <Icon name="doublequotesl" />
                            </Text>
                            <Glider>
                                {reviews.map(({ author, review }, i) => (
                                    <ReviewCard key={i} author={author} review={review} />
                                ))}
                            </Glider>
                            <div sx={styles.gliderControlBlock}>
                                <GliderControl color="secondary.base" />
                            </div>
                        </div>
                    </div>
                </GliderProvider>
                <Reveal motion={fadeInRight} delay={200} whenInView>
                    <div sx={styles.arrowUp}>
                        <ArrowUp />
                    </div>
                </Reveal>
            </Container>
        </section>
    )
}

export default Reviews
