import styles from './HeroSection.module.css';

export default function HeroSection() {
  return (
    <section className={styles.hero}>
      <div className={styles.textBlock}>
        <h1 className={styles.title}>ЮРИДИЧЕСКИЕ УСЛУГИ НА ВСЕ СЛУЧАИ ЖИЗНИ</h1>
        <p className={styles.subtitle}>Большой процент выигрышных дел</p>
      </div>
      <div className={styles.statsBlock}>
        <div className={styles.statItem}>
          <span className={styles.statNumber}>11 000+</span>
          <span className={styles.statLabel}>Выигранных дел</span>
        </div>
        <div className={styles.statItem}>
          <span className={styles.statNumber}>6 лет</span>
          <span className={styles.statLabel}>Опыта</span>
        </div>
        <div className={styles.statItem}>
          <span className={styles.statNumber}>11</span>
          <span className={styles.statLabel}>Адвокатов</span>
        </div>
      </div>
    </section>
  );
}
