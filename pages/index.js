import { NextSeo } from 'next-seo'
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
    font-size: .9rem;
    margin-bottom: 3rem;
`
const Contact = styled.a`
    display: inline-block;
    color: ${({ theme }) => theme.colors.buttonPrimary};
    background-color: ${({ theme }) => theme.colors.bgPrimary};
    padding: .5rem 1rem;
    border: 1px solid ${({ theme }) => theme.colors.buttonPrimary};
    transition: background-color .25s;
    font-weight: bold;
    &:hover {
        color: ${({ theme }) => theme.colors.bgPrimary};
        background-color: ${({ theme }) => theme.colors.buttonPrimary};
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

const Index = () => <>
    <NextSeo titleTemplate="%s | Mert Erbil" title="Welcome" description="Personal website for showing my skills and projects." canonical="https://merterbil.in" />
    <Section>
        <Title>Hi,<br />I'm Mert,<br />full-stack web developer.</Title>
        <Text>Developing web based projects since 2011 with various technologies. Always improving myself and eager to learn.</Text>
        <Contact href="mailto:mertolerbil@gmail.com" target="_blank" rel="noopener" aria-label="Contact me">Contact me</Contact>
    </Section>
</>

export default Index