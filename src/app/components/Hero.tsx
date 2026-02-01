import Link from 'next/link';
import Image from 'next/image';
import styles from './Hero.module.css';

export default function Hero() {
    return (
        <section className={styles.hero}>
            <div className={styles.content}>
                <h1 className={styles.title}>
                    School of Chess
                </h1>
                <p className={styles.subtitle}>
                    <span className={styles.highlight}>Checkmate</span> the Board. <span className={styles.highlight}>Code</span> the Future. <br />
                    Join Headmaster Gerry where Grandmaster strategy meets creative engineering.
                </p>
                <div className={styles.ctaGroup}>
                    <Link href="#contact" className={styles.primaryBtn}>Get Started</Link>
                    <Link href="#methodology" className={styles.secondaryBtn}>Our Method</Link>
                </div>
            </div>

            <div className={styles.imageContainer}>
                <div className={styles.imageWrapper}>
                    <Image
                        src="/teachergerry.jpg"
                        alt="Teacher Gerry"
                        fill
                        className={styles.image}
                        priority
                    />
                </div>
            </div>
        </section>
    );
}
