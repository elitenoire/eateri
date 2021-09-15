/** @jsx jsx */
import { jsx } from '@theme-ui/core'
import { Flipped } from 'react-flip-toolkit'
import { Box, Container, Card, Grid } from '@theme-ui/components'
import { Heading, Text } from '~@/typography'
import { Reveal, fadeIn } from '~@/general'
import { BackLink } from '~@/navigation'
import WaveDecoration from '~@/other/WaveDecoration'

import styles from './style'

export default function Hero({
    title,
    bg = 'primary.base',
    cardBg,
    color,
    text,
    svg,
    hideBackLink,
    sx,
    className = '',
    children,
    ...rest
}) {
    return (
        <Box bg={bg} sx={styles.background} data-padded={hideBackLink ? '' : null}>
            <Container variant="loose" sx={styles.container}>
                {!hideBackLink && (
                    <BackLink href="/services" scroll={false} mb={7}>
                        Back to all services
                    </BackLink>
                )}
                <Grid sx={styles.grid}>
                    <Reveal as="div" when cascade sx={styles.header}>
                        <Heading as="h1" variant="intro" title>
                            {`${title}.`}
                        </Heading>
                        <Box bg={bg} sx={styles.divider} />
                    </Reveal>
                    <div sx={styles.cardWrap}>
                        <Flipped flipId={`sc-${title}-bg`}>
                            <Card variant="services" bg={cardBg} className={className} sx={styles.card}>
                                <Flipped inverseFlipId={`sc-${title}-bg`} scale>
                                    {props => (
                                        <Reveal motion={fadeIn} threshold={0.1} duration={600} delay={200} when>
                                            <Text variant="title" color={color} size={5} {...props}>
                                                {text}
                                            </Text>
                                        </Reveal>
                                    )}
                                </Flipped>
                                <Flipped inverseFlipId={`sc-${title}-bg`} scale>
                                    {svg}
                                </Flipped>
                            </Card>
                        </Flipped>
                    </div>
                    <Reveal as="div" when cascade delay={400} sx={styles.content}>
                        {children}
                    </Reveal>
                </Grid>
            </Container>
            <WaveDecoration color="background" />
        </Box>
    )
}
