import styles from './AdvantagesSection.module.css';

export default function AdvantagesSection() {
  return (
    <section className={styles.advantages}>
      <h2 className={styles.title}>НАШИ ПРЕИМУЩЕСТВА</h2>
      <div className={styles.cardsWrapper}>
        <div className={styles.cards}>
          <div className={styles.card}>
            <div className={styles.cardContent}>
              <h3 className={styles.cardTitle}>СТРОГАЯ КОНФИДЕНЦИАЛЬНОСТЬ</h3>
              <p className={styles.cardText}>Все дела сохраняются адвокатской тайной</p>
            </div>
            <div className={styles.cardImageWrapper}>
              <img src="/1.jpg" alt="Конфиденциальность" className={styles.cardImage} />
            </div>
          </div>

          <div className={styles.card}>
            <div className={styles.cardContent}>
              <h3 className={styles.cardTitle}>ОТВЕТСТВЕННОСТЬ И ЧЕСТНОСТЬ</h3>
              <p className={styles.cardText}>Мы честны и откровенны с нашими клиентами</p>
            </div>
            <div className={styles.cardImageWrapper}>
              <img src="/2.jpg" alt="Ответственность" className={styles.cardImage} />
            </div>
          </div>

          <div className={styles.card}>
            <div className={styles.cardContent}>
              <h3 className={styles.cardTitle}>ПРОФЕССИОНАЛИЗМ И КАЧЕСТВО</h3>
              <p className={styles.cardText}>Высокое качество правовых услуг - главный принцип нашей деятельности</p>
            </div>
            <div className={styles.cardImageWrapper}>
              <img src="/3.jpg" alt="Профессионализм" className={styles.cardImage} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

