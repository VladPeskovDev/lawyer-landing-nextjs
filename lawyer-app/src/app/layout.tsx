import type { Metadata } from 'next';
import { Geist, Geist_Mono, Bebas_Neue, Inter } from 'next/font/google';
import './globals.css';
import Navbar from '@/components/Navbar/Navbar'; 
import Footer from '@/components/Footer/Footer';

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

const bebasNeue = Bebas_Neue({
  weight: '400',
  subsets: ['latin'],
  variable: '--font-bebas-neue', // ✅ Добавлено
});

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter', // ✅ Добавлено
});

export const metadata: Metadata = {
  title: 'Адвокат Тропин Л.С.',
  description: 'Юридическая помощь по уголовным делам и консультации в Москве',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ru">
      <body className={`${geistSans.variable} ${geistMono.variable} ${bebasNeue.variable} ${inter.variable}`}>
        <Navbar />
        {children}
        <Footer /> {/* Прокинули футер глобально */}
      </body>
    </html>
  );
}

