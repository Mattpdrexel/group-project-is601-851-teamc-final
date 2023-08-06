import Image from 'next/image';
import styles from '../styles/blog1.module.scss';

export default function Blog1() {
  return (
    <div className={styles.container}>
      <div className={styles.imgWrapper}>
        <Image 
          src="/images/Art/Unsplash/jenny-ueberberg-4TasyqJop_g-unsplash.jpg" 
          alt="Happy lady with coffee looking to side" 
          width={1170*5/7} 
          height={780*5/7} 
        />
      </div>

      <div className={styles.textBox}>
        <h1 className={styles.primaryText}>Patty</h1>
        <h2 className={styles.secondaryHeader}>Executive</h2>
        <p className={styles.secondaryText}>
          "As a busy professional, I cherish my midday coffee breaks at Rise & Grind. The no-frills, high-quality coffee experience provides the tranquility I need in the midst of my fast-paced corporate life."
        </p>
      </div>
      <div className={styles.nextButton}>
      Next &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className="arrow">&gt;</span>
        </div>
    </div>
  );
}
