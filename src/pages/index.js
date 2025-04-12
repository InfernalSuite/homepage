import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';

import Heading from '@theme/Heading';
import styles from './index.module.css';

function HomepageHeader() {
    const {siteConfig} = useDocusaurusContext();
    return (
        <header className={clsx(styles.heroBanner)}>
            <div className="container">
                <Heading as="h1" className="hero__title">
                    {siteConfig.title}
                </Heading>
                <p className={"hero__subtitle"}>{siteConfig.tagline}</p>
            </div>
        </header>
    );
}

function HomePageProject({name, description, active, status, githubLink, docsLink, downloadLink}) {
    return <div className={styles.homePageProject}>
        <div className={styles.homePageProjectText}>
            <p className={styles.homePageProjectTitle}><Link to={docsLink ?? downloadLink ?? githubLink}>{name}</Link>
                <small
                    className={clsx(styles.homePageProjectTitleStatus, active ? styles.homePageProjectTitleActive : styles.homePageProjectTitleDiscontinued)}>{status}</small>
            </p>
            <p>{description}</p>
        </div>
        <div className={styles.homePageProjectDownloads}>
            {docsLink && <Link to={docsLink} className={"button button--secondary button--sm"}>Docs</Link>}
            {downloadLink && <Link to={downloadLink} className={"button button--secondary button--sm"}>Download</Link>}
            {githubLink && <Link to={githubLink} className={"button button--secondary button--sm"}>Github</Link>}
        </div>
    </div>
}

export default function Home() {
    const {siteConfig} = useDocusaurusContext();

    return (
        <Layout title={`Home`}>
            <HomepageHeader/>
            <main>
                <section className={styles.homePageProjectSection}>
                    <HomePageProject
                        name={"AdvancedSlimePaper"}
                        active={true}
                        description={"A Paper/Purpur and Pufferfish fork adding a custom, more efficient, world format suitable for smaller worlds like minigame maps or per-player-worlds."}
                        status={"Active development"}
                        docsLink={"/docs/asp"}
                        downloadLink={"/download/asp"}
                        githubLink={"https://github.com/InfernalSuite/AdvancedSlimePaper"}
                    />
                    <HomePageProject name={"InfernalWorldManager"} status={"?"} active={true}
                                     githubLink={"https://github.com/InfernalSuite/InfernalWorldManager"}/>
                    <HomePageProject name={"UltimateCore"} status={"Discontinued"}
                                     githubLink={"https://github.com/InfernalSuite/UltimateCore"}/>
                </section>

                <section className={styles.homeDiscordSection}>
                    <p>Stay informed and up-to-date with the latest developments in our projects and join our <a
                        href={"https://discord.infernalsuite.com/"} target={"_blank"}>Discord</a></p>
                </section>
            </main>

        </Layout>
    );
}
