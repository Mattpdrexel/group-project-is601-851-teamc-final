import Head from 'next/head'
import '../styles/globals.scss';
import NavigationBar from '../components/NavigationBar';

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head >
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
