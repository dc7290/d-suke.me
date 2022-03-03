import { MicroCMSQueries } from 'microcms-js-sdk'

import { apiClient } from '~/src/utils/cms/apiClient'

export const get = (queries?: MicroCMSQueries) => apiClient.getList({ endpoint: '', queries })
