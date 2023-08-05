import Image from 'next/image'
import Link from 'next/link'
import NewsletterForm from '../components/Newsletter'
import styles from '../styles/MarketingStrategy.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <div className={styles.navContainer}>
        <h1>Rise & Grind</h1>
        <nav>
          <ul className={styles.navUl}>
            <li className={styles.navItemsLi}><Link legacyBehavior href="#"><a>Home</a></Link></li>
            <li className={styles.navItemsLi}><Link legacyBehavior href="#"><a>Our Coffee</a></Link></li>
            <li className={styles.navItemsLi}><Link legacyBehavior href="#"><a>Blog</a></Link></li>
            <li className={styles.navItemsLi}><Link legacyBehavior href="#"><a>Privacy</a></Link></li>
          </ul>
        </nav>
      </div>
      <div className={styles.flexContainer}>
        <div className={styles.sectionImage}>
          <Image
            src="/images/logos/Vistaprint/logo_image_only.png"
            alt="Rise & Grind Logo"
            width={750}
            height={750}
          />
         
        </div>
        <div className={styles.infoSection}>
          <div className={styles.textContent}>
            <h2><i>Daily Delight</i></h2>
            <h1 style={{ fontSize: 50}}>Real <span style={{ color: '#A95E33' }}>Coffee</span>, Real <span style={{ color: '#A95E33' }}>People</span></h1>
            <div className={styles.heroText}>
                <p style={{ fontSize: 30 }}>Rise with us. Grind with us. Start your day the 'Regular Joe' way. Experience high-quality, authentic coffee without the frills. Fuel your everyday pursuits with Rise & Grind.</p>
            </div>
          </div>
          <div className={styles.callToAction}>
            <NewsletterForm />
          </div>
        </div>
      </div>
      <div className={styles.footerBanner}>
        <img
          src="/images/Art/orange_rectangle.png"
          alt="Rise & Grind Logo"
          style={{ width: '100%', height: '100%', objectFit: 'cover'}}
        />
      </div>
    </div>
  )
}
