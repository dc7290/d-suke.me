import { ReactNode } from 'react'

import { Header } from '../Header'

export type Props = {
  children: ReactNode
}

const Layout = ({ children }: Props) => (
  <>
    <Header />
    <main className="container mx-auto px-4 pt-16 pb-16 sm:px-6 lg:max-w-5xl lg:px-8 lg:pt-24 lg:pb-24">
      {children}
    </main>
    {/* <Footer /> */}
  </>
)

export default Layout
