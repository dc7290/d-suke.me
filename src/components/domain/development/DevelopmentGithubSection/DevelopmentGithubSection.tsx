import { ExternalAnchor } from '~/src/components/base/atoms/ExternalAnchor'
import { PrimaryTitle } from '~/src/components/base/atoms/PrimaryTitle'

import { GithubAnchorProps } from '../../github/GithubAnchor'
import { GithubAnchorList } from '../../github/GithubAnchorList'

type Props = {
  githubData: GithubAnchorProps[]
}

const DevelopmentGithubSection = ({ githubData }: Props) => {
  return (
    <section className="mt-16 sm:mt-24">
      <PrimaryTitle title="GitHub" />
      <GithubAnchorList list={githubData} />
      <ExternalAnchor className="mt-4" href="https://github.com/dc7290">
        もっと見る
      </ExternalAnchor>
    </section>
  )
}

export default DevelopmentGithubSection
