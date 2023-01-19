import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import { useRouter } from 'next/router'
import LayoutCms from '../components/LayoutCms'
import LayoutPublic from '../components/LayoutPublic'

export default function App({ Component, pageProps }: AppProps) {
  
  const router = useRouter()
  const { pathname } = router

  let Layout = LayoutPublic
  if (pathname.indexOf('/app') == 0 ) {
    Layout = LayoutCms
  }
  
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  )

}
