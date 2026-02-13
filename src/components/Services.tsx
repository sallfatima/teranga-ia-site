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
      { threshold: 0.1 }
    );
    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }
    return () => observer.disconnect();
  }, []);

  const services = [
    {
      num: '1',
      icon: '🧭',
      title: "Définition de cas d'usage",
      description: "Identifier les opportunités IA/Machine Learning à fort impact pour votre activité, en alignement avec vos objectifs stratégiques."
    },
    {
      num: '2',
      icon: '🧹',
      title: 'Traitement de données',
      description: "Collecter, nettoyer, structurer et valoriser vos données pour en extraire tout le potentiel exploitable."
    },
    {
      num: '3',
      icon: '🧪',
      title: 'Développement de modèles',
      description: "Entraîner, tester et évaluer des modèles de machine learning robustes et performants adaptés à votre cas d'usage."
    },
    {
      num: '4',
      icon: '🔗',
      title: 'Intégration métier',
      description: "Déployer les solutions IA via API, dashboards interactifs ou automatisations intégrées à vos workflows existants."
    },
    {
      num: '5',
      icon: '🔍',
      title: 'Supervision & maintenance',
      description: "Suivi de performance en continu, correction des dérives, et évolutions régulières pour garantir un ROI durable."
    }
  ];

  return (
    <section className="section services" id="services" ref={sectionRef}>
      <div className="container">
        <p className="section-eyebrow">Notre approche</p>
        <h2 className="section-title">Un processus éprouvé, de bout en bout</h2>
        <p className="section-subtitle">
          De la définition du besoin au run en production, nous vous accompagnons à chaque étape.
        </p>

        <div className={`services-grid ${isVisible ? 'visible' : ''}`}>
          {services.map((service, index) => (
            <div key={index} className="service-item">
              <div className="service-number">{service.num}</div>
              <div className="service-content">
                <h3>
                  <span className="service-icon">{service.icon}</span>
                  {service.title}
                </h3>
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
