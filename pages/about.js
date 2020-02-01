import { NextSeo } from 'next-seo'
import Layout from '../components/Layout'

const About = () => (
    <>
        <NextSeo titleTemplate="%s | Mert Erbil" title="About me" description="Personal website for showing my skills and projects." canonical="https://merterbil.in" />
        <Layout>
            <h1>About</h1>
        </Layout>
    </>
)

export default About