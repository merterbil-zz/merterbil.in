import { NextSeo } from 'next-seo'
import Layout from '../components/Layout'
import Project from '../components/Project'

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
const Section = styled.section`
    margin-top: auto;
    margin-bottom: auto;
    padding: 3rem;
    @media (max-width: 576px) {
        padding: 1.5rem;
    }
`

const works = [{
    title: 'durmaplay.com',
    description: ''
}, {
    title: 'sanalsaray.com',
    description: ''
}, {
    title: 'durmapay.com',
    description: ''
}, {
    title: 'Live chat app',
    description: ''
}, {
    title: 'soydanhaliyikama.com',
    description: ''
}, {
    title: 'kaldirirmi.com',
    description: ''
}, {
    title: 'ERP system for Çekiçler Seramik',
    description: ''
}, {
    title: 'vekfin.com',
    description: ''
}, {
    title: 'Facebook app for Anka Seramik',
    description: ''
}]

const Work = () => (
    <>
        <NextSeo titleTemplate="%s | Mert Erbil" title="My work" description="You can see my work on this page." canonical="https://merterbil.in/work" />
        <Layout>
            <Section>
                <Title>My work</Title>
                {works.map((item, index) => <Project key={index} work={item} />)}
            </Section>
        </Layout>
    </>
)

export default Work