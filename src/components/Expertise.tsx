// src/components/Expertise.tsx
import { useEffect, useRef, useState } from 'react';

const Expertise = () => {
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

  const expertises = [
    {
      title: 'LLM & RAG',
      description: 'Chatbots intelligents, assistants virtuels, génération de contenu et recherche sémantique avec GPT, Claude, Llama.',
      tags: ['OpenAI', 'LangChain', 'Pinecone']
    },
    {
      title: 'Machine Learning',
      description: 'Modèles prédictifs, classification, régression, clustering et détection d\'anomalies pour tous vos besoins métiers.',
      tags: ['Scikit-learn', 'TensorFlow', 'PyTorch']
    },
    {
      title: 'Data Engineering',
      description: 'Pipelines ETL/ELT, data warehousing, orchestration et gouvernance des données à grande échelle.',
      tags: ['Airflow', 'dbt', 'Snowflake']
    },
    {
      title: 'MLOps',
      description: 'Déploiement, monitoring, CI/CD pour vos modèles IA, du développement à la production industrielle.',
      tags: ['MLflow', 'Docker', 'Kubernetes']
    }
  ];

  return (
    <section
      className="section section-alt"
      id="expertise"
      ref={sectionRef}
    >
      <div className="container">
        <div className="section-header">
          <div className="section-eyebrow">Nos domaines d'expertise</div>
          <h2 className="section-title">Technologies & Compétences</h2>
          <p className="section-subtitle">
            Une expertise technique pointue au service de vos projets IA et data science.
          </p>
        </div>

        <div className="expertise-grid">
          {expertises.map((expertise, index) => (
            <div 
              key={index} 
              className={`expertise-card reveal ${isVisible ? 'visible' : ''}`}
              style={{ transitionDelay: `${index * 0.1}s` }}
            >
              <h3>{expertise.title}</h3>
              <p>{expertise.description}</p>
              <div className="expertise-tags">
                {expertise.tags.map((tag, tagIndex) => (
                  <span key={tagIndex} className="expertise-tag">{tag}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Expertise;
