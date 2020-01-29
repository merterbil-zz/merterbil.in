const Layout = ({ children }) => (
    <>
        <div className="app">
            <div className="sidebar d-flex flex-row">
                <div className="avatar">
                    <img src="/img/mertol_erbil_avatar.jpg" alt="Mertol Erbil" />
                </div>
                <div className="nav"></div>
                <div className="social">
                    <a href="https://www.linkedin.com/in/blasphx/" target="_blank" rel="noopener" title="linkedin" aria-label="linkedin Mertol Erbil">
                        <svg viewBox="0 0 24 24">
                            <path fill="#f4f4f4" d="M21,21H17V14.25C17,13.19 15.81,12.31 14.75,12.31C13.69,12.31 13,13.19 13,14.25V21H9V9H13V11C13.66,9.93 15.36,9.24 16.5,9.24C19,9.24 21,11.28 21,13.75V21M7,21H3V9H7V21M5,3A2,2 0 0,1 7,5A2,2 0 0,1 5,7A2,2 0 0,1 3,5A2,2 0 0,1 5,3Z" />
                        </svg>
                    </a>
                </div>
            </div>
            <main>{children}</main>
        </div>
        <style jsx>{`
            .app {
                position: absolute;
                top: 0;
                bottom: 0;
                width: 100%;
                height: 100%;
                display: grid;
                grid-template-columns: 4rem 1fr;
            }

            .sidebar {
                background-color: #1e262c;
                display: grid;
                grid-template-rows: 4rem 1fr 4rem;
            }

            .sidebar .avatar {
                padding: .5rem;
            }

            .sidebar .avatar img {
                width: 3rem;
                height: 3rem;
                object-fit: cover;
                object-position: center center;
                border-radius: 50%;
            }

            .sidebar .social {
                display: grid;
            }

            .sidebar .social a {
                padding: 1rem;
                opacity: .6;
                text-align: center;
            }

            .sidebar .social a:hover {
                opacity: 1;
            }

            .sidebar .social a svg {
                width: 1.6rem;
                height: 1.6rem;
            }

            main {
                position: relative;
                padding: 2rem;
                height: 100%;
            }
        `}</style>
        <style jsx global>{`
            html,
            body {
                margin: 0;
                padding: 0;
                font-family: 'Titillium Web', sans-serif;
                background-color: #1a2025;
                color: #f4f4f4;
                font-size: 16px!important;
            }
            
            *,
             :after,
             :before {
                -webkit-font-smoothing: antialiased;
                -webkit-touch-callout: none;
                -moz-osx-font-smoothing: grayscale;
                -webkit-box-sizing: border-box;
                box-sizing: border-box;
                -webkit-text-size-adjust: 100%;
                -moz-text-size-adjust: 100%;
                -ms-text-size-adjust: 100%;
                text-size-adjust: 100%;
                outline: none;
            }

            img,
            svg {
                -webkit-user-drag: none;
                -webkit-user-select: none;
                -moz-user-select: none;
                -ms-user-select: none;
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
        `}</style>
    </>
)

export default Layout