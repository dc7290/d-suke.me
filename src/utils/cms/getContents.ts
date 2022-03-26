import { MicroCMSQueries } from 'microcms-js-sdk'

import { ApiDevelopmentGitHubType } from '~/src/types/microCMS/development-github'
import { apiClient } from '~/src/utils/cms/apiClient'

export const getDevelopmentGitHub = (queries?: MicroCMSQueries) =>
  apiClient.getList<ApiDevelopmentGitHubType>({ endpoint: 'development-github', queries })
