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
            width={500}
            height={500}
          />
         
        </div>
        <div className={styles.infoSection}>
          <div>
            <h2><i>Daily Delight</i></h2>
            <h1>Real <span style={{ color: '#603809' }}>Coffee</span>, Real <span style={{ color: '#603809' }}>People</span></h1>
            <p>Rise with us. Grind with us. Start your day the 'Regular Joe' way. Experience high-quality, authentic coffee without the frills. Fuel your everyday pursuits with Rise & Grind.</p>
          </div>
          <div className={styles.callToAction}>
            <NewsletterForm />
            <small>Relax. Information is for promotional services only.</small>
          </div>
        </div>
      </div>
      <div className={styles.footerBanner}>
        <img
          src="/images/Art/orange_rectangle.png"
          alt="Rise & Grind Logo"
          style={{ width: '100%', height: '100%', objectFit: 'cover' }}
        />
      </div>
    </div>
  )
}
