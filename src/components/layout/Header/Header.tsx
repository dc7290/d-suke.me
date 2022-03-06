import { Popover, Transition } from '@headlessui/react'
import { MenuAlt3Icon } from '@heroicons/react/outline'
import clsx from 'clsx'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { Fragment } from 'react'

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
    <header className="fixed inset-x-0 top-0 z-50 h-16 bg-gradient-to-r from-indigo-600/50 to-fuchsia-600/50 backdrop-blur-sm lg:h-24">
      <nav className="flex h-full items-center justify-between px-4 sm:px-6 lg:px-8" aria-labelledby="mainmenulabel">
        <h2 id="mainmenulabel" className="sr-only">
          メインメニュー
        </h2>
        <Link href={pagesPath.$url()}>
          <a className="-ml-5 w-28 rounded-3xl px-5 py-3 lg:w-32 lg:transition-colors lg:duration-200 lg:hover:bg-white/10">
            <span className="sr-only">Top</span>
            <Img className="w-full" src={require('~/src/images/logo.svg')} width={308} height={51} alt="ロゴ" />
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
      <Popover as={Fragment}>
        {({ open }) => (
          <>
            <Popover.Button className="absolute top-3 right-4 flex h-10 w-10 items-center justify-center p-2 text-white lg:hidden">
              <span className="sr-only">{open ? 'メニューを閉じる' : 'メニューを開く'}</span>
              <MenuAlt3Icon className="h-6 w-6" aria-hidden="true" />
            </Popover.Button>
            <Transition
              enter="transition duration-200 ease-out"
              enterFrom="scale-95 opacity-0"
              enterTo="scale-100 opacity-100"
              leave="transition duration-200 ease-out"
              leaveFrom="scale-100 opacity-100"
              leaveTo="scale-95 opacity-0"
              as={Fragment}
            >
              <Popover.Panel className="absolute top-14 right-4 space-y-3 rounded bg-white px-5 py-2 shadow-lg ring-1 ring-black ring-opacity-5">
                {({ close }) => (
                  <div>
                    {navigation.map(({ name, href }) => (
                      <Link key={name} href={href}>
                        <a
                          className={clsx(
                            asPath.startsWith(`/${name.toLowerCase()}`) && 'text-lg text-indigo-400',
                            'font-english -ml-2 block p-2 text-black lg:transition-colors lg:duration-200'
                          )}
                          onClick={() => close()}
                        >
                          {name}
                        </a>
                      </Link>
                    ))}
                  </div>
                )}
              </Popover.Panel>
            </Transition>
          </>
        )}
      </Popover>
    </header>
  )
}

export default Header
