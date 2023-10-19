import Layout from '@/components/Layout'
import '@/styles/globals.css'
import Script from 'next/script'
import '@/fontAwe/all.css'; // Example paths to your CSS files
import '@/fontAwe/sharp-solid.css';
import '@/fontAwe/sharp-regular.css';
import '@/fontAwe/sharp-light.css';




export default function App({ Component, pageProps }) {
  return(
    <>
    <Script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/js/bootstrap.bundle.min.js" integrity="sha384-C6RzsynM9kWDrMNeT87bh95OGNyZPhcTNXj1NW7RuBCsyN/o0jlpcV8Qyq46cDfL" crossOrigin="anonymous"></Script>
      <Component {...pageProps} />
    </>
    )
}
