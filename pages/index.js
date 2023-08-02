import Head from 'next/head'
import Link from 'next/link'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Rise & Grind</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <link rel="icon" href="/images/favicon.ico" />
      </Head>

      <header className={styles.headerContainer}>
        <div className={styles.navContainer}>
          <div className={styles.wrapper}>
            <nav>
              <div className={styles.logo}>Rise & Grind</div>
              <ul className={styles.navItems}>
                <li><Link legacyBehavior href="/" passHref><a>Home</a></Link></li>
                <li><Link legacyBehavior href="/aboutus" passHref><a>About Us</a></Link></li>
                <li><Link legacyBehavior href="/buyerpersona" passHref><a>Buyer Persona</a></Link></li>
                <li><Link legacyBehavior href="/brandguide" passHref><a>Brand Guide</a></Link></li>
                <li><Link legacyBehavior href="/marketingstrategy" passHref><a>Marketing Strategy</a></Link></li>
              </ul>
            </nav>
          </div>
        </div>
      </header>

      <main>
        <div className={styles.bannerContainer}>
          <img className={styles.bannerImage} src="/images/Art/Unsplash/nathan-dumlao-pMW4jzELQCw-unsplash 1.png" alt="banner-photo" />
          <div className={styles.videoWrapper}>
            <h2 className={styles.videoTitle}>The Rise & Grind Proposal</h2>
            <iframe width="560" height="315" src="https://www.youtube.com/embed/DVVgfZic_dE" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
          </div>
        </div>

        <section className={styles.welcomeContainer}>
          <div className={styles.welcomeText}>
            <h1>Welcome to "Rise & Grind"</h1>
            {/* ... */}
          </div>
          <img className={styles.welcomeLogo} src="/images/logos/Vistaprint/logo_image_only.png" alt="rise-and-grind-logo" />
        </section>

        <section className={styles.valuesSection}>
          {/* ... */}
          <div className={styles.valueCards}>
            {/* ... */}
          </div>
        </section>

        <div className={styles.getStarted}>
          <h3>Great ideas start with great coffee. Let's help you achieve that.</h3>
          <h2>Get started today.</h2>
          <button>Join Us</button>
        </div>
      </main>

      <footer className={styles.footer}>
        <p>&copy; 2023 Rise & Grind. All rights reserved.</p>
      </footer>
    </div>
  )
}
