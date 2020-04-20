import Head from 'next/head'
import React from 'react'
import { Box, Text, Heading, Flex, Image, Card } from '@theme-ui/components'
import Button from '~@/general/Button'
import Hero from '~@/other/Hero'

import dineU from '~/public/catering.svg'

import {
    mediaStyles,
    SSRStyleID,
    MediaContextProvider,
    onlyMatchListForUserAgent,
    // SortedBreakpoints,
} from '~/context/media'

const Index = ({ userAgent }) => (
    <>
        <Head>
            <style id={SSRStyleID} type="text/css" dangerouslySetInnerHTML={{ __html: mediaStyles }} />
        </Head>
        <MediaContextProvider onlyMatch={onlyMatchListForUserAgent(userAgent)}>
            <div id="home">
                <h1 className="visually-hidden">What Eateri offers</h1>
                <Hero />
                <div id="about" style={{ height: '100vh', background: 'white', borderRadius: '40px' }}>
                    <Box p={5}>
                        <Heading as="h2">Our Services</Heading>
                        <Text sx={{ color: 'textLight' }}>
                            Whether you're planning the party of the year, a cocktail masterclass or a simple but
                            stylish dinner with friends, you're in expert hands.
                        </Text>
                        <Flex>
                            <Box>
                                <Button type="pale">Dine</Button>
                            </Box>
                            <Flex sx={{ flex: 1, justifyContent: 'space-around' }}>
                                <Card sx={{ width: '25%', padding: 1, textAlign: 'center' }}>
                                    <Image src={dineU} />
                                    <Heading as="h3" sx={{ margin: '0.25em auto', fontSize: '1.3em' }}>
                                        Dine In
                                    </Heading>
                                    <Text sx={{ color: 'textLighter' }}>
                                        The atmosphere is very cosy for you to eat and enjoy your meals alone or with
                                        friends.
                                    </Text>
                                </Card>
                                <Card sx={{ width: '25%', padding: 1, textAlign: 'center' }}>
                                    <Image src={dineU} />
                                    <Heading
                                        as="h3"
                                        sx={{ margin: '0.25em auto', fontSize: '1.3em', color: 'textLight' }}
                                    >
                                        Takeaway
                                    </Heading>
                                    <Text sx={{ color: 'textLighter' }}>
                                        Grab a meal on the go if you are in a rush or you rather eat outside.
                                    </Text>
                                </Card>
                            </Flex>
                        </Flex>
                    </Box>
                </div>
                <div id="reservations" style={{ height: '50vh', background: 'green' }} />
                <div style={{ height: '20vh', background: 'red' }} />
            </div>
        </MediaContextProvider>
    </>
)

Index.getInitialProps = async ({ req }) => {
    if (req) {
        // console.log({ req })
        // return { userAgent: req.header('User-Agent') }
        return { userAgent: req.headers['user-agent'] }
    }
}

export default Index
