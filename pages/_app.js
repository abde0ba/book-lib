import Layout from '@/components/Layout'
import '@/styles/globals.css'
import Script from 'next/script'
import all from '@/fontAwe/all.css';
import solid from '@/fontAwe/sharp-solid.css';
import regular from '@/fontAwe/sharp-regular.css';
import light from '@/fontAwe/sharp-light.css';



export default function App({ Component, pageProps }) {
  return(
    <>
    <Script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/js/bootstrap.bundle.min.js" integrity="sha384-C6RzsynM9kWDrMNeT87bh95OGNyZPhcTNXj1NW7RuBCsyN/o0jlpcV8Qyq46cDfL" crossOrigin="anonymous"></Script>

    <link href={all} rel="stylesheet" />
    <link href={solid} rel="stylesheet" />
    <link href={regular} rel="stylesheet" />
    <link href={light} rel="stylesheet" />
      <Component {...pageProps} />
    </>
    )
}
