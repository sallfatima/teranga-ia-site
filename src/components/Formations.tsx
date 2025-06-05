import { useEffect, useRef, useState } from 'react';

const Formations = () => {
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
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  const formationsList = [
    "Initiation à l’intelligence artificielle et au machine learning",
    "Perfectionnement : modélisation avancée, MLOps, IA éthique",
    "Ateliers pratiques sur vos propres données",
  ];

  return (
    <section className="section formations" id="formations" ref={sectionRef}>
      <div className="container">
        <h2 className="section-title">Formations IA</h2>
        <p className={`section-subtitle${isVisible ? ' visible' : ''}`}>
          Découvrez nos parcours de formation adaptés à tous les niveaux en
          intelligence artificielle et machine learning.
        </p>

        <ul className={`formations-list${isVisible ? ' visible' : ''}`}>
          {formationsList.map((item, idx) => (
            <li key={idx}>{item}</li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default Formations;
