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
import Securite from '../components/Securite';
import Engagements from '../components/Engagements';
import CTAFinal from '../components/CTAFinal';
import Contact from '../components/Contact';
import Footer from '../components/Footer';

export default function Home() {
  return (
    <>
      <Head>
        <title>Teranga IA — L'IA au service de la performance et de la croissance durable</title>
        <meta
          name="description"
          content="Teranga IA conçoit et intègre des solutions LLM/RAG, agents IA, data pipelines, modèles prédictifs et formations — du cadrage à l'industrialisation."
        />
        <meta name="keywords" content="intelligence artificielle, machine learning, IA, conseil, formation, LLM, RAG, agents IA, données, entreprise" />
        <meta property="og:title" content="Teranga IA — Solutions IA en production" />
        <meta property="og:description" content="Solutions IA sur mesure pour transformer vos données en leviers de performance et de croissance durable." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://teranga-ia.com" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
        
        {/* Google Fonts - Roboto */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link 
          href="https://fonts.googleapis.com/css2?family=Roboto:wght@400;500;600;700&display=swap" 
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
        <Securite />
        <Engagements />
        <CTAFinal />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
