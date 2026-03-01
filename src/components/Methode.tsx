// src/components/Methode.tsx
import { useEffect, useRef, useState } from 'react';

const Methode = () => {
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
      { threshold: 0.1, rootMargin: '0px 0px -50px 0px' }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const steps = [
    {
      number: 1,
      title: 'Cadrage & discovery',
      description: 'Atelier de co-construction : cas d\'usage, KPIs, données disponibles, contraintes techniques.'
    },
    {
      number: 2,
      title: 'POC / MVP (4-8 semaines)',
      description: 'Prototypage rapide, itérations fréquentes, validation métier à chaque sprint.'
    },
    {
      number: 3,
      title: 'Tests & évaluation',
      description: 'Validation rigoureuse : performance, biais, robustesse, user acceptance testing.'
    },
    {
      number: 4,
      title: 'Industrialisation',
      description: 'Intégration SI, sécurité, monitoring temps réel, documentation complète.'
    },
    {
      number: 5,
      title: 'Run & amélioration continue',
      description: 'Suivi de performance, itérations régulières, transfert de compétences à vos équipes.'
    }
  ];

  return (
    <section
      className="section section-alt"
      id="methode"
      ref={sectionRef}
    >
      <div className="container">
        <div className="section-header">
          <div className="section-eyebrow">Notre méthode</div>
          <h2 className="section-title">Un processus structuré et transparent</h2>
          <p className="section-subtitle">
            Nous combinons agilité et rigueur pour livrer des solutions IA performantes en 8-12 semaines.
          </p>
        </div>

        <div className="methode-steps">
          {steps.map((step, index) => (
            <div 
              key={index} 
              className={`m-step reveal ${isVisible ? 'visible' : ''}`}
              style={{ transitionDelay: `${index * 0.05}s` }}
            >
              <div className="m-num">{step.number}</div>
              <div className="m-body">
                <h3>{step.title}</h3>
                <p>{step.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Methode;
