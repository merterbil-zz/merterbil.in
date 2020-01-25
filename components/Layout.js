import Head from 'next/head'

const Layout = ({ children, title }) => (
    <>
        <Head>
            <meta charSet="utf-8" />
            <meta name="viewport" content="initial-scale=1.0, width=device-width" />
            <title>{title}</title>
        </Head>
        <div className="app">
            <header></header>
            <main>{children}</main>
            <footer></footer>
        </div>
    </>
)

export default Layout