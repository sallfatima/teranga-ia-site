import { useEffect, useRef, useState } from 'react';

const Entreprise = () => {
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

  return (
    <section className="section entreprise" id="entreprise" ref={sectionRef}>
      <div className="container">
        <h2 className="section-title">Présentation de l'entreprise</h2>

        <div className={`mission-section${isVisible ? ' visible' : ''}`}>
          <div className="mission-content">
            <div className="mission-icon">🔍</div>
            <div>
              <h3>Notre mission</h3>
              <p>
                Aider les entreprises à exploiter pleinement le potentiel de l'IA, en
                transformant leurs données en leviers de performance, d'innovation et
                de croissance durable.
              </p>
            </div>
          </div>
        </div>

        <div className={`presentation-grid${isVisible ? ' visible' : ''}`}>
          <div className="presentation-card">
            <div className="card-header">
              <span className="card-icon">🧠</span>
              <h3>Notre expertise</h3>
            </div>
            <ul className="presentation-list">
              <li>Conception de modèles prédictifs sur mesure</li>
              <li>Analyse avancée de données & pipelines ML</li>
              <li>Intégration IA dans les systèmes existants</li>
              <li>Veille technologique & amélioration continue</li>
            </ul>
          </div>

          <div className="presentation-card">
            <div className="card-header">
              <span className="card-icon">⚙️</span>
              <h3>Nos services</h3>
            </div>
            <ul className="presentation-list">
              <li>Identification de cas d’usage IA à fort impact</li>
              <li>Collecte, nettoyage & valorisation des données</li>
              <li>Développement, entraînement & évaluation de modèles</li>
              <li>Intégration via API, dashboards & automatisations</li>
              <li>Supervision, maintenance & amélioration continue</li>
            </ul>
          </div>

          <div className="presentation-card">
            <div className="card-header">
              <span className="card-icon">🎓</span>
              <h3>Notre offre de formation</h3>
            </div>
            <ul className="presentation-list">
              <li>Initiation à l’IA & machine learning</li>
              <li>Perfectionnement : modélisation avancée, MLOps, IA éthique</li>
              <li>Ateliers pratiques sur vos propres données</li>
            </ul>
          </div>

          {/* <div className="presentation-card engagement-card">
            <div className="card-header">
              <span className="card-icon">🤝</span>
              <h3>Nos engagements</h3>
            </div>
            <p style={{ marginBottom: '1.5rem', fontStyle: 'italic' }}>
              Chez Teranga IA, nous plaçons l’éthique, la transparence et la co-construction
              au cœur de chaque mission.
            </p>
            <div className="engagement-tags">
              <span className="engagement-tag">Collaborative</span>
              <span className="engagement-tag">Pragmatique</span>
              <span className="engagement-tag">Orientée résultats</span>
            </div>
          </div> */}
        </div>
      </div>
    </section>
  );
};

export default Entreprise;
