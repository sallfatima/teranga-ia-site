// src/components/Contact.tsx
import { useState, useRef, useEffect, FormEvent, ChangeEvent } from 'react';

const Contact = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [formData, setFormData] = useState({
    nom: '',
    email: '',
    entreprise: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );
    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }
    return () => observer.disconnect();
  }, []);

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');

    try {
      const response = await fetch('https://formspree.io/f/xeelabyw', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          name: formData.nom,
          email: formData.email,
          company: formData.entreprise,
          message: formData.message
        })
      });

      if (response.ok) {
        setSubmitStatus('success');
        setFormData({ nom: '', email: '', entreprise: '', message: '' });
      } else {
        setSubmitStatus('error');
      }
    } catch (error) {
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="section contact" id="contact" ref={sectionRef}>
      <div className="container">
        <p className="section-eyebrow">Parlons de votre projet</p>
        <h2 className="section-title">Contact</h2>
        <p className="section-subtitle">
          Envie d'échanger sur un projet, une idée, ou un besoin de formation ? Contactez-nous.
        </p>

        <div className="contact-layout">
          <div className="contact-left">
            <h3>Prenons contact</h3>
            <p>Nous vous répondons sous 24h pour organiser un premier échange gratuit et sans engagement.</p>

            <div className="contact-info-item">
              <div className="contact-info-icon">📩</div>
              <span><a href="mailto:contact@teranga-ia.com">contact@teranga-ia.com</a></span>
            </div>

            <div className="contact-info-item">
              <div className="contact-info-icon">📅</div>
              <span><a href="#">Prendre rendez-vous (Calendly) →</a></span>
            </div>

            <div className="contact-info-item">
              <div className="contact-info-icon">🔗</div>
              <span>
                <a href="https://www.linkedin.com/company/94286455" target="_blank" rel="noopener noreferrer">
                  Suivez-nous sur LinkedIn
                </a>
              </span>
            </div>
          </div>

          <form className="contact-form" onSubmit={handleSubmit}>
            {submitStatus === 'success' && (
              <div className="form-success">
                ✅ Merci pour votre message ! Nous vous recontacterons sous 24h.
              </div>
            )}
            
            {submitStatus === 'error' && (
              <div className="form-error">
                ❌ Une erreur est survenue. Veuillez réessayer ou nous contacter directement par email.
              </div>
            )}

            <div className="form-row">
              <div className="form-group">
                <label htmlFor="nom">Nom complet</label>
                <input 
                  type="text" 
                  id="nom" 
                  name="nom" 
                  placeholder="Votre nom" 
                  value={formData.nom} 
                  onChange={handleChange} 
                  required 
                />
              </div>
              <div className="form-group">
                <label htmlFor="email">Adresse email</label>
                <input 
                  type="email" 
                  id="email" 
                  name="email" 
                  placeholder="vous@exemple.com" 
                  value={formData.email} 
                  onChange={handleChange} 
                  required 
                />
              </div>
            </div>

            <div className="form-group">
              <label htmlFor="entreprise">Entreprise</label>
              <input 
                type="text" 
                id="entreprise" 
                name="entreprise" 
                placeholder="Nom de votre entreprise" 
                value={formData.entreprise} 
                onChange={handleChange} 
              />
            </div>

            <div className="form-group">
              <label htmlFor="message">Message</label>
              <textarea 
                id="message" 
                name="message" 
                placeholder="Parlez-nous de votre projet, vos besoins en IA..." 
                value={formData.message} 
                onChange={handleChange} 
                required 
              />
            </div>

            <button type="submit" className="form-submit" disabled={isSubmitting}>
              {isSubmitting ? 'Envoi en cours...' : 'Envoyer le message →'}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;