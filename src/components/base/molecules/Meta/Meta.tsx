import NextHeadSeo from 'next-head-seo'
import React from 'react'

type Props = {
  title?: string
  description?: string
  ogImage?: string
  canonical?: string
  noindex?: boolean
}

const Meta = ({ title, description, ogImage, canonical, noindex = false }: Props) => {
  return (
    <NextHeadSeo
      title={`${title ? `${title} | ` : ''}`}
      description={description ?? ''}
      customLinkTags={[
        {
          rel: 'icon',
          href: `${process.env.NEXT_PUBLIC_BASE_PATH}/favicon.ico`,
        },
      ]}
      og={{
        image: ogImage ?? `${process.env.NEXT_PUBLIC_SITE_URL}${process.env.NEXT_PUBLIC_BASE_PATH}/og.png`,
      }}
      twitter={{
        card: 'summary_large_image',
      }}
      robots={noindex ? 'noindex, nofollow' : 'index, follow'}
      canonical={canonical}
    />
  )
}

export default Meta
