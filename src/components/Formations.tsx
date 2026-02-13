// src/components/Formations.tsx
import { useEffect, useRef, useState } from 'react';

const Formations = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );
    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }
    return () => observer.disconnect();
  }, []);

  const formations = [
    {
      level: 'Initiation',
      levelClass: 'level-initiation',
      title: "Introduction à l'IA & au Machine Learning",
      description: "Comprendre les fondamentaux de l'IA, les types de modèles, et identifier les cas d'usage pertinents pour votre entreprise.",
      duration: '2 jours',
      format: 'Présentiel / Distanciel'
    },
    {
      level: 'Perfectionnement',
      levelClass: 'level-perfectionnement',
      title: "Modélisation avancée, MLOps & IA éthique",
      description: "Approfondir les techniques avancées de modélisation, l'industrialisation des modèles et les enjeux éthiques de l'IA.",
      duration: '3 jours',
      format: 'Présentiel / Distanciel'
    },
    {
      level: 'Atelier pratique',
      levelClass: 'level-pratique',
      title: "Ateliers sur vos propres données",
      description: "Sessions hands-on utilisant vos données réelles pour construire et déployer des modèles directement exploitables.",
      duration: 'Sur mesure',
      format: 'Dans vos locaux'
    }
  ];

  return (
    <section className="section formations" id="formations" ref={sectionRef}>
      <div className="container">
        <h2 className="section-title">Formations IA</h2>
        <p className="section-subtitle">
          Des parcours adaptés à tous les niveaux pour maîtriser l'intelligence artificielle et le machine learning.
        </p>

        <div className={`formations-grid ${isVisible ? 'visible' : ''}`}>
          {formations.map((formation, index) => (
            <div 
              key={index} 
              className="formation-card"
              style={{ transitionDelay: `${index * 0.1}s` }}
            >
              <span className={`formation-level ${formation.levelClass}`}>
                {formation.level}
              </span>
              <h3>{formation.title}</h3>
              <p>{formation.description}</p>
              <div className="formation-meta">
                <span>📅 {formation.duration}</span>
                <span>👥 {formation.format}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Formations;
