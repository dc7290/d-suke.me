import { ExternalLinkIcon } from '@heroicons/react/outline'
import clsx from 'clsx'
import { ReactNode } from 'react'

type Props = Omit<JSX.IntrinsicElements['a'], 'target' | 'rel'> & {
  children?: ReactNode
}

const ExternalAnchor = ({ children, className, ...props }: Props) => {
  return (
    <a
      className={clsx(className, 'group relative inline-flex items-center overflow-hidden p-1 pl-0')}
      target="_blank"
      rel="noreferrer"
      {...props}
    >
      <span>{children}</span>
      <ExternalLinkIcon className="ml-2 h-5 w-5 text-white" />
      <div
        className="absolute bottom-0 left-0 h-px w-full -translate-x-full bg-white lg:transition-transform lg:duration-200 lg:group-hover:-translate-x-0"
        aria-hidden
      />
    </a>
  )
}

export default ExternalAnchor
