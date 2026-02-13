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
      { threshold: 0.1, rootMargin: '0px 0px -50px 0px' }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section className="cta-final" ref={sectionRef}>
      <div className="container">
        <h2 className={`section-title reveal ${isVisible ? 'visible' : ''}`}>
          Prêt à identifier vos cas d'usage à ROI rapide ?
        </h2>
        
        <p 
          className={`section-subtitle reveal ${isVisible ? 'visible' : ''}`}
          style={{ transitionDelay: '0.05s' }}
        >
          Réservez un diagnostic gratuit de 30 minutes. On identifie ensemble vos priorités 
          et les premiers cas d'usage à forte valeur.
        </p>

        <div 
          className={`cta-actions reveal ${isVisible ? 'visible' : ''}`}
          style={{ transitionDelay: '0.1s' }}
        >
          <a href="#contact" className="btn-cta-white">
            Réserver un diagnostic gratuit →
          </a>
          <a href="mailto:contact@teranga-ia.com" className="btn-cta-ghost">
            Envoyer un email
          </a>
        </div>

        <div 
          className={`cta-contact reveal ${isVisible ? 'visible' : ''}`}
          style={{ transitionDelay: '0.15s' }}
        >
          <span>
            📩 <a href="mailto:contact@teranga-ia.com">contact@teranga-ia.com</a>
          </span>
          <span>
            🔗 <a 
              href="https://www.linkedin.com/company/94286455" 
              target="_blank" 
              rel="noopener noreferrer"
            >
              LinkedIn
            </a>
          </span>
        </div>
      </div>
    </section>
  );
};

export default CTAFinal;
