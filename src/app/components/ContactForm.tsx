'use client';
import { useState } from 'react';
import styles from './ContactForm.module.css';

export default function ContactForm() {
    const [status, setStatus] = useState('');
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    const isValidEmail = (email: string) => {
        return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
    };

    const isFormValid =
        formData.name.trim() !== '' &&
        formData.message.trim() !== '' &&
        isValidEmail(formData.email);

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if (!isFormValid) return;

        setStatus('Submitting...');

        const form = e.currentTarget;
        const data = new FormData(form);

        try {
            const response = await fetch('https://formspree.io/f/xojljepo', {
                method: 'POST',
                body: data,
                headers: {
                    'Accept': 'application/json'
                }
            });

            if (response.ok) {
                setStatus('Message sent! We checkmate your inbox soon.');
                setFormData({ name: '', email: '', message: '' });
                form.reset();
            } else {
                const result = await response.json();
                if (Object.hasOwn(result, 'errors')) {
                    setStatus(result['errors'].map((error: any) => error['message']).join(', '));
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
                    <input
                        type="text"
                        name="name"
                        className={styles.input}
                        value={formData.name}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div className={styles.group}>
                    <label className={styles.label}>Email</label>
                    <input
                        type="email"
                        name="email"
                        className={styles.input}
                        value={formData.email}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div className={styles.group}>
                    <label className={styles.label}>Message</label>
                    <textarea
                        name="message"
                        className={styles.textarea}
                        value={formData.message}
                        onChange={handleChange}
                        required
                    />
                </div>
                <button
                    type="submit"
                    className={styles.submit}
                    disabled={status === 'Submitting...' || !isFormValid}
                >
                    {status === 'Submitting...' ? 'Sending...' : (status.includes('sent') ? 'Message Sent!' : 'Send Message')}
                </button>
                {status && !status.includes('Submitting') && !status.includes('sent') && (
                    <p style={{ color: '#ff7675', marginTop: '1rem', textAlign: 'center' }}>{status}</p>
                )}
            </form>
        </div>
    );
}
