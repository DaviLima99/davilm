import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import { useRouter } from 'next/router'
import LayoutCms from '../layouts/LayoutCms'
import LayoutPublic from '../layouts/LayoutPublic'
import { ThemeProvider } from 'next-themes'
import { siteMetadata } from '@/data/siteMetadata'

export default function App({ Component, pageProps }: AppProps) {
  
  const router = useRouter()
  const { pathname } = router

  let Layout = LayoutPublic
  if (pathname.indexOf('/app') == 0 ) {
    Layout = LayoutCms
  }
  
  return (
    <ThemeProvider attribute="class" defaultTheme={siteMetadata.theme}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </ThemeProvider>
  )

}
