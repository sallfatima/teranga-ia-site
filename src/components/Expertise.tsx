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
      { threshold: 0.1 }
    );
    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }
    return () => observer.disconnect();
  }, []);

  const expertises = [
    {
      icon: '🤖',
      title: 'LLM & RAG',
      description: 'Chatbots intelligents, assistants virtuels, génération de contenu et recherche sémantique avec GPT, Claude, Llama.',
      tags: ['OpenAI', 'LangChain', 'Pinecone']
    },
    {
      icon: '🧠',
      title: 'Machine Learning',
      description: 'Modèles prédictifs, classification, régression, clustering et détection d\'anomalies pour tous vos besoins métiers.',
      tags: ['Scikit-learn', 'TensorFlow', 'PyTorch']
    },
    {
      icon: '📊',
      title: 'Data Engineering',
      description: 'Pipelines ETL/ELT, data warehousing, orchestration et gouvernance des données à grande échelle.',
      tags: ['Airflow', 'dbt', 'Snowflake']
    },
    {
      icon: '⚙️',
      title: 'MLOps',
      description: 'Déploiement, monitoring, CI/CD pour vos modèles IA, du développement à la production industrielle.',
      tags: ['MLflow', 'Docker', 'Kubernetes']
    }
  ];

  return (
    <section className="section expertise" id="expertise" ref={sectionRef}>
      <div className="container">
        <h2 className="section-title">Notre expertise</h2>
        <p className="section-subtitle">
          Une expertise technique pointue au service de vos projets IA et data science.
        </p>

        <div className={`expertise-grid ${isVisible ? 'visible' : ''}`}>
          {expertises.map((expertise, index) => (
            <div 
              key={index} 
              className="expertise-card"
              style={{ transitionDelay: `${index * 0.1}s` }}
            >
              <div className="expertise-icon">{expertise.icon}</div>
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
