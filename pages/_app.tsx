import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import { useRouter } from 'next/router'
import LayoutCms from '../layouts/LayoutCms'
import LayoutPublic from '../layouts/LayoutPublic'
import { ThemeProvider } from 'next-themes'
import { siteMetadata } from '@/data/siteMetadata'
import { SessionProvider } from 'next-auth/react'

export default function App({ Component, pageProps: { session, ...pageProps} }: AppProps) {
  
  const router = useRouter()
  const { pathname } = router

  let Layout = LayoutPublic
  if (pathname.indexOf('/app') == 0 ) {
    Layout = LayoutCms
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
