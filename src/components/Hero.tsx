// src/components/Hero.tsx
import { useEffect, useState } from 'react'
import styles from '../styles/Hero.module.css'

const Hero = () => {
  const [isVisible, setIsVisible] = useState(false)

  // Quand le composant monte, on déclenche l'animation d'apparition du contenu
  useEffect(() => {
    setIsVisible(true)
  }, [])

  // Fonction utilitaire pour scroller jusqu'à une section via son id
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <section className={styles.hero} id="accueil">
      {/* Trois éléments flottants (zéros d’opacité, animés verticalement) */}
      <div className={`${styles.floatingElement} ${styles.robot}`}>🤖</div>
      <div className={`${styles.floatingElement} ${styles.lightning}`}>⚡</div>
      <div className={`${styles.floatingElement} ${styles.microscope}`}>🔬</div>

      {/* Contenu principal */}
      <div className={`${styles.heroContent} ${isVisible ? styles.visible : ''}`}>
        <h1 className={styles.title}>Teranga IA</h1>
        <p className={styles.subtitle}>
          L’IA au service de la performance, de l’innovation et de la croissance durable
        </p>
        <p className={styles.description}>
          Teranga IA est une entreprise de conseil spécialisée en machine learning et intelligence
          artificielle appliquée. Nous accompagnons les organisations dans la conception, le
          développement et l’intégration de solutions IA sur mesure, adaptées à leurs enjeux
          métiers.
        </p>

        <div className={styles.heroButtons}>
          <button
            className={styles.ctaButton}
            onClick={() => scrollToSection('entreprise')}
          >
            Découvrir notre entreprise
          </button>
          <button
            className={styles.btnSecondary}
            onClick={() => scrollToSection('contact')}
          >
            Nous contacter
          </button>
        </div>
      </div>
    </section>
  )
}

export default Hero
