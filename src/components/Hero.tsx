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
      <div className="floating-element" style={{ top: '20%', left: '10%' }}>🤖</div>
      <div className="floating-element" style={{ top: '60%', right: '10%' }}>⚡</div>
      <div className="floating-element" style={{ bottom: '20%', left: '20%' }}>🔬</div>

      <div className={`hero-content ${isVisible ? 'visible' : ''}`}>
        <div className="hero-badge">
          <span className="badge-dot"></span>
          Solutions IA en production
        </div>
        
        <h1>Transformez vos données en avantage compétitif avec l'IA</h1>
        
        <p>
          Nous accompagnons les entreprises dans la conception, le développement et 
          l'intégration de solutions IA et machine learning — LLM/RAG, agents IA, 
          data pipelines, modèles prédictifs et formations sur mesure.
        </p>

        <div className="hero-buttons">
          <button className="cta-button" onClick={() => scrollToSection('contact')}>
            Réserver un diagnostic gratuit →
          </button>
          <button className="btn-secondary" onClick={() => scrollToSection('projets')}>
            Voir nos projets
          </button>
        </div>

        <div className="hero-trust">
          <div className="trust-item">
            <span className="trust-icon">🚀</span>
            <span>Du POC à la prod en 8-12 semaines</span>
          </div>
          <div className="trust-item">
            <span className="trust-icon">🔒</span>
            <span>Conformité RGPD & sécurité garanties</span>
          </div>
          <div className="trust-item">
            <span className="trust-icon">📈</span>
            <span>ROI mesurable dès 3 mois</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
