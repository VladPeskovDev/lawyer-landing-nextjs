import HeroSection from '@/components/HeroSection/HeroSection';
import AdvantagesSection from '@/components/AdvantagesSection/AdvantagesSection';
import styles from './page.module.css';

export default function HomePage() {
  return (
    <main className={styles.main}>
      <HeroSection />
      <AdvantagesSection />
    </main>
  );
}
