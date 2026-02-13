// src/components/Hero.tsx
import { useEffect, useState } from 'react';
import styles from '../styles/Hero.module.css';

const Hero = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className={styles.hero} id="accueil">
      {/* Background elements */}
      <div className={styles.heroGrid}></div>
      <div className={`${styles.heroOrb} ${styles.heroOrb1}`}></div>
      <div className={`${styles.heroOrb} ${styles.heroOrb2}`}></div>

      <div className={styles.container}>
        <div className={styles.heroBadge}>
          <span className={styles.badgeDot}></span>
          Solutions IA en production
        </div>

        <h1 className={styles.heroTitle}>
          Transformez vos données en{' '}
          <span className={styles.gradientText}>avantage compétitif</span> avec l'IA
        </h1>

        <p className={styles.heroDesc}>
          Nous accompagnons les entreprises dans la conception, le développement et 
          l'intégration de solutions IA et machine learning - LLM/RAG, agents IA, 
          data pipelines, modèles prédictifs et formations sur mesure.
        </p>

        <div className={styles.heroButtons}>
          <button 
            className={styles.btnCtaWhite}
            onClick={() => scrollToSection('contact')}
          >
            Réserver un diagnostic gratuit →
          </button>
          <button 
            className={styles.btnCtaGhost}
            onClick={() => scrollToSection('projets')}
          >
            Voir nos projets
          </button>
        </div>

        <div className={styles.heroTrust}>
          <div className={styles.trustItem}>
            <div className={styles.trustIcon}>🚀</div>
            <span>Du POC à la prod en 8-12 semaines</span>
          </div>
          <div className={styles.trustItem}>
            <div className={styles.trustIcon}>🔒</div>
            <span>Conformité RGPD & sécurité garanties</span>
          </div>
          <div className={styles.trustItem}>
            <div className={styles.trustIcon}>📈</div>
            <span>ROI mesurable dès 3 mois</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
