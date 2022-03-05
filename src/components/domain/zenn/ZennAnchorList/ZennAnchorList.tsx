import clsx from 'clsx'

import { ZennAnchor, ZennAnchorProps } from '../ZennAnchor'

type Props = {
  list: ZennAnchorProps[]
  className?: string
}

const ZennAnchorList = ({ list, className }: Props) => {
  return (
    <ul className={clsx(className, 'grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3')}>
      {list.map((column) => (
        <li key={column.title}>
          <ZennAnchor {...column} className="flex h-full flex-col justify-between" />
        </li>
      ))}
    </ul>
  )
}

export default ZennAnchorList
