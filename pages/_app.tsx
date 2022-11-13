import '../styles/globals.css'
import type { AppProps } from 'next/app'
import Link from 'next/link'
import {supabase} from '../supabaseClient'

export default function App({ Component, pageProps }: AppProps) {

  


  return (
    <>
    <nav>
      <Link href='/'>Home</Link>
      <Link href='/insert'>Insert</Link>
      <Link href='/old-insert'>Old Insert</Link>

    </nav>
    <Component {...pageProps}/>
    </>
  )
}
