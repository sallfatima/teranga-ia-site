// src/components/Header.tsx
import { useEffect, useState } from 'react';
import Link from 'next/link';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 100);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`header ${isScrolled ? 'scrolled' : ''}`}>
      <nav className="nav">
        <Link href="/" className="logo">
          <img
            src="/images/logo.png"
            alt="Logo Teranga IA"
            style={{ height: '40px', width: 'auto' }}
          />
          <span>Teranga IA</span>
        </Link>

        <ul className="nav-links">
          <li><Link href="#gains" className="nav-link">Bénéfices</Link></li>
          <li><Link href="#expertise" className="nav-link">Expertise</Link></li>
          <li><Link href="#projets" className="nav-link">Projets</Link></li>
          <li><Link href="#offres" className="nav-link">Offres</Link></li>
          <li><Link href="#services" className="nav-link">Services</Link></li>
          <li><Link href="#formations" className="nav-link">Formations</Link></li>
          <li><Link href="#engagements" className="nav-link">Nos engagements</Link></li>
        </ul>

        <Link href="#contact" className="cta-button">
          Nous contacter
        </Link>

        <button 
          className="mobile-menu-toggle"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          ☰
        </button>
      </nav>
    </header>
  );
};

export default Header;
