// src/components/Offres.tsx
import { useEffect, useRef, useState } from 'react';

const Offres = () => {
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

  const offres = [
    {
      icon: '🧭',
      title: 'Cadrage & Conseil',
      description: "Identifiez les cas d'usage IA à fort ROI pour votre entreprise.",
      features: [
        'Audit de maturité data & IA',
        'Priorisation des use cases',
        'Roadmap stratégique IA',
        'Analyse de faisabilité technique'
      ],
      cta: 'Demander un diagnostic →',
      ctaLink: '#contact'
    },
    {
      icon: '🚀',
      title: 'Développement & Intégration',
      description: "Conception et déploiement de solutions IA sur mesure, de bout en bout.",
      features: [
        'POC / MVP en 4-8 semaines',
        'Développement de modèles ML/LLM',
        'Intégration API & workflows métiers',
        'MLOps & industrialisation'
      ],
      cta: 'Lancer un projet →',
      ctaLink: '#contact'
    },
    {
      icon: '📚',
      title: 'Formation & Montée en compétences',
      description: "Formez vos équipes aux technologies IA et data science.",
      features: [
        'Formations IA/ML sur mesure',
        'Ateliers pratiques sur vos données',
        'Transfert de compétences',
        'Accompagnement continu'
      ],
      cta: 'Découvrir les formations →',
      ctaLink: '#formations'
    }
  ];

  return (
    <section className="section offres" id="offres" ref={sectionRef}>
      <div className="container">
        <h2 className="section-title">Nos offres</h2>
        <p className="section-subtitle">
          Du diagnostic stratégique à l'industrialisation complète, nous vous accompagnons à chaque étape.
        </p>

        <div className={`offres-grid ${isVisible ? 'visible' : ''}`}>
          {offres.map((offre, index) => (
            <div 
              key={index} 
              className="offre-card"
              style={{ transitionDelay: `${index * 0.1}s` }}
            >
              <div className="offre-header">
                <div className="offre-icon">{offre.icon}</div>
                <h3>{offre.title}</h3>
                <p className="desc">{offre.description}</p>
              </div>
              
              <ul className="offre-list">
                {offre.features.map((feature, featureIndex) => (
                  <li key={featureIndex}>{feature}</li>
                ))}
              </ul>

              <a href={offre.ctaLink} className="offre-cta">
                {offre.cta}
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Offres;
