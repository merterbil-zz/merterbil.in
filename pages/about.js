import { NextSeo } from 'next-seo'
import Layout from '../components/Layout'
import styled from 'styled-components'

const Title = styled.h1`
    font-size: 4rem;
    line-height: 4rem;
    color: ${({theme}) => theme.colors.buttonPrimary};
    @media (max-width: 576px) {
        font-size: 2.5rem;
        line-height: 2.5rem;
    }
`
const Text = styled.p`

`
const Section = styled.section`
    margin-top: auto;
    margin-bottom: auto;
    padding: 3rem;
    @media (max-width: 576px) {
        padding: 1.5rem;
    }
`

const Projects = () => (
    <>
        <NextSeo titleTemplate="%s | Mert Erbil" title="About me" description="You can get more information about me on this page." canonical="https://merterbil.in/about" />
        <Layout>
            <Section>
                <Title>About me</Title>
                <Text>I was born on 13th July, 1992 in Ankara, Turkey. I met the computer at the age of 10 and it became a part of my life in a short time. I spent a lot of time with computer games and this has brought many benefits such as improving my creativity and English.</Text>
                <Text>I had a successful student life. I was very interested in the math class. That's why I chose the Department of Mathematics and Computer Science at the university. My participation in this department in 2011 made me meet the web development and became my biggest passion in a short time.</Text>
                <Text>I always wanted to improve myself in web development, so I put the school on the 2nd plan and switched to Anadolu University Information and Instructional Technologies Instructor and I am still registered in this department. Because the Mathematics and Computer department did not meet my needs and I needed more time to develop myself in software. I never regretted this decision because I wouldn't feel free.</Text>
                <Text>If you are doing what you love, you are free.</Text>
            </Section>
        </Layout>
    </>
)

export default Projects