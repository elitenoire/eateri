/** @jsx jsx */
import { jsx } from '@theme-ui/core'
import Head from 'next/head'
import { useRouter } from 'next/router'
import { useState, useEffect } from 'react'
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
            <Head>
                <title>😞 404: Not Found | Eateri</title>
                <meta name="description" content="" />
                <meta name="robots" content="noindex" />
                {/* <link rel="canonical" href={`${''}/404`} /> */}
            </Head>
            <Container as="section" variant="loose">
                <Container sx={styles.container}>
                    <Reveal motion={fadeIn} duration={800}>
                        <div sx={styles.doodle}>{doodle}</div>
                    </Reveal>
                    <div sx={styles.content}>
                        <Heading variant="h3" mb={1} color="red" weight="normal">
                            404 😞
                        </Heading>
                        <Heading as="p" variant="h1" title>
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

    const goBack = () => router.replace('/')

    useEffect(() => {
        const path = router.asPath.toLowerCase()
        const pathMatch = path.match(/\/services\/[^\/]+$/)
        const isServicesScreen = !!pathMatch
        setIsServices(isServicesScreen)
    }, [router.asPath])

    if (isServices) {
        return (
            <Error title="Missing In Service" doodle={<ErrorManDog />}>
                <Text size={3} color="textLight">
                    We currently do not support this service.
                </Text>
                <Text size={3} color="textLight">
                    Let's try something else:
                </Text>
                <nav sx={styles.links}>
                    • <a>Dining & Buffet</a> • <a>Takeouts</a> • <a>Delivery</a>
                    <br />• <a>Reservation</a> • <a>Catering</a>
                </nav>
                <Button mt={4} ml={0}>
                    See Our Services
                </Button>
                <Button size="sm" color="secondary" brand="outline">
                    Go Home
                </Button>
            </Error>
        )
    }

    return (
        <Error title="Page Not Found" doodle={<ErrorFallCoffee />}>
            <Text size={3} color="textLight">
                The page you are looking for can not be found.
            </Text>
            <Text size={3} color="textLight">
                Not to worry, we have coffee!
            </Text>
            <Button mt={6} ml={0}>
                Take Me Home
            </Button>
        </Error>
    )
}
