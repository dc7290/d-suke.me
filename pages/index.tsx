import type { GetStaticProps, NextLayoutPage } from 'next'
import Parser from 'rss-parser'

import { ExternalAnchor } from '~/src/components/base/atoms/ExternalAnchor'
import { ZennAnchorProps } from '~/src/components/domain/zenn/ZennAnchor'
import { ZennAnchorList } from '~/src/components/domain/zenn/ZennAnchorList'

type Props = {
  zennColumns: ZennAnchorProps[]
}

export const getStaticProps: GetStaticProps<Props> = async () => {
  const parser = new Parser()
  const feed = await parser.parseURL('https://zenn.dev/d_suke/feed?all=1')
  const zennColumns = feed.items.map(({ title, link, pubDate }) => ({ title, link, pubDate })).slice(0, 6)

  return {
    props: {
      zennColumns,
    },
  }
}

const IndexPage: NextLayoutPage<Props> = ({ zennColumns }) => {
  return (
    <div className="container mx-auto px-4 pb-16 sm:px-6 lg:px-8 lg:pb-24">
      <section className="mt-16 sm:mt-24">
        <h2 className="flex items-center space-x-4 text-2xl">Zenn</h2>
        <ZennAnchorList list={zennColumns} className="mt-5" />
        <ExternalAnchor className="mt-4" href="https://zenn.dev/d_suke">
          もっと見る
        </ExternalAnchor>
      </section>
    </div>
  )
}

export default IndexPage
