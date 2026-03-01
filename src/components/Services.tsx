// src/components/Services.tsx
import { useEffect, useRef, useState } from 'react';

const Services = () => {
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

  const services = [
    {
      number: 1,
      title: "Définition de cas d'usage",
      description: "Identifier les opportunités IA/Machine Learning à fort impact pour votre activité, en alignement avec vos objectifs stratégiques."
    },
    {
      number: 2,
      title: "Traitement de données",
      description: "Collecter, nettoyer, structurer et valoriser vos données pour en extraire tout le potentiel exploitable."
    },
    {
      number: 3,
      title: "Développement de modèles",
      description: "Entraîner, tester et évaluer des modèles de machine learning robustes et performants adaptés à votre cas d'usage."
    },
    {
      number: 4,
      title: "Intégration métier",
      description: "Déployer les solutions IA via API, dashboards interactifs ou automatisations intégrées à vos workflows existants."
    },
    {
      number: 5,
      title: "Supervision & maintenance",
      description: "Suivi de performance en continu, correction des dérives, et évolutions régulières pour garantir un ROI durable."
    }
  ];

  return (
    <section className="section" id="services" ref={sectionRef}>
      <div className="container">
        <div className="section-header">
          <div className="section-eyebrow">Notre approche</div>
          <h2 className="section-title">Un processus éprouvé, de bout en bout</h2>
          <p className="section-subtitle">
            De la définition du besoin au run en production, nous vous accompagnons à chaque étape.
          </p>
        </div>

        <div className="services-timeline">
          {services.map((service, index) => (
            <div 
              key={index} 
              className={`service-step reveal ${isVisible ? 'visible' : ''}`}
              style={{ transitionDelay: `${index * 0.1}s` }}
            >
              <div className="step-number">{service.number}</div>
              <div className="step-content">
                <h3>{service.title}</h3>
                <p>{service.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
