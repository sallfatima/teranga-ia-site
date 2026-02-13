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
      { threshold: 0.1 }
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
    <section className="section engagements" id="engagements" ref={sectionRef}>
      <div className="container">
        <p className="section-eyebrow-light">Notre philosophie</p>
        <h2 className="section-title-light">Nos engagements</h2>
        <p className="section-subtitle-light">
          Chez Teranga IA, nous plaçons l'éthique, la transparence et la co-construction au cœur de chaque mission.
        </p>
        
        <div className={`engagements-grid ${isVisible ? 'visible' : ''}`}>
          {engagements.map((engagement, index) => (
            <div key={index} className="engagement-item">
              <div className="engagement-icon">{engagement.icon}</div>
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
