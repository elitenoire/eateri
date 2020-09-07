import App from 'next/app'
// import Router from 'next/router'
import Head from 'next/head'
import React from 'react'
import { ThemeProvider } from '@theme-ui/core'
import { ColorModeProvider } from '@theme-ui/color-modes'
import whyDidYouRender from '@welldone-software/why-did-you-render/dist/no-classes-transpile/umd/whyDidYouRender.min.js'
import MenuProvider from '~/context/menu'
import theme from '~/theme'
import GlobalStyle from '~/theme/global'
import MainLayout from '~@/layout/Main'

// Vivify css animations
import '~/css/vivify-lite.css'

// Custom fonts
import 'fontsource-sen/latin.css'
import 'fontsource-manrope/latin.css'

// For debugging reasons for re-rendering components we use whyDidYouRender in dev mode
if (process.env.NODE_ENV !== 'production' && typeof window !== 'undefined') {
    whyDidYouRender(React)
}

export default class MyApp extends App {
    render() {
        const { Component, pageProps } = this.props

        // const {
        //     Component,
        //     pageProps,
        //     router: { asPath, route },
        // } = this.props

        // Next.js currently does not allow trailing slash in a route.
        // This is a client side redirect in case trailing slash occurs.
        // See https://github.com/zeit/next.js/issues/5214#issuecomment-575612685

        // if (pageProps.statusCode === 404 && asPath && asPath.length > 1) {
        //     const [path, query = ''] = asPath.split('?')
        //     if (path.endsWith('/') && path.length > 1) {
        //         const asPathWithoutTrailingSlash = path.replace(/\/*$/gim, '') + (query ? `?${query}` : '')
        //         if (typeof window !== 'undefined') {
        //             Router.replace(asPathWithoutTrailingSlash, undefined, { shallow: true })
        //             return null
        //         }
        //     }
        // }

        return (
            <>
                <Head>
                    <meta charSet="UTF-8" />
                    <title key="title">The Messi of Great Food - Eateri Restaurant</title>
                    <meta name="viewport" content="initial-scale=1.0, width=device-width" key="viewport" />
                    <meta httpEquiv="X-UA-Compatible" content="ie=edge" />
                    <meta
                        name="description"
                        content="Dine in to sample our tasty dishes, or have it delivered to you. Make table reservations for free."
                        key="description"
                    />
                </Head>
                <ThemeProvider theme={theme}>
                    <MenuProvider>
                        <ColorModeProvider>
                            <GlobalStyle />
                            <MainLayout>
                                <Component {...pageProps} />
                            </MainLayout>
                        </ColorModeProvider>
                    </MenuProvider>
                </ThemeProvider>
            </>
        )
    }
}
