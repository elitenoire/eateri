import Head from 'next/head'
import Hero from '~@custom/home/Hero'
import Offers from '~@custom/home/Offers'
import About from '~@custom/home/About'
import Services from '~@custom/home/Services'
import Menu from '~@custom/home/Menu'
import Reviews from '~@custom/home/Reviews'
import Gallery from '~@custom/home/Gallery'
import Reservation from '~@custom/home/Reservation'
import Cta from '~@custom/home/Cta'
import { getLayout } from '~@common/layout/DefaultLayout'

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
                <Media greaterThanOrEqual="tabletS">
                    <Reviews />
                    {/* <Gallery /> */}
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
