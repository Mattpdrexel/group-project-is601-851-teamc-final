import React from 'react';
import Image from 'next/image';
import styles from '../styles/blog3.module.scss';
import NextButton from '../components/NextButton';  // Adjust the path as necessary based on your directory structure

const Blog3 = () => {
  return (
    <div className={styles.container}>
      <Image 
        className={styles.steveImage}
        src="/images/Art/Unsplash/steve.png"
        alt="Steve"
        width={500}  
        height={500} 
      />
      <div className={styles.textBox}>
        <h1 className={styles.largeText}>Steve's Study Spot</h1>
        <p className={styles.mediumText}>As a 24-year-old student juggling assignments, I found my study haven at Rise & Grind. I value the consistent coffee and cozy, distraction-free environment. It's become an integral part of my study routine, smoothing my academic grind.</p>
      </div>
      <NextButton href="/blog1" />


    </div>
    
  );
}

export default Blog3;
