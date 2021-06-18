/** @jsx jsx */
import { jsx } from '@theme-ui/core'
import Image from 'next/image'
import { Box, Card } from '@theme-ui/components'
import { Heading, Text } from '~@/typography'
import { Button, Reveal } from '~@/general'

import styles from './style'

export default function DiningSpotCard({ title, children, img, alt }) {
    return (
        <Card sx={styles.card}>
            <div sx={styles.imageWrap}>
                <Image
                    src={img}
                    alt={alt}
                    layout="fill"
                    objectFit="cover"
                    objectPosition="center"
                    className="hover-scale"
                />
            </div>
            <Reveal duration={600} threshold={0.2} whenInView>
                <Box py={6} px={5} sx={styles.noCollapse}>
                    <Heading as="h3" variant="h4" display="inline-block" spacing="tight" underline="accent.light" title>
                        {title}
                    </Heading>
                    <Text mb={4}>{children}</Text>
                    <Button
                        brand="solid"
                        color="secondary"
                        icon="arrowright"
                        ariaLabel="Learn More"
                        sx={styles.button}
                        link
                    />
                </Box>
            </Reveal>
        </Card>
    )
}
