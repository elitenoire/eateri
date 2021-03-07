/** @jsx jsx */
import { jsx } from '@theme-ui/core'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { useState, useEffect } from 'react'
import { NextSeo } from 'next-seo'
import { Container } from '@theme-ui/components'
import { Button } from '~@/general'
import { Reveal, fadeIn } from '~@/general/Reveal'
import { Heading, Text } from '~@/typography'

import styles from './style'

import ErrorManDog from '~/public/inlineSvg/error-man-dog.svg'
import ErrorFallCoffee from '~/public/inlineSvg/error-fall-coffee.svg'

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
                        <Heading as="p" size="3.5em" mb={2} title>
                            {title}
                        </Heading>
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
        const pathMatch = path.match(/\/services\/[^\/]+$/)
        const isServicesScreen = !!pathMatch
        setIsServices(isServicesScreen)
    }, [router.asPath])

    if (isServices) {
        return (
            <Error title="Oh Hey!" doodle={<ErrorManDog />}>
                <Text size={3} color="textLight">
                    We currently do not offer this service.
                </Text>
                <Text size={3} color="textLight">
                    Let's try something else:
                </Text>
                <nav sx={styles.links}>
                    • <a>Dining & Buffet</a> • <a>Takeouts</a> • <a>Delivery</a>
                    <br />• <a>Reservation</a> • <a>Catering</a>
                </nav>
                <Link href="/services" passHref>
                    <Button mt={4} ml={0} link>
                        See Our Services
                    </Button>
                </Link>
                <Link href="/" passHref>
                    <Button size="sm" color="secondary" brand="outline" link>
                        Go Home
                    </Button>
                </Link>
            </Error>
        )
    }

    return (
        <Error title="Whoops!" doodle={<ErrorFallCoffee />}>
            <Text size={3} color="textLight">
                We looked everywhere for that page.
            </Text>
            <Text size={3} color="textLight">
                Not to worry, we have coffee!
            </Text>
            <Link href="/" passHref>
                <Button mt={6} ml={0} link>
                    Take Me Home
                </Button>
            </Link>
        </Error>
    )
}
