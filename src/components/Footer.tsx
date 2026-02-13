// src/components/Footer.tsx

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <p>© {new Date().getFullYear()} Teranga IA. Tous droits réservés.</p>
        <ul className="socials">
          <li>
            <a href="https://twitter.com/terangaia" target="_blank" rel="noopener noreferrer">
              Twitter
            </a>
          </li>
          <li>
            <a href="https://www.linkedin.com/company/94286455" target="_blank" rel="noopener noreferrer">
              LinkedIn
            </a>
          </li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
