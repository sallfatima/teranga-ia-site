// src/components/Contact.tsx
import { useState, useRef, useEffect, FormEvent, ChangeEvent } from 'react';
import styles from '../styles/Contact.module.css';

const Contact = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [formData, setFormData] = useState({
    nom: '',
    email: '',
    entreprise: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
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
    setTimeout(() => {
      alert('Merci pour votre message ! Nous vous recontacterons sous 24h.');
      setFormData({ nom: '', email: '', entreprise: '', message: '' });
      setIsSubmitting(false);
    }, 1000);
  };

  return (
    <section className={styles.contact} id="contact" ref={sectionRef}>
      <div className={styles.container}>
        <div className={styles.sectionHeader}>
          <div className={styles.sectionEyebrow}>Parlons de votre projet</div>
          <h2 className={styles.sectionTitle}>Contact</h2>
          <p className={styles.sectionSubtitle}>
            Envie d'échanger sur un projet, une idée, ou un besoin de formation ? Contactez-nous.
          </p>
        </div>

        <div className={styles.contactLayout}>
          <div className={styles.contactLeft}>
            <h3>Prenons contact</h3>
            <p>Nous vous répondons sous 24h pour organiser un premier échange gratuit et sans engagement.</p>

            <div className={styles.contactInfoItem}>
              <div className={styles.contactInfoIcon}>📩</div>
              <span><a href="mailto:contact@teranga-ia.com">contact@teranga-ia.com</a></span>
            </div>

            <div className={styles.contactInfoItem}>
              <div className={styles.contactInfoIcon}>📅</div>
              <span><a href="#">Prendre rendez-vous (Calendly) →</a></span>
            </div>

            <div className={styles.contactInfoItem}>
              <div className={styles.contactInfoIcon}>🔗</div>
              <span>
                <a href="https://www.linkedin.com/company/94286455" target="_blank" rel="noopener noreferrer">
                  Suivez-nous sur LinkedIn
                </a>
              </span>
            </div>
          </div>

          <form className={styles.contactForm} onSubmit={handleSubmit}>
            <div className={styles.formRow}>
              <div className={styles.formGroup}>
                <label htmlFor="nom">Nom complet</label>
                <input type="text" id="nom" name="nom" placeholder="Votre nom" value={formData.nom} onChange={handleChange} required />
              </div>
              <div className={styles.formGroup}>
                <label htmlFor="email">Adresse email</label>
                <input type="email" id="email" name="email" placeholder="vous@exemple.com" value={formData.email} onChange={handleChange} required />
              </div>
            </div>

            <div className={styles.formGroup}>
              <label htmlFor="entreprise">Entreprise</label>
              <input type="text" id="entreprise" name="entreprise" placeholder="Nom de votre entreprise" value={formData.entreprise} onChange={handleChange} />
            </div>

            <div className={styles.formGroup}>
              <label htmlFor="message">Message</label>
              <textarea id="message" name="message" placeholder="Parlez-nous de votre projet, vos besoins en IA..." value={formData.message} onChange={handleChange} required />
            </div>

            <button type="submit" className={styles.formSubmit} disabled={isSubmitting}>
              {isSubmitting ? 'Envoi en cours...' : 'Envoyer le message →'}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
