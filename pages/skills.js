import { NextSeo } from 'next-seo'
import Link from 'next/link'
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

const Skills = () => (
    <>
        <NextSeo titleTemplate="%s | Mert Erbil" title="Skills & Experience" description="You can see what i use for developing on this page." canonical="https://merterbil.in/skills" />
        <Section>
            <Title>Skills & Experience</Title>
            <Text>I'm intrested in full-stack web development which means frontend (client side), backend (server side) and database management.</Text>
            <Text>Using various technologies like Next.js, React.js, HTML5, CSS3, JavaScript, Node.js, .NET Core, .NET Framework, MSSql, MariaDB.</Text>
            <Text>Developed e-commerce websites and admin panels which includes core features of e-commerce such as user management, stock management, content management, design and optimization for performance, database design and management, etc. You can take a look to my work <Link href="/work"><a>here.</a></Link></Text>
            <Text>I'm constantly researching and developing, improving my skills and adapting new technologies for web development.</Text>
        </Section>
    </>
)

export default Skills