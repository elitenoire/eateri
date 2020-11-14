/** @jsx jsx */
import { jsx } from '@theme-ui/core'
import { Container, Image } from '@theme-ui/components'
import useInView from 'react-cool-inview'
import { Text, Heading } from '~@/typography'
import { GliderControl, GliderBullets, Glider, GliderProvider, useIndex } from '~@/display'
import { Icon, Reveal } from '~@/general'

import WaveSvg from '~/public/inlineSvg/wave-applebtm.svg'
import MBean from '~/public/inlineSvg/m-bean.svg'
import url from '~/public/dish.png'

import reviews from './data'

import styles from './style'

const colors = ['accent.light', 'primary.base', 'secondary.base', 'highlight.light', 'blue']

const GliderIndex = ({ children }) => {
    const { index } = useIndex()
    return children(index)
}

const ReviewCard = ({ author, review, color }) => (
    <div sx={styles.reviewCard(color)}>
        <span>⭐⭐⭐⭐⭐</span>
        <Text mt={2}>{review}</Text>
        <span>-</span>
        <Text weight="light" italic>
            {author}
        </Text>
    </div>
)

const Reviews = () => {
    const { ref: reviewBlockRef, inView } = useInView({
        threshold: 0,
        rootMargin: '100px 0px 100px 0px',
    })

    return (
        <section id="home-feedback" sx={styles.section}>
            <WaveSvg sx={styles.waveSvg} />
            <Container variant="loose" sx={styles.container}>
                <Reveal as={Container} variant="content" cascade whenInView>
                    <Text as="h2" variant="block" mb={2} color="accent.base">
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
                            <GliderIndex>
                                {index => (
                                    <Text
                                        key={index}
                                        className="vivify popIn"
                                        color={colors[index]}
                                        weight="bold"
                                        italic
                                        sx={styles.gliderIndex}
                                    >
                                        {index + 1}
                                    </Text>
                                )}
                            </GliderIndex>
                            <div sx={styles.foodImage}>
                                <Image src={url} />
                            </div>
                        </div>
                        <div ref={reviewBlockRef} sx={styles.reviewBlock}>
                            <GliderBullets colors={colors} count={reviews.length} />
                            <Text color="textLight" weight="light" size={7} italic sx={styles.subText}>
                                ~See for yourself~
                                <Icon name="doublequotesl" />
                            </Text>
                            <Glider>
                                {reviews.map(({ author, review }, i) => (
                                    <ReviewCard
                                        key={i}
                                        author={author}
                                        review={review}
                                        color={colors[i % colors.length]}
                                    />
                                ))}
                            </Glider>
                            <div sx={styles.gliderControlBlock}>
                                <GliderControl />
                            </div>
                        </div>
                    </div>
                </GliderProvider>
            </Container>
        </section>
    )
}

export default Reviews
