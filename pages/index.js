import { NextSeo } from 'next-seo'
import Layout from '../components/Layout'
import styled from 'styled-components'

const Title = styled.h1`
    font-size: 4rem;
    margin: 0;
    padding: 0;
    line-height: 4rem;
`
const Text = styled.p`
    opacity: .75;
`
const Moon = styled.svg`
    width: 20rem;
    min-width: 15rem;
    height: 20rem;
    min-height: 15rem;
    margin: auto;
`
const Section = styled.section`
    margin-top: auto;
    margin-bottom: auto;
    padding: 3rem;
    &:last-child {
        text-align: center;
    }
`

const Index = () => (
    <>
        <NextSeo titleTemplate="%s | Mert Erbil" title="Welcome" description="Personal website for showing my skills and projects." canonical="https://merterbil.in" />
        <Layout>
            <Section>
                <Title>Hi,<br />i'm Mert,<br />web developer.</Title>
                <Text>Developing web based projects since 2011 with various technologies like Next.js, React.js, Polymer, .NET Core, .NET Framework, MariaDB, MSSQL, for frontend, backend, database design, console applications etc. Always improving myself and eager to learn new technologies.</Text>
            </Section>
            <Section>
                <Moon viewBox="0 0 512 512">
                    <circle fill="#cad8dd" cx="256" cy="256" r="217.6" />
                    <path fill="#bdcdd1" d="M374.48,73.52A216.51,216.51,0,0,1,409.6,192c0,120.18-97.42,217.6-217.6,217.6A216.5,216.5,0,0,1,73.52,374.48,217.36,217.36,0,0,0,256,473.6c120.18,0,217.6-97.42,217.6-217.6A217.36,217.36,0,0,0,374.48,73.52Z" />
                    <circle fill="#a1b9bf" cx="377.6" cy="275.2" r="44.8" />
                    <circle fill="#a1b9bf" cx="281.6" cy="140.8" r="38.4" />
                    <circle fill="#a1b9bf" cx="179.2" cy="332.8" r="38.4" />
                    <circle fill="#a1b9bf" cx="147.2" cy="249.6" r="19.2" />
                    <circle fill="#a1b9bf" cx="262.4" cy="339.2" r="19.2" />
                </Moon>
            </Section>
        </Layout>
    </>
)

export default Index