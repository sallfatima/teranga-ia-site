// src/components/Footer.tsx
import styles from '../styles/Footer.module.css';

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.footerTop}>
          <div>
            <div className={styles.footerBrand}>Teranga IA</div>
            <p className={styles.footerTagline}>
              Solutions IA en production — LLM/RAG, agents, pipelines, modèles prédictifs et formations sur mesure.
            </p>
          </div>
          <nav className={styles.footerLinks}>
            <a href="#gains">Bénéfices</a>
            <a href="#expertise">Expertise</a>
            <a href="#projets">Projets</a>
            <a href="#offres">Offres</a>
            <a href="#services">Services</a>
            <a href="#formations">Formations</a>
            <a href="#contact">Contact</a>
          </nav>
        </div>

        <div className={styles.footerBottom}>
          <span className={styles.footerCopy}>
            © {new Date().getFullYear()} Teranga IA. Tous droits réservés.
          </span>
          <div className={styles.footerSocials}>
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
