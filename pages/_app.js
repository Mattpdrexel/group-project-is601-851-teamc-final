
import Head from 'next/head'
import '../styles/globals.scss';
import Layout from '../components/NavigationBar';

function MyApp({ Component, PageProps }) {
  return (
    <>
      <Head>
        <title>Rise & Grind</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="icon" type="image/x-icon" href="/images/favicon.ico" />

        <script async src="https://www.googletagmanager.com/gtag/js?id=G-MLLX2NVVX8"></script>
        <script>
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-MLLX2NVVX8');
          `}
        </script>
        
      </Head>
      <Layout>
      <Component {...pageProps} />
    </Layout>

    </>
  )
}

export default MyApp;
