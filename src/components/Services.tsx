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

  const servicesList = [
    {
      icon: '🧭',
      title: "Définition de cas d'usage",
      description: 'Identifier les opportunités IA/Machine Learning à fort impact.',
    },
    {
      icon: '🧹',
      title: 'Traitement de données',
      description: 'Collecter, nettoyer, structurer et valoriser vos données.',
    },
    {
      icon: '🧪',
      title: 'Développement de modèles',
      description: 'Entraîner, tester et évaluer des modèles de ML robustes.',
    },
    {
      icon: '🔗',
      title: 'Intégration métier',
      description: 'Déployer des solutions IA via API, dashboards ou automatisations.',
    },
    {
      icon: '🔍',
      title: 'Supervision & maintenance',
      description: 'Suivi de performance, correction des dérives, évolutions continues.',
    },
  ];

  return (
    <section className="section services" id="services" ref={sectionRef}>
      <div className="container">
        <h2 className="section-title">Nos services</h2>
        <p className="section-subtitle">
          Nous intervenons sur l'ensemble du cycle de vie d'un projet IA :
        </p>

        <div className={`services-grid ${isVisible ? 'visible' : ''}`}>
          {servicesList.map((service, index) => (
            <div 
              key={index} 
              className="service-item"
              style={{ transitionDelay: `${index * 0.1}s` }}
            >
              <h3>
                <span className="service-icon">{service.icon}</span>
                {service.title}
              </h3>
              <p>{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
