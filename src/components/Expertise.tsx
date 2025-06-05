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

  return (
    <section className="section expertise" id="expertise" ref={sectionRef}>
      <div className="container">
        <h2 className="section-title">Notre expertise</h2>
        <p className={`section-subtitle${isVisible ? ' visible' : ''}`}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin sit
          amet purus nec leo fermentum ullamcorper.
        </p>
        <ul className={`expertise-list${isVisible ? ' visible' : ''}`}>
          <li>Conception de modèles IA sur mesure</li>
          <li>Analyse avancée de données & pipelines ML</li>
          <li>Intégration de solutions IA dans les systèmes existants</li>
          <li>Veille technologique & amélioration continue</li>
        </ul>
      </div>
    </section>
  );
};

export default Expertise;
