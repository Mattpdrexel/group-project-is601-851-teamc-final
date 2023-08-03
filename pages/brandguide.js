import React from 'react';
import Link from 'next/link';
import styles from '../styles/BrandGuide.module.css'; // Adjust the path to your CSS file as needed

function BrandGuide() {
  return (
    <div>
      <div className={styles.headerContainer}>
        <div className={styles.navContainer}>
          <div className={styles.wrapper}>
            <nav>
              <div className={styles.logo}>Rise & Grind</div>
              <ul className={styles.navItems}>
            <li><Link legacyBehavior  href="/">Home</Link></li>
            <li><Link legacyBehavior  href="/aboutus">About Us</Link></li>
            <li><Link legacyBehavior  href="/buyerpersona">Buyer Persona</Link></li>
            <li><Link legacyBehavior  href="/brandguide">Brand Guide</Link></li>
            <li><Link legacyBehavior  href="/marketingstrategy">Marketing Strategy</Link></li>
          </ul>
            </nav>
          </div>
        </div>
      </div>

      <div className={styles.infoContainer}>
        <div className={styles.info}>
          <h1 className={styles.brandguidetitle}>Brand Guide</h1>
          <img src="/images/logos/Vistaprint/logo-png.png" alt="Vistaprint Logo" className={styles.brandguideLogo} />
          <p>This brand guide will help Rise and Grind establish a consistent brand identity that resonates with the Regular Guy/Gal archetype, fostering customer loyalty and connection.</p>
          <div className={`${styles.flexContainer}`}>
            <div className={styles.infoSection}>
            <h2>Brand Overview</h2>
                    <h1>Mission</h1>
                    <p>To offer everyday coffee for everyday heroes, fostering a sense of community and belonging.</p>
                    <h1>Vision</h1>
                    <p>To be the go-to coffee shop for those seeking quality brews, relatable atmosphere, and value for money.</p>
                    <h1>Values</h1>
                    <p>Authenticity, Quality, Value, Community, Inclusivity.</p>             
            </div>
            <img src="/images/Art/DALL-E/DALL·E 2023-07-03 22.57.15 - everyman coffee shop images.png" alt="Everyman Coffee Shop Image" className={styles.sectionImage} />
          </div>
          <img src="/images/Art/DALL-E/DALL·E 2023-07-03 23.29.23.png" alt="Aesthetic Image" className={styles.sectionImage} />
          <h2>Brand Aesthetic</h2>
                    <h1>Colors</h1>
                    <p>Stick with neutral, relatable colors like beige, tan, and gray that reflect the down-to-earth nature of the Regular Guy/Gal archetype.</p>
                    <h1>Fonts</h1>
                    <p>Use straightforward, accessible fonts, like Fjalla or Rubik, that are easy to read and have a friendly feel.</p>
                    <h1>Imagery</h1>
                    <p>Use photos of everyday people in everyday situations, focusing on diversity, community, and inclusivity. Avoid overly staged or glamorous shots.</p>
          
                    <h2>Brand Voice and Vocabulary</h2>
                    <h1>Voice</h1>
                    <p>Maintain a down-to-earth, genuine, and relatable tone in all communication.</p>
                    <h1>Vocabulary</h1>
                    <p>Use simple, familiar language that reflects the Regular Guy/Gal persona. Avoid jargon or overly complex terms.</p>
                    <img src="/images/Art/DALL-E/DALL·E 2023-07-03 23.08.22 - coffee snack donuts for the everyman.png" alt="Coffee and Donuts Image" className={styles.sectionImage} />

          <div className={`${styles.infoSection} ${styles.centerSection}`}>
            <h2>Six Methods of Persuasion</h2>
            <h2>Six Methods of Persuasion</h2>
                <ol>
                    <li>Reciprocity: Offer loyalty programs or regular customer discounts to foster a sense of giving and taking.</li>
                    <li>Commitment and Consistency: Consistently deliver high-quality coffee and service, reinforcing customer trust.</li>
                    <li>Social Proof: Showcase customer testimonials and reviews, or stories of regular customers.</li>
                    <li>Authority: Establish credibility through quality products and knowledgeable staff.</li>
                    <li>Liking: Foster a friendly, welcoming environment both in-store and online.</li>
                    <li>Scarcity: Promote limited-time offers or special brews to create a sense of urgency.</li>
                </ol>
          </div>
        </div>
      </div>

      <footer className={styles.footer}>
        <p>&copy; 2023 Rise & Grind. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default BrandGuide;
