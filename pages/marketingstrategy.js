import React from 'react';
import Link from 'next/link';
import styles from '../styles/MarketingStrategy.module.css'; // Adjust the path to your CSS file as needed

function MarketingStrategy() {
  return (
    <div>
      <div className={styles.navContainer}>
        <div className={styles.wrapper}>
          <nav>
            <div className={styles.logo}>Rise & Grind</div>
            <ul className={styles.navItems}>
              <li><Link href="/">Home</Link></li>
              <li><Link href="/aboutus">About Us</Link></li>
              <li><Link href="/buyerpersona">Buyer Persona</Link></li>
              <li><Link href="/brandguide">Brand Guide</Link></li>
              <li><Link href="/marketingstrategy">Marketing Strategy</Link></li>
            </ul>
          </nav>
        </div>
      </div>

      <div className={styles.infoContainer}>
        <div className={styles.info}>
          <h1>Our Marketing Strategy</h1>
          <h2>Tailored to Engage, Connect, and Serve Our Everyday Heroes</h2>
          <p>Our marketing strategy for Rise & Grind is designed with our persona - Regular Joe - in mind. It's built on authenticity, community, and inclusivity, and powered by proven principles of persuasion.</p>

          <ol>
                <li><b>Reciprocity</b>: We foster a sense of community and mutual support with loyalty programs and regular customer discounts. This isn't just about making sales; it's about building lasting relationships.</li>
                <li><b>Commitment and Consistency</b>: We understand the value of trust. By consistently delivering high-quality coffee and service, we build a reliable brand that Regular Joes can count on.</li> 
                <li><b>Social Proof</b>: We showcase testimonials, customer reviews, and stories of our regulars. This not only demonstrates the quality of our service, but also highlights the sense of community we cultivate.</li>
                <li><b>Authority</b>: Rise & Grind is knowledgeable about coffee but approachable. Our team can answer questions, offer suggestions, and provide an exceptional coffee experience without pretense.</li>
                <li><b>Liking</b>: We create a friendly, welcoming environment both in our physical locations and online. This approachability is part of what makes Rise & Grind a beloved destination.</li>
                <li><b>Scarcity</b>: We utilize limited-time offers and special brews to generate excitement and a sense of urgency. This keeps our menu fresh and our customers eager to see what's next.</li>
            </ol>

          <p>By centering our strategy around these key principles and the needs of Regular Joe, we ensure that our marketing efforts are targeted, effective, and resonate with our core audience. Dive deeper into our site to see how we put these strategies into action!</p>
        </div>
      </div>

      <footer className={styles.footer}>
        <p>&copy; 2023 Rise & Grind. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default MarketingStrategy;
