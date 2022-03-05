import type { GetStaticProps, NextLayoutPage } from 'next'

// eslint-disable-next-line @typescript-eslint/ban-types
type Props = {}

export const getStaticProps: GetStaticProps<Props> = async () => {
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
