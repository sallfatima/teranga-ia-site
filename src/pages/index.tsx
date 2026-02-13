// src/pages/index.tsx
import Head from 'next/head';
import Header from '../components/Header';
import Hero from '../components/Hero';
import Gains from '../components/Gains';
import Expertise from '../components/Expertise';
import Projets from '../components/Projets';
import Offres from '../components/Offres';
import Services from '../components/Services';
import Formations from '../components/Formations';
import Engagements from '../components/Engagements';
import Contact from '../components/Contact';
import Footer from '../components/Footer';

export default function Home() {
  return (
    <>
      <Head>
        <title>Teranga IA — L'IA au service de la performance, de l'innovation et de la croissance durable</title>
        <meta
          name="description"
          content="Teranga IA accompagne les entreprises dans la conception, le développement et l'intégration de solutions IA et machine learning adaptées à leurs enjeux métiers."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
        
        {/* Google Fonts - Plus Jakarta Sans & Syne */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link 
          href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;600;700;800&family=Syne:wght@700;800&display=swap" 
          rel="stylesheet" 
        />
      </Head>

      <Header />
      <main>
        <Hero />
        <Gains />
        <Expertise />
        <Projets />
        <Offres />
        <Services />
        <Formations />
        <Engagements />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
