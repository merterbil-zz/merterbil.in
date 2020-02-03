import App from 'next/app'
import React from 'react'
import { ThemeProvider } from 'styled-components'

const theme = {
    colors: {
        bgPrimary: '#181818',
        bgSecondary: '#1D1D1D',
        textPrimary: '#CAD8DD',
        buttonPrimary: '#08FDD8'
    },
}

export default class MyApp extends App {
    render() {
        const { Component, pageProps } = this.props
        return (
            <ThemeProvider theme={theme}>
                <Component {...pageProps} />
            </ThemeProvider>
        )
    }
}