// src/pages/_app.tsx
import type { AppProps } from 'next/app';
import '../styles/globals.css';  // ← Assurez-vous QUE CE FICHIER existe et contient TOUT le CSS du HTML statique

function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}

export default MyApp;
