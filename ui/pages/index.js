import Head from 'next/head'
import React from 'react'
import { Box } from '@theme-ui/components'
import Carousel from '~components/display/Carousel'
import Card from '~components/display/Card'
import Hero from '~components/Hero'

import {
    mediaStyles,
    SSRStyleID,
    MediaContextProvider,
    onlyMatchListForUserAgent,
    Media,
    // SortedBreakpoints,
} from '~context/media'

const data = [1, 2, 3, 4, 5]

const Index = ({ userAgent }) => (
    <>
        <Head>
            {/* <style id="TEST-INDEX" type="text/css">
                {mediaStyles}
            </style> */}
            <style id={SSRStyleID} type="text/css" dangerouslySetInnerHTML={{ __html: mediaStyles }} />
        </Head>
        <MediaContextProvider onlyMatch={onlyMatchListForUserAgent(userAgent)}>
            <div id="home">
                <h1 className="sr-only">What Eateri offers</h1>
                {/* <Hero /> */}
                <h1>Hello CodeSandbox</h1>
                <p>Start editing to see some magic happe!</p>
                <div style={{ height: '100vh', background: 'white' }}>
                    <Hero items={data} />
                    {/* <Media lessThan="tabletS">
                        <Box p={2}>
                            <Carousel items={data} visible={3} animation="stack">
                                {d => <Card data={d} />}
                            </Carousel>
                        </Box>
                    </Media>
                    <Media greaterThanOrEqual="tabletS">
                        <Box p={2} style={{ width: '50vw', position: 'absolute', bottom: 0, left: 0 }}>
                            <Carousel items={data} visible={3} animation="slide" itemOffset={0}>
                                {d => <Card data={d} />}
                            </Carousel>
                        </Box>
                    </Media> */}

                    <Media greaterThanOrEqual="tabletS">Tablet above: from 505 up</Media>
                </div>
                <div id="about" style={{ height: '50vh', background: 'blue' }} />
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
