import { NextSeo } from 'next-seo'
import Layout from '../components/Layout'

const Projects = () => (
    <>
        <NextSeo titleTemplate="%s | Mert Erbil" title="My projects" description="Personal website for showing my skills and projects." canonical="https://merterbil.in" />
        <Layout>
            <h1>Projects</h1>
        </Layout>
    </>
)

export default Projects