import Link from 'next/link';
import styles from './Navbar.module.css';

export default function Navbar() {
  return (
    <nav className={styles.navbar}>
      <Link href="/" className={styles.logo}>
        Chess<span style={{ color: 'var(--foreground)' }}>&</span>Code
      </Link>
      <div className={styles.links}>
        <Link href="#methodology" className={styles.link}>Methodology</Link>
        <Link href="#curriculum" className={styles.link}>Curriculum</Link>
        <Link href="#about" className={styles.link}>About</Link>
        <Link href="#contact" className={styles.cta}>Enroll Now</Link>
      </div>
    </nav>
  );
}
