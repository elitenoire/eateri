import { useState, useEffect } from 'react'
import { useRouter } from 'next/router'
import { NextSeo } from 'next-seo'
import { Container } from '@theme-ui/components'
import { Reveal, fadeIn } from '~@core/general'
import { Heading, Text } from '~@core/typography'
import { LinkButton, Link } from '~@core/navigation'

import styles from '~/styles/404'

import { ReactComponent as ErrorManDog } from '~/public/inlineSvg/error-man-dog.svg'
import { ReactComponent as ErrorFallCoffee } from '~/public/inlineSvg/error-fall-coffee.svg'

function Error({ doodle, title, children }) {
    return (
        <>
            <NextSeo title="😞 404: Not Found" noindex />
            <Container as="section" variant="loose">
                <Container sx={styles.container}>
                    <Reveal motion={fadeIn} duration={800}>
                        <div sx={styles.doodle}>{doodle}</div>
                    </Reveal>
                    <div sx={styles.content}>
                        <Heading as="h1" variant="h3" mb={1} color="red" weight="normal">
                            404 😞
                        </Heading>
                        <Text size={10} mb={2} title>
                            {title}
                        </Text>
                        {children}
                    </div>
                </Container>
            </Container>
        </>
    )
}

export default function Error404() {
    const [isServices, setIsServices] = useState(false)

    const router = useRouter()

    useEffect(() => {
        const path = router.asPath.toLowerCase()
        const pathMatch = path.match(/\/services\/[^/]+\/*$/)
        const isServicesScreen = !!pathMatch
        setIsServices(isServicesScreen)
    }, [router.asPath])

    if (isServices) {
        return (
            <Error title="Oh Hey!" doodle={<ErrorManDog />}>
                <Text size={3} color="textFade">
                    We currently do not offer this service.
                </Text>
                <Text size={3} color="textFade">
                    Let's try something else:
                </Text>
                <nav sx={styles.links}>
                    • <Link href="/services/dining">Dining & Buffet</Link> •{' '}
                    <Link href="/services/takeaway">Click + Collect</Link> •{' '}
                    <Link href="/services/delivery">Delivery</Link>
                    <br />• <Link href="/reserve">Reservation</Link> • <Link href="/services/catering">Catering</Link>
                </nav>
                <LinkButton href="/services" mt={4} mr={4} mb={3} link>
                    See Our Services
                </LinkButton>
                <LinkButton href="/" color="secondary" brand="outline">
                    Go Home
                </LinkButton>
            </Error>
        )
    }

    return (
        <Error title="Whoops!" doodle={<ErrorFallCoffee />}>
            <Text size={3} color="textFade">
                We looked everywhere for that page.
            </Text>
            <Text size={3} color="textFade">
                Not to worry, we have coffee!
            </Text>
            <LinkButton href="/" mt={6}>
                Take Me Home
            </LinkButton>
        </Error>
    )
}
