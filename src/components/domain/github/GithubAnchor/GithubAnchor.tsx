import { RestEndpointMethodTypes } from '@octokit/rest'
import clsx from 'clsx'

import { Card } from '~/src/components/base/atoms/Card'
import { Img } from '~/src/components/base/atoms/Img'

export type Props = {
  className?: string
} & RestEndpointMethodTypes['repos']['get']['response']['data']

const GithubAnchor = ({ className, ...data }: Props) => {
  return (
    <Card as="a" className={clsx(className, '')} href={data.html_url} target="_blank" rel="noreferrer">
      <div>
        <Img src={require('~/src/images/logo-github.svg')} width={32} height={31} alt="ロゴマーク GitHub" />
        <h3 className="mt-2 text-xl">{data.name}</h3>
        {data.description && <p className="mt-1">{data.description}</p>}
      </div>
      <div className="mt-5 flex space-x-1">
        <span>☆</span>
        <span>{data.stargazers_count}</span>
      </div>
    </Card>
  )
}

export default GithubAnchor
