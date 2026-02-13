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
      { threshold: 0.1 }
    );
    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }
    return () => observer.disconnect();
  }, []);

  const items = [
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
    <section className="section securite" id="securite" ref={sectionRef}>
      <div className="container">
        <p className="section-eyebrow">Sécurité & conformité</p>
        <h2 className="section-title">Vos données, vos règles</h2>
        <p className="section-subtitle">
          Nous garantissons la protection de vos données et le respect des réglementations en vigueur.
        </p>

        <div className={`sec-grid ${isVisible ? 'visible' : ''}`}>
          {items.map((item, index) => (
            <div key={index} className="sec-card">
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
