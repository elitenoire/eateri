/** @jsx jsx */
import { jsx } from '@theme-ui/core'
import Head from 'next/head'
import Hero from '~/pages/home/Hero'
import Offers from '~/pages/home/Offers'
import About from '~/pages/home/About'
import Services from '~/pages/home/Services'
import Menu from '~/pages/home/Menu'
import Reviews from '~/pages/home/Reviews'
import Cta from '~/pages/home/Cta'
import Reservation from '~/pages/home/Reservation'

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
            <h1 className="visually-hidden">What Eateri offers</h1>
            <Hero />
            <Offers />
            <Media greaterThanOrEqual="tabletS">
                <About />
                <Services />
            </Media>
            <Menu />
            <Media greaterThanOrEqual="tabletS">
                <Reviews />
            </Media>
            <Reservation />
            <Media greaterThanOrEqual="tabletS">
                <Cta />
            </Media>
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
