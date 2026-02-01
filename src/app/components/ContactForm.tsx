'use client';
import { useState } from 'react';
import styles from './ContactForm.module.css';

export default function ContactForm() {
    const [status, setStatus] = useState('');

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setStatus('Submitting...');

        const form = e.currentTarget;
        const formData = new FormData(form);

        try {
            const response = await fetch('https://formspree.io/f/xojljepo', {
                method: 'POST',
                body: formData,
                headers: {
                    'Accept': 'application/json'
                }
            });

            if (response.ok) {
                setStatus('Message sent! We checkmate your inbox soon.');
                form.reset();
            } else {
                const data = await response.json();
                if (Object.hasOwn(data, 'errors')) {
                    setStatus(data['errors'].map((error: any) => error['message']).join(', '));
                } else {
                    setStatus('Oops! There was a problem submitting your form');
                }
            }
        } catch (error) {
            setStatus('Oops! There was a problem submitting your form');
        }
    };

    return (
        <div className={styles.container} id="contact">
            <form className={styles.form} onSubmit={handleSubmit} method="POST">
                <div className={styles.group}>
                    <label className={styles.label}>Name</label>
                    <input type="text" name="name" className={styles.input} required placeholder="Magnus Carlsen" />
                </div>
                <div className={styles.group}>
                    <label className={styles.label}>Email</label>
                    <input type="email" name="email" className={styles.input} required placeholder="magnus@chess.com" />
                </div>
                <div className={styles.group}>
                    <label className={styles.label}>Message</label>
                    <textarea name="message" className={styles.textarea} required placeholder="I want to learn how to code my opening repertoire..." />
                </div>
                <button type="submit" className={styles.submit} disabled={status === 'Submitting...'}>
                    {status === 'Submitting...' ? 'Sending...' : (status.includes('sent') ? 'Message Sent!' : 'Send Message')}
                </button>
                {status && !status.includes('Submitting') && !status.includes('sent') && (
                    <p style={{ color: '#ff7675', marginTop: '1rem', textAlign: 'center' }}>{status}</p>
                )}
            </form>
        </div>
    );
}
