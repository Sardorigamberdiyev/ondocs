import '../styles/globals.sass'
import { useEffect } from 'react';
import type { AppProps } from 'next/app';
import { useRouter } from 'next/router';

function MyApp({ Component, pageProps }: AppProps) {
  const router = useRouter();

  useEffect(() => {
    console.log(router.asPath);
  })

  return <Component {...pageProps} />
}

export default MyApp
