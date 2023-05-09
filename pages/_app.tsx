import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { useRouter } from 'next/router'
import LayoutCms from '../components/layouts/LayoutCms'
import LayoutPublic from '../components/layouts/LayoutPublic'
import { ThemeProvider } from 'next-themes'
import { siteMetadata } from '../data/siteMetadata'
import { SessionProvider } from 'next-auth/react'
import LayoutEmpty from '@/components/layouts/EmptyLayout'

export default function App({ Component, pageProps: { session, ...pageProps} }: AppProps) {
  
  const router = useRouter()
  const { pathname } = router

  let Layout = LayoutPublic
  if (pathname.indexOf('/app') == 0 ) {
    Layout = LayoutCms
  }

  if (pathname.indexOf('/auth') == 0) {
    Layout = LayoutEmpty
  }


  
  return (
    <SessionProvider session={session}>
      <ThemeProvider attribute="class" defaultTheme={siteMetadata.theme}>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </ThemeProvider>
    </SessionProvider>
  )

}
