import { NextSeo } from 'next-seo'
import Layout from '../components/Layout'

const Index = () => (
    <>
        <NextSeo titleTemplate="%s | Mert Erbil" title="Welcome" description="Personal website for showing my skills and projects." canonical="https://merterbil.in" />
        <Layout>
            <div className="d-flex flex-column align-items-center justify-content-center">
                <svg className="moon" viewBox="0 0 512 512">
                    <circle className="cls-1" cx="256" cy="256" r="217.6" />
                    <path className="cls-2" d="M374.48,73.52A216.51,216.51,0,0,1,409.6,192c0,120.18-97.42,217.6-217.6,217.6A216.5,216.5,0,0,1,73.52,374.48,217.36,217.36,0,0,0,256,473.6c120.18,0,217.6-97.42,217.6-217.6A217.36,217.36,0,0,0,374.48,73.52Z" />
                    <circle className="cls-3" cx="377.6" cy="275.2" r="44.8" />
                    <circle className="cls-3" cx="281.6" cy="140.8" r="38.4" />
                    <circle className="cls-3" cx="179.2" cy="332.8" r="38.4" />
                    <circle className="cls-3" cx="147.2" cy="249.6" r="19.2" />
                    <circle className="cls-3" cx="262.4" cy="339.2" r="19.2" />
                </svg>
                <div className="soon">
                    <span>c</span>
                    <span>o</span>
                    <span className="moon">m</span>
                    <span>i</span>
                    <span>n</span>
                    <span>g</span>
                    <span>&nbsp;</span>
                    <span>s</span>
                    <span className="moon">o</span>
                    <span className="moon">o</span>
                    <span className="moon">n</span>
                </div>
            </div>
        </Layout>
        <style jsx>{`
            .page {
                height: 100%;
            }

            svg.moon {
                width: 20rem;
                min-width: 15rem;
                height: 20rem;
                min-height: 15rem;
            }

            .cls-1 { fill:#cad8dd; }
            .cls-2 { fill:#bdcdd1; }
            .cls-3 { fill:#a1b9bf; }

            .soon {
                font-size: 2.5rem;
                text-transform: uppercase;
                color: #A1B9BF;
            }

            span:not(.moon) {
                opacity: .25;
            }
        `}</style>
    </>
)

export default Index