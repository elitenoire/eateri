import Image from 'next/image'
import { Box, Card } from '@theme-ui/components'
import { Heading, Text } from '~@core/typography'
import { LinkButton } from '~@core/navigation'
import { Reveal } from '~@core/general'

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
                    <Text mb={4} size={3}>
                        {children}
                    </Text>
                    <div sx={styles.buttonWrap}>
                        <LinkButton href="#" brand="solid" color="secondary" icon="arrowright" ariaLabel="Learn More" />
                    </div>
                </Box>
            </Reveal>
        </Card>
    )
}
