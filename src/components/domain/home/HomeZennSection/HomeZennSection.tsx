import { ExternalAnchor } from '~/src/components/base/atoms/ExternalAnchor'
import { PrimaryTitle } from '~/src/components/base/atoms/PrimaryTitle'

import { ZennAnchorProps } from '../../zenn/ZennAnchor'
import { ZennAnchorList } from '../../zenn/ZennAnchorList'

type Props = {
  zennColumns: ZennAnchorProps[]
}

const HomeZennSection = ({ zennColumns }: Props) => {
  return (
    <section className="mt-16 sm:mt-24">
      <PrimaryTitle title="Zenn" />
      <ZennAnchorList list={zennColumns} className="mt-5" />
      <ExternalAnchor className="mt-4" href="https://zenn.dev/d_suke">
        もっと見る
      </ExternalAnchor>
    </section>
  )
}

export default HomeZennSection
