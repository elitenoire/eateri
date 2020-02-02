import App from 'next/app'
import Head from 'next/head'
import React from 'react'
import { ThemeProvider } from '@theme-ui/core'
import { ColorModeProvider } from '@theme-ui/color-modes'
import MenuProvider from '~context/menu'
import theme from '~theme'
import GlobalStyle from '~theme/global'
import MainLayout from '~components/layout/Main'

// Custom fonts
import 'typeface-heebo'
import '~public/fonts/adca/index.css'

// For debugging reasons for re-rendering components we use whyDidYouRender in dev mode
if (process.env.NODE_ENV !== 'production' && typeof window !== 'undefined') {
    const whyDidYouRender = require('@welldone-software/why-did-you-render/dist/no-classes-transpile/umd/whyDidYouRender.min.js')
    whyDidYouRender(React)
}

export default class MyApp extends App {
    // commented to remove auto prerendering warning as per doc example
    // static async getInitialProps({ Component, ctx }) {
    //     let pageProps = {}

    //     if (Component.getInitialProps) {
    //         pageProps = await Component.getInitialProps(ctx)
    //     }

    //     return { pageProps }
    // }

    render() {
        const { Component, pageProps } = this.props
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
