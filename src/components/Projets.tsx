// src/components/Projets.tsx
import { useEffect, useRef, useState } from 'react';

const Projets = () => {
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

  const projets = [
    {
      tag: 'LLM/RAG',
      title: 'Assistant virtuel RH',
      description: "Chatbot intelligent capable de répondre aux questions des employés sur les politiques internes, congés, formations — en s'appuyant sur une base documentaire structurée.",
      metrics: [
        { value: '-60%', label: 'Tickets support' },
        { value: '24/7', label: 'Disponibilité' }
      ]
    },
    {
      tag: 'Machine Learning',
      title: 'Prévision de la demande',
      description: "Modèle prédictif pour anticiper les ventes et optimiser les stocks en fonction des tendances saisonnières et des données historiques.",
      metrics: [
        { value: '+25%', label: 'Précision' },
        { value: '-30%', label: 'Ruptures' }
      ]
    },
    {
      tag: 'Data Pipeline',
      title: 'Pipeline data temps réel',
      description: "Architecture ETL pour centraliser et traiter en temps réel les données de plusieurs sources, avec monitoring et alertes automatiques.",
      metrics: [
        { value: '<5min', label: 'Latence' },
        { value: '99.9%', label: 'Uptime' }
      ]
    }
  ];

  return (
    <section className="section projets" id="projets" ref={sectionRef}>
      <div className="container">
        <p className="section-eyebrow">Cas d'usage</p>
        <h2 className="section-title">Projets réalisés</h2>
        <p className="section-subtitle">
          Découvrez comment nous avons aidé nos clients à concrétiser leurs ambitions IA.
        </p>

        <div className={`projets-grid ${isVisible ? 'visible' : ''}`}>
          {projets.map((projet, index) => (
            <div key={index} className="projet-card">
              <span className="projet-tag">{projet.tag}</span>
              <h3>{projet.title}</h3>
              <p>{projet.description}</p>
              <div className="projet-metrics">
                {projet.metrics.map((metric, metricIndex) => (
                  <div key={metricIndex} className="metric">
                    <span className="metric-value">{metric.value}</span>
                    <span className="metric-label">{metric.label}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projets;
