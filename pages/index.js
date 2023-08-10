import Image from 'next/image';
import NewsletterForm from '../components/Newsletter';
import styles from '../styles/Home.module.scss';

export default function Home() {
  return (
    <div className={styles.container}>
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
            <h1>Real <span>Coffee</span>, Real <span>People</span></h1>
            <div className={styles.heroText}>
                <p>Rise with us. Grind with us. Start your day the 'Regular Joe' way. Experience high-quality, authentic coffee without the frills. Fuel your everyday pursuits with Rise & Grind.</p>
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
        />
      </div>
      <footer className={styles.footer}>
        <p>&copy; 2023 Rise & Grind. All rights reserved.</p>
      </footer>
    </div>
  )
}
