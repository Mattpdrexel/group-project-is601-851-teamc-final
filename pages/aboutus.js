import Head from 'next/head';
import Image from 'next/image';
import styles from '../styles/aboutus.module.scss';

export default function AboutUs() {
  return (
    <div className={styles.container}>

      <main className={styles.main}>
        <div className={styles.infoContainer}>
          <div className={styles.info}>
            <h1>About Rise & Grind</h1>
            <h2>Serving Everyday Heroes with Everyday Coffee</h2>
            <p>At Rise & Grind, we believe in the power of everyday heroes. Those who rise with the sun, seize the day, and make the most of every moment. We're more than a coffee shop; we're a daily ritual, a warm smile, and a place that feels like home.</p>
            
            <p>Founded in 2023, we started with a simple mission: to provide quality, authentic coffee experiences that fuel the everyday pursuits of our community. Our passion lies not just in brewing a fantastic cup of coffee, but in creating a welcoming atmosphere that celebrates the ordinary heroes who walk through our doors.</p>
            
            <p>Our team is a diverse blend of coffee enthusiasts, committed to making your visit to Rise & Grind a highlight of your day. Our baristas masterfully craft each brew, our servers greet you with a friendly smile, and our managers ensure your Rise & Grind experience is consistently excellent.</p>
            
            <p>What sets us apart? We're relatable, down-to-earth, and genuinely invested in our community. We celebrate the simple pleasure of a great cup of coffee and the role we play in the daily grind of our customers. Our spaces are designed for comfort and connection, offering a break from the hustle and a chance to refuel, reconnect, and rise to the day's challenges.</p>
            
            <p>We are Rise & Grind, and we're honored to be your go-to coffee destination. Explore more to see how we bring this vision to life, both in-store and online.</p>
          </div>
        </div>
        <Image className="img-toast" src="/images/Art/Unsplash/nathan-dumlao-6VhPY27jdps-unsplash 2.png" alt="Image of three people toasting coffee cups" width={1170} height={780} />

      </main>

      <footer className={styles.footer}>
        <p>&copy; 2023 Rise & Grind. All rights reserved.</p>
      </footer>
    </div>
  )
}
