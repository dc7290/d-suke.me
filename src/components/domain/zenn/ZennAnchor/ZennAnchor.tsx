import clsx from 'clsx'

import { Card } from '~/src/components/base/atoms/Card'
import { Img } from '~/src/components/base/atoms/Img'
import { formatDate, formatDateARIA } from '~/src/utils/dateformat'

export type Props = {
  title?: string
  link?: string
  pubDate?: string
  className?: string
}

const ZennAnchor = ({ title, link, pubDate, className }: Props) => {
  return (
    <Card as="a" href={link} target="_blank" rel="noreferrer" className={clsx(className, '')}>
      <div>
        <Img src={require('~/src/images/logo-zenn.svg')} width={24} height={24} alt="ロゴ Zenn" />
        <h3 className="mt-1 text-lg">{title}</h3>
      </div>
      {pubDate && (
        <div className="mt-1 font-mono text-sm tracking-sm">
          <span aria-hidden>{formatDate(pubDate)}</span>
          <span className="sr-only">{formatDateARIA(pubDate)}</span>
        </div>
      )}
    </Card>
  )
}

export default ZennAnchor
