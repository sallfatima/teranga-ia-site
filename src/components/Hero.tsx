// src/components/Hero.tsx
import { useEffect, useState } from 'react';

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
    <section className="hero" id="accueil">
      {/* Éléments flottants décoratifs */}
      <div className="floating-element" style={{ top: '20%', left: '10%' }}>🤖</div>
      <div className="floating-element" style={{ top: '60%', right: '10%' }}>⚡</div>
      <div className="floating-element" style={{ bottom: '20%', left: '20%' }}>🔬</div>

      <div className={`hero-content ${isVisible ? 'visible' : ''}`}>
        <h1>Teranga IA</h1>
        <p className="subtitle">
          L'IA au service de la performance, de l'innovation et de la croissance durable
        </p>
        <p>
          Teranga IA est une entreprise de conseil spécialisée en machine learning et intelligence
          artificielle appliquée. Nous accompagnons les organisations dans la conception, le
          développement et l'intégration de solutions IA sur mesure, adaptées à leurs enjeux
          métiers.
        </p>

        <div className="hero-buttons">
          <button
            className="cta-button"
            onClick={() => scrollToSection('entreprise')}
          >
            Découvrir notre entreprise
          </button>
          <button
            className="btn-secondary"
            onClick={() => scrollToSection('contact')}
          >
            Nous contacter
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
