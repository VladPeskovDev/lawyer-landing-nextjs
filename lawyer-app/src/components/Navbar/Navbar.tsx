'use client'

import Link from 'next/link';
import { useState } from 'react';
import styles from './Navbar.module.css';

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className={styles.navbar}>
      <div className={styles.container}>
        {/* Левая часть */}
        <div className={styles.left}>
          <Link href="/">
            <span className={styles.title}>ЮРИДИЧЕСКИЕ УСЛУГИ</span>
          </Link>
        </div>

        {/* Центр (меню - скрывается на мобилке) */}
        <ul className={styles.center}>
          <li>
            <Link href="/">Главный экран</Link>
          </li>
          <li>
            <Link href="/services">Услуги</Link>
          </li>
          <li>
            <Link href="/about">О нас</Link>
          </li>
          <li>
            <Link href="/consultation">Консультация</Link>
          </li>
          <li>
            <Link href="/articles">Блог</Link>
          </li>
          <li>
            <Link href="/contact">Контакты</Link>
          </li>
        </ul>

        {/* Правая часть */}
        <div className={styles.right}>
          <a href="tel:+79160760944" className={styles.phoneNumber}>
            +7 (916) 076-09-44
          </a>
          <span className={styles.phoneText}>Телефон для связи</span>
        </div>

        {/* Бургер (показываем только на мобилке) */}
        <button
          className={styles.burger}
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Меню"
        >
          <span className={styles.burgerLine}></span>
          <span className={styles.burgerLine}></span>
          <span className={styles.burgerLine}></span>
        </button>
      </div>

      {/* Выпадающее меню (мобилка) */}
      {isMenuOpen && (
        <div className={styles.mobileMenu}>
          <ul>
            <li>
              <Link href="/" onClick={() => setIsMenuOpen(false)}>Главный экран</Link>
            </li>
            <li>
              <Link href="/services" onClick={() => setIsMenuOpen(false)}>Услуги</Link>
            </li>
            <li>
              <Link href="/about" onClick={() => setIsMenuOpen(false)}>О нас</Link>
            </li>
            <li>
              <Link href="/consultation" onClick={() => setIsMenuOpen(false)}>Консультация</Link>
            </li>
            <li>
              <Link href="/articles" onClick={() => setIsMenuOpen(false)}>Блог</Link>
            </li>
            <li>
              <Link href="/contact" onClick={() => setIsMenuOpen(false)}>Контакты</Link>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
}

