import Document, { Html, Head, Main, NextScript } from 'next/document'
import { ServerStyleSheet } from 'styled-components'
import { GA_TRACKING_ID } from 'utils/gtag'

class MyDocument extends Document {

    static async getInitialProps(ctx) {
        const sheet = new ServerStyleSheet()
        const originalRenderPage = ctx.renderPage

        try {
            ctx.renderPage = () => originalRenderPage({
                enhanceApp: App => props => sheet.collectStyles(<App {...props} />)
            })
            const initialProps = await Document.getInitialProps(ctx)
            return {
                ...initialProps,
                styles: (
                    <>
                        {initialProps.styles}
                        {sheet.getStyleElement()}
                    </>
                )
            }
        } finally {
            sheet.seal()
        }
    }

    render() {
        return (
            <Html lang="en">
                <Head>
                    <meta name="application-name" content="merterbil.in" />
                    <meta name="apple-mobile-web-app-capable" content="yes" />
                    <meta name="apple-mobile-web-app-status-bar-style" content="default" />
                    <meta name="apple-mobile-web-app-title" content="merterbil.in" />
                    <meta name="description" content="Personal website for showing my skills and projects." />
                    <meta name="format-detection" content="telephone=no" />
                    <meta name="mobile-web-app-capable" content="yes" />
                    <meta name="theme-color" content="#181818" />
                    <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
                    <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
                    <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
                    <link rel="shortcut icon" href="/favicon.ico" />
                    <link rel="manifest" href="/manifest.json" />
                    <meta name="google-site-verification" content="EJ7vzGguMODv-G2NknwvnclGho8dJgylbcbE9RuvnfM" />
                    <link rel="preconnect" href="https://www.google-analytics.com" />
                    <script async defer src={`https://www.googletagmanager.com/gtag/js?id=${GA_TRACKING_ID}`} />
                    <script dangerouslySetInnerHTML={{ __html: `window.dataLayer = window.dataLayer || [];function gtag(){dataLayer.push(arguments);}gtag('js', new Date());gtag('config', '${GA_TRACKING_ID}', {page_path: window.location.pathname,});` }} />
                </Head>
                <body>
                    <Main />
                    <NextScript />
                </body>
            </Html>
        )
    }

}

export default MyDocument