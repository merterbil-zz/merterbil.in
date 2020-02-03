import { NextSeo } from 'next-seo'
import Layout from '../components/Layout'
import styled from 'styled-components'

const Title = styled.h1`
    font-size: 4rem;
    line-height: 4rem;
    color: ${({ theme }) => theme.colors.buttonPrimary};
    @media (max-width: 576px) {
        font-size: 2.5rem;
        line-height: 2.5rem;
    }
`
const Text = styled.p`
    & > a {
        color: ${({ theme }) => theme.colors.buttonPrimary};
    }
`
const Section = styled.section`
    margin-top: auto;
    margin-bottom: auto;
    padding: 3rem;
    @media (max-width: 576px) {
        padding: 1.5rem;
    }
`

const Work = () => (
    <>
        <NextSeo titleTemplate="%s | Mert Erbil" title="My work" description="You can see my work on this page." canonical="https://merterbil.in/work" />
        <Layout>
            <Section>
                <Title>My work</Title>
                <Text>Page in progress...</Text>
            </Section>
        </Layout>
    </>
)

export default Work