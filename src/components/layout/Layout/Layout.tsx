import { ReactNode } from 'react'

import { Header } from '../Header'

export type Props = {
  children: ReactNode
}

const Layout = ({ children }: Props) => (
  <>
    <Header />
    <main className="pt-16 lg:pt-24">{children}</main>
    {/* <Footer /> */}
  </>
)

export default Layout
