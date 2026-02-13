// src/components/Securite.tsx
import { useEffect, useRef, useState } from 'react';

const Securite = () => {
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

  const securiteItems = [
    {
      icon: '🏢',
      title: 'Hébergement sécurisé',
      description: 'Cloud, cloud privé ou on-premise selon vos contraintes réglementaires et de souveraineté.'
    },
    {
      icon: '🔑',
      title: "Contrôle d'accès",
      description: 'Gestion fine des droits, journalisation complète, séparation stricte des environnements.'
    },
    {
      icon: '📋',
      title: 'Conformité RGPD',
      description: "Minimisation des données, politiques de rétention, droit à l'oubli et traçabilité totale."
    },
    {
      icon: '✅',
      title: 'Qualité & fiabilité',
      description: 'Tests automatisés, évaluation continue, garde-fous et supervision humaine pour limiter les risques.'
    }
  ];

  return (
    <section 
      className="section" 
      id="securite" 
      ref={sectionRef}
      style={{ background: 'var(--surface-alt)' }}
    >
      <div className="container">
        <div className="section-header">
          <div className="section-eyebrow">Sécurité & conformité</div>
          <h2 className="section-title">Vos données, vos règles</h2>
          <p className="section-subtitle">
            Nous garantissons la protection de vos données et le respect des réglementations en vigueur.
          </p>
        </div>

        <div className="sec-grid">
          {securiteItems.map((item, index) => (
            <div 
              key={index} 
              className={`sec-card reveal ${isVisible ? 'visible' : ''}`}
              style={{ transitionDelay: `${index * 0.05}s` }}
            >
              <div className="sec-ic">{item.icon}</div>
              <h3>{item.title}</h3>
              <p>{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Securite;
