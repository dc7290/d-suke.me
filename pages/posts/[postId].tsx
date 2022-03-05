import type { GetStaticPaths, GetStaticProps, NextLayoutPage } from 'next'

export const getStaticPaths: GetStaticPaths = async () => {
  return {
    paths: [],
    fallback: false,
  }
}

// eslint-disable-next-line @typescript-eslint/ban-types
type Props = {}

export const getStaticProps: GetStaticProps<Props> = async ({ params }) => {
  if (params === undefined || typeof params.postId !== 'string') {
    throw Error('pagesのディレクトリ構造かファイル名が間違っています。')
  }

  return {
    props: {},
  }
}

const Page: NextLayoutPage<Props> = () => {
  return (
    <>
      <div></div>
    </>
  )
}

export default Page
