// src/components/Header.tsx
import { useEffect, useState } from 'react';
import Link from 'next/link';
import styles from '../styles/Header.module.css';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <header className={`${styles.header} ${isScrolled ? styles.scrolled : ''}`}>
      <div className={styles.container}>
        <Link href="/" className={styles.headerLogo}>
          <div className={styles.logoDot}>T</div>
          <span>Teranga IA</span>
        </Link>

        <nav className={`${styles.navLinks} ${isMobileMenuOpen ? styles.navLinksOpen : ''}`}>
          <Link href="#gains" onClick={closeMobileMenu}>Bénéfices</Link>
          <Link href="#expertise" onClick={closeMobileMenu}>Expertise</Link>
          <Link href="#projets" onClick={closeMobileMenu}>Projets</Link>
          <Link href="#offres" onClick={closeMobileMenu}>Offres</Link>
          <Link href="#services" onClick={closeMobileMenu}>Services</Link>
          <Link href="#formations" onClick={closeMobileMenu}>Formations</Link>
          <Link href="#contact" className={styles.btnCta} onClick={closeMobileMenu}>Contact</Link>
        </nav>

        <button 
          className={styles.mobileToggle} 
          onClick={toggleMobileMenu}
          aria-label="Menu"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>
    </header>
  );
};

export default Header;
