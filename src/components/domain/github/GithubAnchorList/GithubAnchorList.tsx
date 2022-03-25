import clsx from 'clsx'

import { GithubAnchor, GithubAnchorProps } from '../GithubAnchor'

type Props = {
  list: GithubAnchorProps[]
  className?: string
}

const GithubAnchorList = ({ list, className }: Props) => {
  return (
    <ul className={clsx(className, 'mt-5 grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3')}>
      {list.map((data) => (
        <li key={data.name}>
          <GithubAnchor {...data} className="flex h-full flex-col justify-between" />
        </li>
      ))}
    </ul>
  )
}

export default GithubAnchorList
