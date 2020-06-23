import { useEffect } from 'react'
import Router from 'next/router'
import { ThemeProvider } from 'styled-components'
import { pageView } from 'utils/gtag'
import Layout from 'components/Layout'

const theme = {
    colors: {
        bgPrimary: '#181818',
        bgSecondary: '#1D1D1D',
        textPrimary: '#CAD8DD',
        buttonPrimary: '#08FDD8'
    },
}

const MyApp = ({ Component, pageProps }) => {
    useEffect(() => {
        if (process.env.NODE_ENV !== 'production') return
        const pageViewEvent = url => pageView(url)
        Router.events.on('routeChangeComplete', pageViewEvent)
        return () => Router.events.off('routeChangeComplete', pageViewEvent)
    }, [])

    return <ThemeProvider theme={theme}>
        <Layout>
            <Component {...pageProps} />
        </Layout>
    </ThemeProvider>
}

export default MyApp