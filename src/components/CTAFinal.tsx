// src/components/CTAFinal.tsx
import { useEffect, useRef, useState } from 'react';

const CTAFinal = () => {
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
    <section className="cta-final" ref={sectionRef}>
      <div className="container">
        <div className={`cta-content ${isVisible ? 'visible' : ''}`}>
          <h2>Prêt à identifier vos cas d'usage à ROI rapide ?</h2>
          <p>
            Réservez un diagnostic gratuit de 30 minutes. On identifie ensemble vos priorités 
            et les premiers cas d'usage à forte valeur.
          </p>
          
          <div className="cta-buttons">
            <a href="#contact" className="cta-button">
              Réserver un diagnostic gratuit →
            </a>
            <a href="mailto:contact@teranga-ia.com" className="btn-secondary-light">
              Envoyer un email
            </a>
          </div>

          <div className="cta-contact-info">
            <span>📩 <a href="mailto:contact@teranga-ia.com">contact@teranga-ia.com</a></span>
            <span>🔗 <a href="https://www.linkedin.com/company/94286455" target="_blank" rel="noopener noreferrer">LinkedIn</a></span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTAFinal;
