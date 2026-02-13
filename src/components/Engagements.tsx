// src/components/Engagements.tsx
import { useEffect, useRef, useState } from 'react';

const Engagements = () => {
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

  const engagements = [
    {
      icon: '🤝',
      title: 'Collaborative',
      description: 'Travail en co-construction avec vos équipes, transparence totale sur les méthodes et les résultats à chaque étape.'
    },
    {
      icon: '🎯',
      title: 'Pragmatique',
      description: "Des solutions IA réalistes et exploitables, pensées pour s'intégrer concrètement dans votre environnement métier."
    },
    {
      icon: '📈',
      title: 'Orientée résultats',
      description: "ROI mesurable, performance continue et amélioration itérative pour garantir un impact durable sur votre activité."
    }
  ];

  return (
    <section className="section" id="engagements" ref={sectionRef}>
      <div className="container">
        <div className="section-header">
          <div className="section-eyebrow">Notre philosophie</div>
          <h2 className="section-title">Nos engagements</h2>
          <p className="section-subtitle">
            Chez Teranga IA, nous plaçons l'éthique, la transparence et la co-construction au cœur de chaque mission.
          </p>
        </div>

        <div className="engagements-grid">
          {engagements.map((engagement, index) => (
            <div 
              key={index} 
              className={`engagement-card reveal ${isVisible ? 'visible' : ''}`}
              style={{ transitionDelay: `${index * 0.1}s` }}
            >
              <div className="engagement-card-icon">{engagement.icon}</div>
              <h3>{engagement.title}</h3>
              <p>{engagement.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Engagements;
