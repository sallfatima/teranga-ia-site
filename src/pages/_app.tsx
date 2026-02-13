// src/pages/_app.tsx
import type { AppProps } from 'next/app';
import Script from 'next/script';
import '../styles/globals.css';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      {/* Google Analytics */}
      <Script
        src="https://www.googletagmanager.com/gtag/js?id=G-PW782X4LCD"
        strategy="afterInteractive"
      />
      <Script id="google-analytics" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'G-PW782X4LCD');
        `}
      </Script>
      
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
