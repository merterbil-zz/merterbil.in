import Router from 'next/router'
import App from 'next/app'
import React from 'react'
import { ThemeProvider } from 'styled-components'
import Font from '../utils/font'
import { pageView } from '../utils/gtag'

const theme = {
    colors: {
        bgPrimary: '#181818',
        bgSecondary: '#1D1D1D',
        textPrimary: '#CAD8DD',
        buttonPrimary: '#08FDD8'
    },
}

Router.events.on('routeChangeComplete', url => pageView(url))

export default class MyApp extends App {

    componentDidMount() {
        Font()
    }

    render() {
        const { Component, pageProps } = this.props
        return (
            <ThemeProvider theme={theme}>
                <Component {...pageProps} />
            </ThemeProvider>
        )
    }

}