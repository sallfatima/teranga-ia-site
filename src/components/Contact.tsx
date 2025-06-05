import { useState } from 'react';

const Contact = () => {
  const [formData, setFormData] = useState({
    nom: '',
    email: '',
    entreprise: '',
    message: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert('Merci pour votre message ! Nous vous recontacterons bientôt.');
    setFormData({ nom: '', email: '', entreprise: '', message: '' });
  };

  return (
    <section className="section contact" id="contact">
      <div className="container">
        <h2 className="section-title">Contact</h2>
        <p className="section-subtitle">
          Envie d'échanger sur un projet, une idée, ou un besoin de formation ?
        </p>
        <div className="contact-info">
          <div className="contact-item">
            <span>📩</span>
            <a href="mailto:contact@terangaia.fr">contact@terangaia.fr</a>
          </div>
          <div className="contact-item">
            <span>📅</span>
            <a href="#" className="cta-button">
              Prendre rendez-vous
            </a>
          </div>
        </div>

        <form className="contact-form" onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="nom">Nom complet</label>
            <input
              type="text"
              id="nom"
              name="nom"
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
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="entreprise">Entreprise</label>
            <input
              type="text"
              id="entreprise"
              name="entreprise"
              value={formData.entreprise}
              onChange={handleChange}
            />
          </div>
          <div className="form-group">
            <label htmlFor="message">Message</label>
            <textarea
              id="message"
              name="message"
              placeholder="Parlez-nous de votre projet..."
              value={formData.message}
              onChange={handleChange}
              required
            />
          </div>
          <button type="submit" className="cta-button" style={{ width: '100%' }}>
            Envoyer le message
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
