import type { Metadata } from 'next';
import { Inter, Orbitron } from 'next/font/google';
import './globals.css';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

const inter = Inter({ subsets: ['latin'], variable: '--font-sans' });
const orbitron = Orbitron({ subsets: ['latin'], variable: '--font-mono' });

export const metadata: Metadata = {
  title: 'Chess & Code | Strategy Meets Software',
  description: 'A premium school combining chess mastery with software engineering for teenagers.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${orbitron.variable}`}>
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
