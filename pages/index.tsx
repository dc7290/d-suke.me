import type { GetStaticProps, NextLayoutPage } from 'next'
import Parser from 'rss-parser'

import { Meta } from '~/src/components/base/molecules/Meta'
import { HomeZennSection } from '~/src/components/domain/home/HomeZennSection'
import { ZennAnchorProps } from '~/src/components/domain/zenn/ZennAnchor'

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
    <>
      <Meta />
      <HomeZennSection zennColumns={zennColumns} />
    </>
  )
}

export default IndexPage
