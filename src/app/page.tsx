import styles from './page.module.css';
import Hero from './components/Hero';
import FeatureCard from './components/FeatureCard';
import ContactForm from './components/ContactForm';

export default function Home() {
  const features = [
    {
      title: 'Algorithmic Thinking',
      description: 'Learn how chess calculation translates directly to writing efficient algorithms and decision trees.',
      icon: '🧠'
    },
    {
      title: 'Engine Development',
      description: 'Build your own chess engine from scratch. Understand concepts like Minimax, Alpha-Beta pruning, and bitboards.',
      icon: '⚙️'
    },
    {
      title: 'Data Science & Analysis',
      description: 'Analyze millions of grandmaster games using Python and data science libraries to find new opening novelties.',
      icon: '📊'
    },
    {
      title: 'AI & Neural Networks',
      description: 'Train neural networks to evaluate positions, bridging the gap between classical engines and AlphaZero.',
      icon: '🤖'
    }
  ];

  return (
    <main className={styles.main}>
      <Hero />

      <section id="why" className={styles.section}>
        <h2 className={styles.sectionTitle}>Why Chess + Code?</h2>
        <div className={styles.grid}>
          {features.map((f, i) => (
            <FeatureCard key={i} {...f} />
          ))}
        </div>
      </section>

      <section id="methodology" className={`${styles.section} ${styles.methodology}`}>
        <h2 className={styles.sectionTitle}>Our Methodology</h2>
        <div style={{ maxWidth: '800px', margin: '0 auto', textAlign: 'center', lineHeight: '1.8', color: '#b2bec3' }}>
          <p>
            We believe that the rigorous logic of chess and the creative problem-solving of programming are two sides of the same coin.
            Our students don't just play chess; they deconstruct it. They don't just type code; they strategize.
            By merging these disciplines, we cultivate a mindset that conquers complexity.
          </p>
        </div>
      </section>

      <section id="contact" className={styles.section}>
        <h2 className={styles.sectionTitle}>Get in Touch</h2>
        <ContactForm />
      </section>
    </main>
  );
}
