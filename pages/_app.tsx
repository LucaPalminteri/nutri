import '../styles/globals.css'
import type { AppProps } from 'next/app'
import Link from 'next/link'

export default function App({ Component, pageProps }: AppProps) {

  const style = {backgroundColor: '#DEDEDE', padding: '4px 8px', borderRadius: '8px'}
  let isHome = true

if(window.location.pathname == '/') isHome = true
else isHome = false

  return (
    <>
    <nav>
      <Link href='/' style={isHome ? style : {padding: '4px'}}>Home</Link>
      <Link href='/insert' style={!isHome ? style : {padding: '4px'}}>Insert</Link>
    </nav>
    <Component {...pageProps} />
    </>
  )
}
