/** @jsx jsx */
import { jsx } from '@theme-ui/core'
import Head from 'next/head'
import Hero from '~/pages/home/Hero'
import About from '~/pages/home/About'
import Services from '~/pages/home/Services'

import {
    Media,
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
                <Media greaterThanOrEqual="tabletS">
                    <About />
                    <Services />
                </Media>
                <div id="about" style={{ height: '100vh', background: 'white', borderRadius: '40px' }} />
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
