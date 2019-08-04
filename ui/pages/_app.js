import App, { Container } from 'next/app'
import Head from 'next/head'
import React from 'react'
import { ThemeProvider } from 'styled-components'
import MenuProvider from '~context/menu'
import theme from '~theme'
import GlobalStyle from '~theme/global'
import Layout from '~components/Layout'

// Fonts
// import 'typeface-comfortaa'
// import 'typeface-overpass'

export default class MyApp extends App {
    static async getInitialProps({ Component, ctx }) {
        let pageProps = {}

        if (Component.getInitialProps) {
            pageProps = await Component.getInitialProps(ctx)
        }

        return { pageProps }
    }

    render() {
        const { Component, pageProps } = this.props
        return (
            <Container>
                <Head>
                    <title key="title">Eateri</title>
                    <meta name="viewport" content="initial-scale=1.0, width=device-width" key="viewport" />
                    <meta httpEquiv="X-UA-Compatible" content="ie=edge" />
                    <meta name="description" content="Fine dining anyhow and anywhere" key="description" />
                </Head>
                <ThemeProvider theme={theme}>
                    <MenuProvider>
                        <GlobalStyle />
                        <Layout>
                            <Component {...pageProps} />
                        </Layout>
                    </MenuProvider>
                </ThemeProvider>
            </Container>
        )
    }
}
