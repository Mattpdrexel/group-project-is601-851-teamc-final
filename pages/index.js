import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Rise & Grind</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="icon" type="image/x-icon" href="/images/favicon.ico" />
      </Head>

      <header className={styles.header}>
        <div className={styles.logo}>Rise & Grind</div>
        <nav>
          <ul className={styles.navItems}>
            <li><Link href="/">Home</Link></li>
            <li><Link href="/about">About Us</Link></li>
            <li><Link href="/buyerpersona">Buyer Persona</Link></li>
            <li><Link href="/brandguide">Brand Guide</Link></li>
            <li><Link href="/marketingstrategy">Marketing Strategy</Link></li>
          </ul>
        </nav>
      </header>

      <main className={styles.main}>
        <div className={styles.infoContainer}>
          <div className={styles.info}>
            <h1>About Rise & Grind</h1>
            <h2>Serving Everyday Heroes with Everyday Coffee</h2>
            <p>At Rise & Grind, we believe in the power of everyday heroes. Those who rise with the sun, seize the day, and make the most of every moment. We're more than a coffee shop; we're a daily ritual, a warm smile, and a place that feels like home. </p>
            <Image id="img-toast" src="/images/Art/Unsplash/nathan-dumlao-6VhPY27jdps-unsplash 2.png" alt="coffee toasting" width={1170} height={780} />
          </div>
        </div>
      </main>

      <footer className={styles.footer}>
        <p>&copy; 2023 Rise & Grind. All rights reserved.</p>
      </footer>
    </div>
  )
}
