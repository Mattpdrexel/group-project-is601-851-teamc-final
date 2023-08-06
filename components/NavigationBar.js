// components/NavigationBar.js

import Link from 'next/link';
import styles from '../styles/NavigationBar.module.scss';

const NavigationBar = () => (
  <div className={styles.navContainer}>
    <h1>Rise & Grind</h1>
    <nav>
      <ul className={styles.navUl}>
        <li className={styles.navItemsLi}><Link legacyBehavior href="/"><a>Home</a></Link></li>
        <li className={styles.navItemsLi}><Link legacyBehavior href="/aboutus"><a>About Us</a></Link></li>
        <li className={styles.navItemsLi}><Link legacyBehavior href="/blog1"><a>Blog</a></Link></li>
        <li className={styles.navItemsLi}><Link legacyBehavior href="/privacypolicy"><a>Privacy</a></Link></li>
      </ul>
    </nav>
  </div>
);

export default NavigationBar;
