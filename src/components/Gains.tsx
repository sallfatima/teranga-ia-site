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
      { threshold: 0.1, rootMargin: '0px 0px -50px 0px' }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const gains = [
    {
      icon: '⚡',
      title: 'Productivité décuplée',
      description: "Automatisez les tâches répétitives et libérez vos équipes pour des missions à forte valeur ajoutée. Gagnez jusqu'à 40% de temps sur vos processus clés."
    },
    {
      icon: '💡',
      title: 'Décisions éclairées',
      description: "Exploitez vos données pour anticiper les tendances, détecter les anomalies et optimiser vos stratégies en temps réel grâce au machine learning."
    },
    {
      icon: '🎯',
      title: 'Expérience client enrichie',
      description: "Personnalisez vos interactions, recommandez les bons produits et répondez instantanément grâce à des agents IA conversationnels performants."
    }
  ];

  return (
    <section className="section" id="gains" ref={sectionRef}>
      <div className="container">
        <div className="section-header">
          <div className="section-eyebrow">Pourquoi l'IA maintenant</div>
          <h2 className="section-title">Les bénéfices concrets de l'IA</h2>
          <p className="section-subtitle">
            L'intelligence artificielle n'est plus un luxe, c'est un levier essentiel pour rester compétitif.
          </p>
        </div>

        <div className="gains-grid">
          {gains.map((gain, index) => (
            <div 
              key={index} 
              className={`gain-card reveal ${isVisible ? 'visible' : ''}`}
              style={{ transitionDelay: `${index * 0.1}s` }}
            >
              <div className="gain-icon">{gain.icon}</div>
              <h3>{gain.title}</h3>
              <p>{gain.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Gains;
