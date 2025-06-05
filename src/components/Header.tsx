// src/components/Header.tsx
import { useEffect, useState } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/router'
import styles from '../styles/Header.module.css'

const Header = () => {
  const router = useRouter()
  const [isScrolled, setIsScrolled] = useState(false)

  // Effet pour détecter le scroll (ombrage du header)
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 100)
    }
    window.addEventListener('scroll', handleScroll)
    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  // On considère “actif” un lien dont l'asPath correspond exactement à la href.
  // Exemple : si on est sur "/" ou "/#expertise", asPath vaut "/#expertise".
  // Pour “Accueil”, on veut qu’il soit actif si asPath === "/" OU asPath.startsWith("/#").
  const isActive = (href: string) => {
    // 1. Si on veut repérer “Accueil” sur "/" pur (aucun hash)
    if (href === '/' && router.asPath === '/') {
      return true
    }
    // 2. Ou si on veut souligner “Accueil” même quand on est sur "/#quelque-chose"
    if (href === '/' && router.asPath.startsWith('/#')) {
      return true
    }
    // Tout autre lien (eg. "/#expertise") doit matcher EXACTEMENT asPath
    return router.asPath === href
  }

  // Toggle du menu mobile (ajout/retirage de la classe .navLinksOpen)
  const toggleMobileMenu = () => {
    const menu = document.getElementById('mobile-menu')
    if (menu) {
      menu.classList.toggle(styles.navLinksOpen)
    }
  }

  // Ferme systématiquement le menu mobile quand on clique sur un lien
  const closeMobileMenu = () => {
    const menu = document.getElementById('mobile-menu')
    if (menu) {
      menu.classList.remove(styles.navLinksOpen)
    }
  }

  return (
    <header className={`${styles.header} ${isScrolled ? styles.scrolled : ''}`}>
      <nav className={styles.nav}>
        {/* ─── LOGO + “Teranga IA” ─── */}
        <div className={styles.logo}>
          {/* 1) Le logo ⇒ lien vers "/" */}
          <Link href="/" className={styles.logoImg}>
            <img
              src="/images/logo.png"
              alt="Logo Teranga IA"
              className={styles.logoImg}
            />
          </Link>
          {/* 2) Le texte “Teranga IA” ⇒ lien vers "/" */}
          <Link href="/" className={styles.logoText}>
            Teranga&nbsp;IA
          </Link>
        </div>

        {/* ─── BOUTON HAMBURGER (mobile) ─── */}
        <button
          className={styles.mobileMenuToggle}
          onClick={toggleMobileMenu}
          aria-label="Ouvrir/fermer le menu"
        >
          ☰
        </button>

        {/* ─── LIENS DE NAVIGATION ─── */}
        <ul id="mobile-menu" className={styles.navLinks}>
          <li>
            <Link
              href="/"
              className={`${styles.navLink} ${isActive('/') ? styles.active : ''}`}
              onClick={closeMobileMenu}
            >
              Accueil
            </Link>
          </li>
          <li>
            <Link
              href="/#expertise"
              className={`${styles.navLink} ${isActive('/#expertise') ? styles.active : ''}`}
              onClick={closeMobileMenu}
            >
              Notre expertise
            </Link>
          </li>
          <li>
            <Link
              href="/#services"
              className={`${styles.navLink} ${isActive('/#services') ? styles.active : ''}`}
              onClick={closeMobileMenu}
            >
              Nos services
            </Link>
          </li>
          <li>
            <Link
              href="/#formations"
              className={`${styles.navLink} ${isActive('/#formations') ? styles.active : ''}`}
              onClick={closeMobileMenu}
            >
              Formations IA
            </Link>
          </li>
          <li>
            <Link
              href="/#engagements"
              className={`${styles.navLink} ${isActive('/#engagements') ? styles.active : ''}`}
              onClick={closeMobileMenu}
            >
              Nos engagements
            </Link>
          </li>
          <li>
            <Link
              href="/#contact"
              className={`${styles.navLink} ${isActive('/#contact') ? styles.active : ''}`}
              onClick={closeMobileMenu}
            >
              Contact
            </Link>
          </li>
        </ul>

        {/* ─── BOUTON “Nous contacter” ─── */}
        <Link href="/#contact" className={styles.ctaButton}>
          Nous contacter
        </Link>
      </nav>
    </header>
  )
}

export default Header
