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
      title: 'Collaborative',
      description: 'Travail en co-construction avec vos équipes, transparence totale sur les méthodes et les résultats.'
    },
    {
      title: 'Pragmatique',
      description: "Des solutions IA réalistes et exploitables, pensées pour s'intégrer concrètement dans votre environnement métier."
    },
    {
      title: 'Orientée résultats',
      description: "ROI mesurable, performance continue et amélioration itérative pour garantir un impact durable."
    }
  ];

  return (
    <section className="section engagements" id="engagements" ref={sectionRef}>
      <div className="container">
        <h2 className="section-title">Nos engagements</h2>
        
        <div className={`engagements-grid ${isVisible ? 'visible' : ''}`}>
          {engagements.map((engagement, index) => (
            <div 
              key={index} 
              className="engagement-item"
              style={{ transitionDelay: `${index * 0.1}s` }}
            >
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
