import clsx from 'clsx'
import Link from 'next/link'
import { useRouter } from 'next/router'

import { pagesPath } from '~/src/utils/$path'

import { Img } from '../../base/atoms/Img'

const navigation = [
  { name: 'Development', href: pagesPath.development.$url() },
  { name: 'Posts', href: pagesPath.posts.$url() },
  { name: 'Profile', href: pagesPath.profile.$url() },
]

const Header = () => {
  const { asPath } = useRouter()

  return (
    <header className="fixed inset-x-0 top-0 h-16 bg-gradient-to-r from-indigo-600/50 to-fuchsia-600/50 backdrop-blur-sm lg:h-24">
      <nav className="flex h-full items-center justify-between px-4 sm:px-6 lg:px-8" aria-labelledby="mainmenulabel">
        <h2 id="mainmenulabel" className="sr-only">
          メインメニュー
        </h2>
        <Link href={pagesPath.$url()}>
          <a className="w-10 rounded-full md:w-14 lg:w-16 lg:transition-colors lg:duration-200 lg:hover:bg-white/20">
            <span className="sr-only">Top</span>
            <Img className="w-full" src={require('~/src/images/logo.svg')} width={40} height={40} alt="ロゴ" />
          </a>
        </Link>
        <div className="hidden space-x-2 lg:flex">
          {navigation.map(({ name, href }) => (
            <Link key={name} href={href}>
              <a
                className={clsx(
                  asPath.startsWith(`/${name.toLowerCase()}`) && 'bg-indigo-400/60',
                  'font-english flex items-center justify-center rounded-3xl px-5 pt-1 pb-1.5 text-base text-white lg:transition-colors lg:duration-200 lg:hover:bg-indigo-400/60'
                )}
              >
                {name}
              </a>
            </Link>
          ))}
        </div>
      </nav>
    </header>
  )
}

export default Header
