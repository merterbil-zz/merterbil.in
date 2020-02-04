import { withRouter } from 'next/router'
import Link from 'next/link'
import styled, { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
    html,
    body {
        margin: 0;
        padding: 0;
        font-family: 'Halvetica', 'Arial', sans-serif;
        background-color: ${({ theme }) => theme.colors.bgSecondary};
        color: ${({ theme }) => theme.colors.textPrimary};
        font-size: 16px!important;
    }

    .montserrat,
    .montserrat body {
        font-family: Montserrat, sans-serif;
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
`
const App = styled.div`
    display: grid;
    grid-template-columns: 4em 1fr;
    grid-auto-rows: 100vh;
`
const SideBar = styled.div`
    background-color: ${({ theme }) => theme.colors.bgPrimary};
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
    &:hover > svg,
    &.active,
    &.active > svg {
        opacity: 1;
        background-color: ${({ theme }) => theme.colors.bgSecondary};
        fill: ${({ theme }) => theme.colors.buttonPrimary};
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
const Moon = styled.svg`
    width: 4rem;
    height: 4rem;
    padding: .5rem;
`
const Page = styled.main`
    display: grid;
    grid-template-columns: 70%;
    overflow: auto;
    @media (max-width: 1100px) {
        grid-template-columns: 1fr;
    }
`

const Layout = ({ children, router }) => (
    <>
        <GlobalStyle />
        <App>
            <SideBar>
                <Moon viewBox="0 0 512 512">
                    <circle fill="#cad8dd" cx="256" cy="256" r="217.6" />
                    <path fill="#bdcdd1" d="M374.48,73.52A216.51,216.51,0,0,1,409.6,192c0,120.18-97.42,217.6-217.6,217.6A216.5,216.5,0,0,1,73.52,374.48,217.36,217.36,0,0,0,256,473.6c120.18,0,217.6-97.42,217.6-217.6A217.36,217.36,0,0,0,374.48,73.52Z" />
                    <circle fill="#a1b9bf" cx="377.6" cy="275.2" r="44.8" />
                    <circle fill="#a1b9bf" cx="281.6" cy="140.8" r="38.4" />
                    <circle fill="#a1b9bf" cx="179.2" cy="332.8" r="38.4" />
                    <circle fill="#a1b9bf" cx="147.2" cy="249.6" r="19.2" />
                    <circle fill="#a1b9bf" cx="262.4" cy="339.2" r="19.2" />
                </Moon>
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
                    <Link href="/skills" passHref>
                        <NavLink className={router.pathname === '/skills' ? 'active' : null} title="My skills" aria-label="My skills">
                            <Icon viewBox="0 0 24 24">
                                <path d="M12,8A4,4 0 0,1 16,12A4,4 0 0,1 12,16A4,4 0 0,1 8,12A4,4 0 0,1 12,8M12,10A2,2 0 0,0 10,12A2,2 0 0,0 12,14A2,2 0 0,0 14,12A2,2 0 0,0 12,10M10,22C9.75,22 9.54,21.82 9.5,21.58L9.13,18.93C8.5,18.68 7.96,18.34 7.44,17.94L4.95,18.95C4.73,19.03 4.46,18.95 4.34,18.73L2.34,15.27C2.21,15.05 2.27,14.78 2.46,14.63L4.57,12.97L4.5,12L4.57,11L2.46,9.37C2.27,9.22 2.21,8.95 2.34,8.73L4.34,5.27C4.46,5.05 4.73,4.96 4.95,5.05L7.44,6.05C7.96,5.66 8.5,5.32 9.13,5.07L9.5,2.42C9.54,2.18 9.75,2 10,2H14C14.25,2 14.46,2.18 14.5,2.42L14.87,5.07C15.5,5.32 16.04,5.66 16.56,6.05L19.05,5.05C19.27,4.96 19.54,5.05 19.66,5.27L21.66,8.73C21.79,8.95 21.73,9.22 21.54,9.37L19.43,11L19.5,12L19.43,13L21.54,14.63C21.73,14.78 21.79,15.05 21.66,15.27L19.66,18.73C19.54,18.95 19.27,19.04 19.05,18.95L16.56,17.95C16.04,18.34 15.5,18.68 14.87,18.93L14.5,21.58C14.46,21.82 14.25,22 14,22H10M11.25,4L10.88,6.61C9.68,6.86 8.62,7.5 7.85,8.39L5.44,7.35L4.69,8.65L6.8,10.2C6.4,11.37 6.4,12.64 6.8,13.8L4.68,15.36L5.43,16.66L7.86,15.62C8.63,16.5 9.68,17.14 10.87,17.38L11.24,20H12.76L13.13,17.39C14.32,17.14 15.37,16.5 16.14,15.62L18.57,16.66L19.32,15.36L17.2,13.81C17.6,12.64 17.6,11.37 17.2,10.2L19.31,8.65L18.56,7.35L16.15,8.39C15.38,7.5 14.32,6.86 13.12,6.62L12.75,4H11.25Z" />
                            </Icon>
                        </NavLink>
                    </Link>
                    <Link href="/work" passHref>
                        <NavLink className={router.pathname === '/work' ? 'active' : null} title="My works" aria-label="My works">
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