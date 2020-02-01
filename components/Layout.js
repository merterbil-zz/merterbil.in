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

    .d-grid {
        display: grid;
    }

    .d-flex {
        display: flex;
    }

    .flex-row {
        flex-direction: row;
    }

    .flex-column {
        flex-direction: column;
    }

    .flex-wrap {
        flex-wrap: wrap;
    }

    .align-items-center {
        align-items: center;
    }

    .justify-content-center {
        justify-content: center;
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
    grid-template-rows: 4rem 1fr 4rem;
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
    padding: 1rem;
    text-align: center;
    opacity: .5;
    transition: all .25s;
    &:hover,
    &.active {
        opacity: 1;
        background-color: ${({ theme }) => theme.colors.primary};
    }
`
const Icon = styled.svg`
    width: 1.75rem;
    height: 1.75rem;
    fill: ${({ theme }) => theme.colors.textPrimary};
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
    grid-template-columns: 1fr;
    grid-auto-rows: 4rem;
`
const Page = styled.main`
    padding: 2rem;
`

const Layout = ({ children, router }) => (
    <>
        <GlobalStyle />
        <App>
            <SideBar>
                <Avatar src="/img/mert_erbil_avatar.jpg" alt="Mert Erbil" />
                <SiteNav>
                    <Link href="/" passHref>
                        <NavLink className={router.pathname === '/' ? 'active' : null}>
                            <Icon viewBox="0 0 24 24">
                                <path d="M10,20V14H14V20H19V12H22L12,3L2,12H5V20H10Z" />
                            </Icon>
                        </NavLink>
                    </Link>
                    <Link href="/projects" passHref>
                        <NavLink className={router.pathname === '/projects' ? 'active' : null}>
                            <Icon viewBox="0 0 24 24">
                                <path d="M16,20H20V16H16M16,14H20V10H16M10,8H14V4H10M16,8H20V4H16M10,14H14V10H10M4,14H8V10H4M4,20H8V16H4M10,20H14V16H10M4,8H8V4H4V8Z" />
                            </Icon>
                        </NavLink>
                    </Link>
                    <Link href="/about" passHref>
                        <NavLink className={router.pathname === '/about' ? 'active' : null}>
                            <Icon viewBox="0 0 24 24">
                                <path d="M8,9A2,2 0 0,1 10,11A2,2 0 0,1 8,13A2,2 0 0,1 6,11A2,2 0 0,1 8,9M12,17H4V16C4,14.67 6.67,14 8,14C9.33,14 12,14.67 12,16V17M20,8H14V10H20V8M20,12H14V14H20V12M20,16H14V18H20V16M22,4H14V6H22V20H2V6H10V4H2A2,2 0 0,0 0,6V20A2,2 0 0,0 2,22H22A2,2 0 0,0 24,20V6A2,2 0 0,0 22,4M13,6H11V2H13V6Z" />
                            </Icon>
                        </NavLink>
                    </Link>
                </SiteNav>
                <SocialNav>
                    <NavLink href="https://www.linkedin.com/in/mert-erbil/" target="_blank" rel="noopener" title="linkedIn" aria-label="linkedIn Mert Erbil">
                        <Icon viewBox="0 0 24 24">
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