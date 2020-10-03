/** @jsx jsx */
import { jsx } from '@theme-ui/core'
import { Container, Image } from '@theme-ui/components'
import { useRef, useState, useCallback } from 'react'
import { Text, Heading } from '~@/typography'
import { GliderControl, GliderBullets, Glider } from '~@/display'
import { Icon } from '~@/general'

import WaveSvg from '~/public/inlineSvg/wave-applebtm.svg'
import MBean from '~/public/inlineSvg/m-bean.svg'
import url from '~/public/dish.png'

import reviews from './data'

import styles from './style'

const colors = ['accent.light', 'primary.base', 'secondary.base', 'highlight.light', 'blue']

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
    const glider = useRef()
    const [index, setIndex] = useState(0)

    const handleChange = useCallback(newIndex => {
        setIndex(newIndex)
    }, [])

    // TODO: sync glider autoplay with page scroll

    return (
        <section id="home-feedback" sx={styles.section}>
            <WaveSvg sx={styles.waveSvg} />
            <Container variant="loose" sx={styles.container}>
                <Container variant="content">
                    <Text as="h2" variant="block" mb={2} color="accent.base">
                        Happy Guests
                    </Text>
                    <Heading as="p" variant="headline" color="text" weight="extrabold" title>
                        What They Are Saying
                    </Heading>
                    <Text color="textLight" spacing="wide">
                        At Eateri, we can’t think of anything more exciting than discovering new tastes and sharing them
                        with everyone.
                    </Text>
                </Container>
                <div sx={styles.wrapper}>
                    <div sx={styles.imageBlock}>
                        <MBean />
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
                        <div sx={styles.foodImage}>
                            <Image src={url} />
                        </div>
                    </div>
                    <div sx={styles.reviewBlock}>
                        <Icon name="doublequotesl" />
                        <GliderBullets colors={colors} count={5} control={glider} index={index} />
                        <Text color="textLight" weight="light" size={7} italic>
                            ~See for yourself~
                        </Text>
                        <Glider ref={glider} onChange={handleChange}>
                            {reviews.map(({ author, review }, i) => (
                                <ReviewCard key={i} author={author} review={review} color={colors[i % colors.length]} />
                            ))}
                        </Glider>
                        <div sx={styles.gliderControlBlock}>
                            <GliderControl control={glider} />
                        </div>
                    </div>
                </div>
            </Container>
        </section>
    )
}

export default Reviews
