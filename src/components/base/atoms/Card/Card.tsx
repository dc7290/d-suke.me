import clsx from 'clsx'
import { createElement } from 'react'

type Props<T extends keyof JSX.IntrinsicElements> = JSX.IntrinsicElements[T] & {
  as?: T
}

const Card = <T extends keyof JSX.IntrinsicElements>({ as, className, ...props }: Props<T>) => {
  return createElement(as ?? 'div', {
    className: clsx(
      className,
      'rounded-md border border-white px-6 py-5 lg:transition-[shadow_transform] lg:hover:-translate-x-1 lg:hover:-translate-y-1 lg:hover:shadow-[4px_4px_rgb(245,208,254)]'
    ),
    ...props,
  })
}

export default Card
