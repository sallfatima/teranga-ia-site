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
    <section className="section gains" id="gains" ref={sectionRef}>
      <div className="container">
        <p className="section-eyebrow">Pourquoi l'IA maintenant</p>
        <h2 className="section-title">Les bénéfices concrets de l'IA</h2>
        <p className="section-subtitle">
          L'intelligence artificielle n'est plus un luxe, c'est un levier essentiel pour rester compétitif.
        </p>

        <div className={`presentation-grid ${isVisible ? 'visible' : ''}`}>
          {benefices.map((benefice, index) => (
            <div key={index} className="presentation-card">
              <div className="card-header">
                <span className="card-icon">{benefice.icon}</span>
                <h3>{benefice.title}</h3>
              </div>
              <p>{benefice.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Gains;
