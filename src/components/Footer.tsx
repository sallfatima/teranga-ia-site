// src/components/Footer.tsx

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-top">
          <div className="footer-brand">
            <div className="footer-logo">Teranga IA</div>
            <p className="footer-tagline">
              Solutions IA en production — LLM/RAG, agents, pipelines, modèles prédictifs et formations sur mesure.
            </p>
          </div>
          
          <nav className="footer-links">
            <a href="#gains">Bénéfices</a>
            <a href="#expertise">Expertise</a>
            <a href="#projets">Projets</a>
            <a href="#offres">Offres</a>
            <a href="#services">Services</a>
            <a href="#formations">Formations</a>
            <a href="#contact">Contact</a>
          </nav>
        </div>

        <div className="footer-bottom">
          <p>© {new Date().getFullYear()} Teranga IA. Tous droits réservés.</p>
          <div className="footer-socials">
            <a 
              href="https://www.linkedin.com/company/94286455" 
              target="_blank" 
              rel="noopener noreferrer"
              title="LinkedIn"
            >
              in
            </a>
            <a 
              href="https://twitter.com/terangaia" 
              target="_blank" 
              rel="noopener noreferrer"
              title="Twitter"
            >
              𝕏
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
