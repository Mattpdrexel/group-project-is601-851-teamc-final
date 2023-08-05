import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import styles from '../styles/BuyerPersona.module.css'

export default function BuyerPersona() {
  return (
    <div className={styles.container}>

      <header className={styles.header}>
        <div className={styles.logo}>Rise & Grind</div>
        <nav>
        <ul className={styles.navItems}>
            <li><Link legacyBehavior  href="/">Home</Link></li>
            <li><Link legacyBehavior  href="/aboutus">About Us</Link></li>
            <li><Link legacyBehavior  href="/buyerpersona">Buyer Persona</Link></li>
            <li><Link legacyBehavior  href="/brandguide">Brand Guide</Link></li>
            <li><Link legacyBehavior  href="/marketingstrategy">Marketing Strategy</Link></li>
          </ul>
        </nav>
      </header>

      <main className={styles.main}>
        <div className={styles.infoContainer}>
          <div className={styles.info}>
            <h1>Buyer Persona</h1>
            <h2>An Everyday Hero Seeking Consistency, Quality, and a Welcoming Atmosphere</h2>
            <p>Meet Regular Joe, the embodiment of the everyday heroes that Rise & Grind serves. Joe isn't just a persona; he is a reflection of our community - the students, working adults, parents, and friends who make up our loyal customer base.</p>

            <p><u>Demographics</u>: Age: 20 - 65 years Occupation: Students and working professionals who enjoy a good cup of coffee
            Personality Traits: Joe is laid-back, casual, and values consistency. He prefers a no-frills experience that is reliable and of high quality.</p>
            
            <p><u>Hobbies</u>: Joe enjoys spending time with friends and family, participating in local activities, and seeking out comfortable spaces where he feels welcome and at ease.</p>
            
            <p><u>Challenges</u>: One of Joe's main challenges is finding a dependable source of quality coffee that isn't overpriced or over-glamorized. He wants an honest, trustworthy coffee provider that fits naturally into his daily routine.</p>
            
            <p><u>Goals</u>: Joe's goal is simple. He seeks a reliable source of quality coffee in a casual and welcoming atmosphere.</p>

            <p>Rise & Grind is dedicated to serving Joe and others like him. We aim to be a trusted part of their everyday lives, offering a dependable and enjoyable coffee experience without the unnecessary frills and premium pricing. Explore more to see how we cater to Joe's needs and exceed his expectations, every day!</p>

            <Image 
              src="/images/Art/Unsplash/andrew-neel-cckf4TsHAuw-unsplash.jpg"
              alt="coffee at work"
              width={500} // set your own width
              height={300} // set your own height
            />
          </div>
        </div>
      </main>

      <footer className={styles.footer}>
        <p>&copy; 2023 Rise & Grind. All rights reserved.</p>
      </footer>
    </div>
  )
}
