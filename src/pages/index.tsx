// src/pages/index.tsx
import Head from 'next/head'
import Header from '../components/Header'
import Hero from '../components/Hero'
import Entreprise from '../components/Entreprise'
import Expertise from '../components/Expertise'
import Services from '../components/Services'
import Formations from '../components/Formations'
import Engagements from '../components/Engagements'
/*************  ✨ Windsurf Command ⭐  *************/
  /**
   * Fonction appelée lors du scroll pour détecter la section en cours
   * et mettre à jour l'état de la navigation.
   *
   * @function
   */
/*******  ef4efd3a-a73a-40be-8855-b1dd696b5616  *******/import Contact from '../components/Contact'
import Footer from '../components/Footer'

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
      </Head>

      <Header />
      <main>
        {/* ← Ces lignes ci-dessous doivent apparaître dans ton index.tsx */}
        <Hero />
        <Entreprise />
        <Expertise />
        <Services />
        <Formations />
        <Engagements />
        <Contact />
      </main>
      <Footer />
    </>
  )
}
