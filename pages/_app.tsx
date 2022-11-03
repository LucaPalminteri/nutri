import '../styles/globals.css'
import type { AppProps } from 'next/app'
import Link from 'next/link'
import { NextUIProvider } from '@nextui-org/react';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <NextUIProvider>
    <nav>
      <Link href='/'>Home</Link>
      <Link href='/insert'>Insert</Link>
    </nav>
    <Component {...pageProps} />
    </NextUIProvider>
  )
}
