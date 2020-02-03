import { withRouter } from 'next/router'
import Link from 'next/link'
import styled, { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
    html,
    body {
        margin: 0;
        padding: 0;
        font-family: 'Titillium Web', 'Halvetica', sans-serif;
        background-color: ${({ theme }) => theme.colors.secondary};
        color: ${({ theme }) => theme.colors.textPrimary};
        font-size: 16px!important;
    }

    *,
    :after,
    :before {
        box-sizing: border-box;
        text-size-adjust: 100%;
        outline: none;
    }

    img,
    svg {
        pointer-events: none;
    }

    a {
        text-decoration: none;
        color: inherit;
    }

    [hidden] {
        display: none;
        opacity: 0;
    }
`
const App = styled.div`
    width: 100%;
    height: 100%;
    display: grid;
    grid-template-columns: 4em 1fr;
    grid-auto-rows: 100vh;
`
const SideBar = styled.div`
    background-color: ${({ theme }) => theme.colors.primary};
    display: grid;
    grid-template-rows: 4rem 1fr 9rem;
`
const Avatar = styled.img`
    object-fit: cover;
    object-position: center center;
    width: 3rem;
    height: 3rem;
    border-radius: 50%;
    margin: .5rem;
`
const NavLink = styled.a`
    display: grid;
    text-align: center;
    opacity: .5;
    transition: all .25s;
    &:hover,
    &.active {
        opacity: 1;
        background-color: ${({ theme }) => theme.colors.secondary};
    }
`
const Icon = styled.svg`
    margin: auto;
    width: 1.75rem;
    height: 1.75rem;
    fill: ${({ theme }) => theme.colors.textPrimary};
    &.social {
        width: 1rem;
        height: 1rem;
    }
`
const SiteNav = styled.nav`
    display: grid;
    grid-template-columns: 1fr;
    grid-auto-rows: 4rem;
    margin-top: auto;
    margin-bottom: auto;
`
const SocialNav = styled.nav`
    display: grid;
    grid-template-columns: 4rem;
    grid-auto-rows: 3rem;
`
const Page = styled.main`
    display: grid;
    grid-template-columns: 50% 50%;
    grid-auto-rows: 1fr;
    @media (max-width: 1100px) {
        grid-template-columns: 1fr;
    }
`

const Layout = ({ children, router }) => (
    <>
        <GlobalStyle />
        <App>
            <SideBar>
                <Avatar src="/img/mert_erbil_avatar.jpg" alt="Mert Erbil" />
                <SiteNav>
                    <Link href="/" passHref>
                        <NavLink className={router.pathname === '/' ? 'active' : null} title="Home" aria-label="Home">
                            <Icon viewBox="0 0 24 24">
                                <path d="M10,20V14H14V20H19V12H22L12,3L2,12H5V20H10Z" />
                            </Icon>
                        </NavLink>
                    </Link>
                    <Link href="/about" passHref>
                        <NavLink className={router.pathname === '/about' ? 'active' : null} title="About me" aria-label="About me">
                            <Icon viewBox="0 0 24 24">
                                <path d="M12,4A4,4 0 0,1 16,8A4,4 0 0,1 12,12A4,4 0 0,1 8,8A4,4 0 0,1 12,4M12,6A2,2 0 0,0 10,8A2,2 0 0,0 12,10A2,2 0 0,0 14,8A2,2 0 0,0 12,6M12,13C14.67,13 20,14.33 20,17V20H4V17C4,14.33 9.33,13 12,13M12,14.9C9.03,14.9 5.9,16.36 5.9,17V18.1H18.1V17C18.1,16.36 14.97,14.9 12,14.9Z" />
                            </Icon>
                        </NavLink>
                    </Link>
                    <Link href="/projects" passHref>
                        <NavLink className={router.pathname === '/projects' ? 'active' : null} title="Work" aria-label="Work">
                            <Icon viewBox="0 0 24 24">
                                <path d="M8,3A2,2 0 0,0 6,5V9A2,2 0 0,1 4,11H3V13H4A2,2 0 0,1 6,15V19A2,2 0 0,0 8,21H10V19H8V14A2,2 0 0,0 6,12A2,2 0 0,0 8,10V5H10V3M16,3A2,2 0 0,1 18,5V9A2,2 0 0,0 20,11H21V13H20A2,2 0 0,0 18,15V19A2,2 0 0,1 16,21H14V19H16V14A2,2 0 0,1 18,12A2,2 0 0,1 16,10V5H14V3H16Z" />
                            </Icon>
                        </NavLink>
                    </Link>
                </SiteNav>
                <SocialNav>
                    <NavLink href="mailto:mertolerbil@gmail.com" target="_blank" rel="noopener" title="E-mail" aria-label="E-mail Mert Erbil">
                        <Icon viewBox="0 0 24 24" className="social">
                            <path d="M20,8L12,13L4,8V6L12,11L20,6M20,4H4C2.89,4 2,4.89 2,6V18A2,2 0 0,0 4,20H20A2,2 0 0,0 22,18V6C22,4.89 21.1,4 20,4Z" />
                        </Icon>
                    </NavLink>
                    <NavLink href="https://github.com/merterbil/" target="_blank" rel="noopener" title="Github" aria-label="Github Mert Erbil">
                        <Icon viewBox="0 0 24 24" className="social">
                            <path d="M12,2A10,10 0 0,0 2,12C2,16.42 4.87,20.17 8.84,21.5C9.34,21.58 9.5,21.27 9.5,21C9.5,20.77 9.5,20.14 9.5,19.31C6.73,19.91 6.14,17.97 6.14,17.97C5.68,16.81 5.03,16.5 5.03,16.5C4.12,15.88 5.1,15.9 5.1,15.9C6.1,15.97 6.63,16.93 6.63,16.93C7.5,18.45 8.97,18 9.54,17.76C9.63,17.11 9.89,16.67 10.17,16.42C7.95,16.17 5.62,15.31 5.62,11.5C5.62,10.39 6,9.5 6.65,8.79C6.55,8.54 6.2,7.5 6.75,6.15C6.75,6.15 7.59,5.88 9.5,7.17C10.29,6.95 11.15,6.84 12,6.84C12.85,6.84 13.71,6.95 14.5,7.17C16.41,5.88 17.25,6.15 17.25,6.15C17.8,7.5 17.45,8.54 17.35,8.79C18,9.5 18.38,10.39 18.38,11.5C18.38,15.32 16.04,16.16 13.81,16.41C14.17,16.72 14.5,17.33 14.5,18.26C14.5,19.6 14.5,20.68 14.5,21C14.5,21.27 14.66,21.59 15.17,21.5C19.14,20.16 22,16.42 22,12A10,10 0 0,0 12,2Z" />
                        </Icon>
                    </NavLink>
                    <NavLink href="https://www.linkedin.com/in/mert-erbil/" target="_blank" rel="noopener" title="LinkedIn" aria-label="LinkedIn Mert Erbil">
                        <Icon viewBox="0 0 24 24" className="social">
                            <path d="M21,21H17V14.25C17,13.19 15.81,12.31 14.75,12.31C13.69,12.31 13,13.19 13,14.25V21H9V9H13V11C13.66,9.93 15.36,9.24 16.5,9.24C19,9.24 21,11.28 21,13.75V21M7,21H3V9H7V21M5,3A2,2 0 0,1 7,5A2,2 0 0,1 5,7A2,2 0 0,1 3,5A2,2 0 0,1 5,3Z" />
                        </Icon>
                    </NavLink>
                </SocialNav>
            </SideBar>
            <Page>{children}</Page>
        </App>
    </>
)

export default withRouter(Layout)