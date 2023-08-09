import React from 'react';
import Image from 'next/image';
import styles from '../styles/blog2.module.scss';
import NextButton from '../components/NextButton';  // Adjust the path as necessary based on your directory structure

const Blog2 = () => {
  return (
    <div className={styles.container}>
        <div className={styles.imageWrapper}>
        <Image 
            className={styles.mainImage}
            src="/../public/images/Art/Unsplash/ana-itonishvili-Fyl8sMC2j2Q-unsplash.jpg"
            alt="Description" 
            width={500}   // Arbitrary value, adjust accordingly
            height={500}  // Arbitrary value, adjust accordingly
        />
        <Image 
            className={styles.leftQuote}
            src="/images/Art/Quotes.png"
            alt="Left Quote" 
            width={100}   // Arbitrary value, adjust accordingly
            height={100}  // Arbitrary value, adjust accordingly
        />
        <Image 
            className={styles.rightQuote}
            src="/images/Art/Quotes.png" 
            alt="Right Quote" 
            width={100}   // Arbitrary value, adjust accordingly
            height={100}  // Arbitrary value, adjust accordingly
        />
        </div>
      <div className={styles.textBox}>
        <p className={styles.largeText}>28-year-old Fiona chose Rise & Grind as her favorite gathering spot. Our casual atmosphere, consistent high-quality coffee, and no-fuss approach make it the perfect spot for her to connect with friends. In Rise & Grind, Fiona found a genuine, comfortable space to unwind and enjoy simple pleasures.</p>
        <p className={styles.name}>Fiona</p>
        <p className={styles.mediumText}>Loiterer</p>
      </div>
      <div>
      <NextButton href="/blog3" />
      </div>

    </div>
  );
}

export default Blog2;
