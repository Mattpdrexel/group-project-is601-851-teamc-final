// components/NextButton.js
import Link from 'next/link';
import styles from '../styles/NextButton.module.scss';

const NextButton = ({ href, children = "Next" }) => {
  return (
    <Link legacyBehavior href={href}>
      <a className={styles.nextButton}>
        {children} <span className={styles.arrow}>&gt;</span>
      </a>
    </Link>
  );
};

export default NextButton;
