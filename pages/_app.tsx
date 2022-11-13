import '../styles/globals.css'
import type { AppProps } from 'next/app'
import Link from 'next/link'
import MenuBookTwoToneIcon from '@mui/icons-material/MenuBookTwoTone';
import RestaurantMenuTwoToneIcon from '@mui/icons-material/RestaurantMenuTwoTone';
import AnalyticsTwoToneIcon from '@mui/icons-material/AnalyticsTwoTone';

export default function App({ Component, pageProps }: AppProps) {

  


  return (
    <>
    <nav>
      <Link href='/'><MenuBookTwoToneIcon fontSize='large' /></Link>
      <Link href='/insert'><RestaurantMenuTwoToneIcon fontSize='large'/></Link>
      <Link href='/analytics'><AnalyticsTwoToneIcon fontSize='large'/></Link>
    </nav>
    <Component {...pageProps}/>
    </>
  )
}
