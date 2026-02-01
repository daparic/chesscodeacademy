import styles from './Footer.module.css';

export default function Footer() {
    return (
        <footer className={styles.footer}>
            <div className={styles.content}>
                <div className={styles.section}>
                    <h3 className={styles.title}>Chess & Code</h3>
                    <p className={styles.text}>Master the board. Master the machine.</p>
                </div>
                <div className={styles.section}>
                    <h3 className={styles.title}>Contact Us</h3>
                    <p className={styles.text}><strong>Email:</strong> schoolofchess@proton.me</p>
                    <p className={styles.text}><strong>Studio:</strong> Tagbilaran City, Bohol Philippines</p>
                </div>
            </div>
            <p className={styles.copyright}>© {new Date().getFullYear()} Chess & Code School. All rights reserved.</p>
        </footer>
    );
}
