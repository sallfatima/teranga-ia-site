// src/components/Gains.tsx
import { useEffect, useRef, useState } from 'react';

const Gains = () => {
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

  const benefices = [
    {
      icon: '⚡',
      title: 'Gain de productivité',
      description: "Automatisez les tâches répétitives et libérez vos équipes pour des missions à forte valeur ajoutée."
    },
    {
      icon: '📊',
      title: 'Décisions éclairées',
      description: "Exploitez vos données pour anticiper les tendances et prendre des décisions stratégiques basées sur des prévisions fiables."
    },
    {
      icon: '🎯',
      title: 'Expérience client optimale',
      description: "Personnalisez les parcours clients avec des chatbots intelligents et des recommandations contextuelles."
    }
  ];

  return (
    <section className="section gains" id="gains" ref={sectionRef}>
      <div className="container">
        <h2 className="section-title">Bénéfices</h2>
        <p className="section-subtitle">
          Des résultats mesurables pour votre entreprise grâce à l'intelligence artificielle.
        </p>

        <div className={`presentation-grid ${isVisible ? 'visible' : ''}`}>
          {benefices.map((benefice, index) => (
            <div 
              key={index} 
              className="presentation-card"
              style={{ transitionDelay: `${index * 0.1}s` }}
            >
              <div className="card-header">
                <span className="card-icon">{benefice.icon}</span>
                <h3>{benefice.title}</h3>
              </div>
              <p style={{ color: '#666', lineHeight: '1.7' }}>{benefice.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Gains;
