import { NextSeo } from 'next-seo'
import Layout from '../components/Layout'

const Projects = () => (
    <>
        <NextSeo titleTemplate="%s | Mert Erbil" title="My projects" description="You can see projects which i developed on this page." canonical="https://merterbil.in" />
        <Layout>
            <h1>Projects</h1>
        </Layout>
    </>
)

export default Projects