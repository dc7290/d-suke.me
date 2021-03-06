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
      title={`${title ? `${title} | d-suke.me` : 'd-suke.me'}`}
      description={description ?? 'でぃーすけの情報をまとめたサイト'}
      og={{
        image: ogImage ?? 'https://d-suke.me/og.png',
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
