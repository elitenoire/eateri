/** @jsx jsx */
import { jsx } from '@theme-ui/core'
import Head from 'next/head'
import Hero from '~/pages/home/Hero'
import Offers from '~/pages/home/Offers'
import About from '~/pages/home/About'
import Services from '~/pages/home/Services'
import Menu from '~/pages/home/Menu'
import Reviews from '~/pages/home/Reviews'
import Gallery from '~/pages/home/Gallery'
import Reservation from '~/pages/home/Reservation'
import Cta from '~/pages/home/Cta'
import { getLayout } from '~@/layout/DefaultLayout'

import styles from '~/pages/home/style'

import {
    Media,
    mediaStyles,
    SSRStyleID,
    MediaContextProvider,
    onlyMatchListForUserAgent,
    // SortedBreakpoints,
} from '~/context/media'

const fresnelStyles = { __html: mediaStyles }

export default function Home({ userAgent }) {
    return (
        <>
            <Head>
                <style id={SSRStyleID} type="text/css" dangerouslySetInnerHTML={fresnelStyles} />
            </Head>
            <MediaContextProvider>
                <h1 className="visually-hidden">Welcome to Eateri Restaurant & Cafe Bar.</h1>
                <Hero />
                <Offers />
                <Media greaterThanOrEqual="tabletS">
                    <About />
                    <Services />
                </Media>
                <Menu />
                <Media greaterThanOrEqual="tabletS" sx={styles.radialCover}>
                    <Reviews />
                    <Gallery />
                </Media>
                <Reservation />
                <Media greaterThanOrEqual="tabletS">
                    <Cta />
                </Media>
            </MediaContextProvider>
        </>
    )
}

Home.getLayout = page => getLayout(page, { hasMap: true })

export const getServerSideProps = async ({ req }) => ({
    props: { userAgent: req ? req.headers['user-agent'] || '' : navigator.userAgent },
})
