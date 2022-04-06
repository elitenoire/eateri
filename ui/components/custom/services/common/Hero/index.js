import { Flipped } from 'react-flip-toolkit'
import { Box, Container, Card, Grid } from '@theme-ui/components'
import { Heading, Text } from '~@core/typography'
import { Divider, Reveal, fadeIn } from '~@core/general'
import { BackLink } from '~@core/navigation'
import { WaveDecoration } from '~@core/other'

import styles from './style'

export default function Hero({ title, bg, color, text, svg, hideBackLink, sx, className = '', children, ...rest }) {
    return (
        <div sx={styles.wrapper} data-modal={hideBackLink ? '' : null}>
            <Container variant="loose" sx={styles.container}>
                {!hideBackLink && (
                    <BackLink href="/services" scroll={false} my={7}>
                        Back to all services
                    </BackLink>
                )}
                <Grid sx={styles.grid}>
                    <Reveal as="div" when cascade sx={styles.header}>
                        <Heading as="h1" variant="intro" title>
                            {`${title}.`}
                        </Heading>
                        <Divider bg="primary.base" width="20%" radius="default" height="0.5em" />
                    </Reveal>
                    <div sx={styles.cardWrap}>
                        <Flipped flipId={`sc-${title}-bg`}>
                            <Card variant="services" bg={bg} className={className} sx={styles.card}>
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
        </div>
    )
}
