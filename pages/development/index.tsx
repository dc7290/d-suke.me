import { Octokit, RestEndpointMethodTypes } from '@octokit/rest'
import type { GetStaticProps, NextLayoutPage } from 'next'

import { Meta } from '~/src/components/base/molecules/Meta'
import { DevelopmentGithubSection } from '~/src/components/domain/development/DevelopmentGithubSection'
import { GithubAnchorProps } from '~/src/components/domain/github/GithubAnchor'
import { getDevelopmentGitHub } from '~/src/utils/cms/getContents'

type Props = {
  githubData: GithubAnchorProps[]
}

export const getStaticProps: GetStaticProps<Props> = async () => {
  const { contents } = await getDevelopmentGitHub({ limit: 100 })

  const promises: Promise<RestEndpointMethodTypes['repos']['get']['response']['data']>[] = []
  const octokit = new Octokit({
    auth: process.env.GITHUB_ACCESS_TOKEN,
  })
  contents.forEach(({ name }) => {
    promises.push(octokit.repos.get({ owner: 'dc7290', repo: name }).then(({ data }) => data))
  })

  const githubData = await Promise.all(promises)

  return {
    props: {
      githubData,
    },
  }
}

const Page: NextLayoutPage<Props> = ({ githubData }) => {
  return (
    <>
      <Meta title="Development" />
      <DevelopmentGithubSection {...{ githubData }} />
    </>
  )
}

export default Page
