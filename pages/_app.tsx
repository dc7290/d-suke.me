import '~/src/styles/index.css'
import 'scroll-behavior-polyfill'
import 'lazysizes'
import 'focus-visible'

import { SSRProvider } from '@react-aria/ssr'
import { AppLayoutProps } from 'next/app'
import Script from 'next/script'
import { ReactNode } from 'react'

import { Layout } from '~/src/components/layout/Layout'
import usePageBetweenFocus from '~/src/hooks/usePageBetweenFocus'
import usePageView from '~/src/hooks/usePageView'
import { GA_ID } from '~/src/utils/gtag'

const AppWrapper = ({ children }: { children: ReactNode }) => {
  usePageBetweenFocus()
  usePageView()

  return (
    <SSRProvider>
      {GA_ID !== undefined && process.env.NODE_ENV !== 'development' && (
        <>
          <Script src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`} />
          <Script
            id="gtag"
            dangerouslySetInnerHTML={{
              __html: `window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', '${GA_ID}', {
  page_path: window.location.pathname,
});`,
            }}
          />
        </>
      )}
      {children}
    </SSRProvider>
  )
}

function MyApp({ Component, pageProps }: AppLayoutProps) {
  const layoutProps =
    typeof Component.layoutProps === 'function' ? Component.layoutProps(pageProps) : Component.layoutProps

  return (
    <AppWrapper>
      <Layout {...layoutProps}>
        <Component {...pageProps} />
      </Layout>
    </AppWrapper>
  )
}

export default MyApp
