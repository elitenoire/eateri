import Image from 'next/image'
import { Box, Card } from '@theme-ui/components'
import { Heading, Text } from '~@core/typography'
import { Reveal } from '~@core/general'

import styles from './style'

export default function ImageOverlayCard({ title, subtitle, color, children, link, img, alt, ...rest }) {
    return (
        <Card {...rest} sx={styles.card}>
            <Image src={img} alt={alt} layout="fill" objectFit="cover" objectPosition="center" />
            <Box py={7} px={7} sx={styles.content}>
                <Reveal duration={600} threshold={0.2} cascade whenInView>
                    <Heading as="h3" color={color} variant="h4" spacing="tight" title>
                        {title}
                    </Heading>
                    <Text mb={2} size={1} weight="bold">
                        {subtitle}
                    </Text>
                    <Text color="whiteFade.70">{children}</Text>
                </Reveal>
            </Box>
        </Card>
    )
}
