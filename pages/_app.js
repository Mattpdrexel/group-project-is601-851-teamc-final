import Head from 'next/head'
import '../styles/globals.scss';
import NavigationBar from '../components/NavigationBar';

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        {/* HTML Meta Tags */}
        <title>Rise & Grind</title>
        <meta name="description" content="Rise with us. Grind with us. Start your day the 'Regular Joe' way. Experience high-quality, authentic coffee without the frills. Fuel your everyday pursuits with Rise & Grind." />

        {/* Facebook Meta Tags */}
        <meta property="og:url" content="https://group-project-is601-851-teamc-final.vercel.app/" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Rise & Grind" />
        <meta property="og:description" content="Rise with us. Grind with us. Start your day the 'Regular Joe' way. Experience high-quality, authentic coffee without the frills. Fuel your everyday pursuits with Rise & Grind." />
        <meta property="og:image" content="https://raw.githubusercontent.com/Mattpdrexel/group-project-is601-851-teamc-final/1f8f7bf568950d63430a482463115107509686c2/public/images/logos/Vistaprint/logo_image_only.png" />

        {/* Twitter Meta Tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta property="twitter:domain" content="group-project-is601-851-teamc-final.vercel.app" />
        <meta property="twitter:url" content="https://group-project-is601-851-teamc-final.vercel.app/" />
        <meta name="twitter:title" content="Rise & Grind" />
        <meta name="twitter:description" content="Rise with us. Grind with us. Start your day the 'Regular Joe' way. Experience high-quality, authentic coffee without the frills. Fuel your everyday pursuits with Rise & Grind." />
        <meta name="twitter:image" content="https://raw.githubusercontent.com/Mattpdrexel/group-project-is601-851-teamc-final/1f8f7bf568950d63430a482463115107509686c2/public/images/logos/Vistaprint/logo_image_only.png" />

        {/* Google Tag Manager */}
        <script async src="https://www.googletagmanager.com/gtag/js?id=G-MLLX2NVVX8"></script>
        <script dangerouslySetInnerHTML={{
          __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-MLLX2NVVX8');
          `
        }}>
        </script>
      </Head>

      <div className="defaultBackground">
        <div className="navWrapper">
          <NavigationBar />
        </div>
        <Component {...pageProps} />
      </div>
    </>
  )
}

export default MyApp;
