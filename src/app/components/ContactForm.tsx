'use client';
import { useState } from 'react';
import styles from './ContactForm.module.css';

export default function ContactForm() {
    const [status, setStatus] = useState('');

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setStatus('Submitting...');
        // Mock submission
        setTimeout(() => {
            setStatus('Message sent! We checkmate your inbox soon.');
        }, 1500);
    };

    return (
        <div className={styles.container} id="contact">
            <form className={styles.form} onSubmit={handleSubmit}>
                <div className={styles.group}>
                    <label className={styles.label}>Name</label>
                    <input type="text" className={styles.input} required placeholder="Magnus Carlsen" />
                </div>
                <div className={styles.group}>
                    <label className={styles.label}>Email</label>
                    <input type="email" className={styles.input} required placeholder="magnus@chess.com" />
                </div>
                <div className={styles.group}>
                    <label className={styles.label}>Message</label>
                    <textarea className={styles.textarea} required placeholder="I want to learn how to code my opening repertoire..." />
                </div>
                <button type="submit" className={styles.submit}>
                    {status || 'Send Message'}
                </button>
            </form>
        </div>
    );
}
