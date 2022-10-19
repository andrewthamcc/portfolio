import * as React from 'react'
import { useSiteMetadata } from '../../hooks'

interface SEOProps {
  title?: string
  description?: string
  pathname?: string
  children?: React.ReactNode
}

export const SEO: React.FC<SEOProps> = ({
  title = '',
  description = '',
  pathname = '',
  children,
}) => {
  const {
    author,
    title: defaultTitle,
    description: defaultDescription,
    keywords,
    image,
    siteUrl,
    twitterUsername,
  } = useSiteMetadata()

  const seo = {
    author,
    keywords,
    title: title || defaultTitle,
    description: description || defaultDescription,
    image: `${siteUrl}${image}`,
    url: `${siteUrl}${pathname || ``}`,
    twitterUsername,
  }

  return (
    <>
      <title>{seo.title}</title>
      <meta name="author" content={seo.author} />
      <meta name="keywords" content={seo.keywords} />
      <meta name="description" content={seo.description} />
      <meta name="image" content={seo.image} />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={seo.title} />
      <meta name="twitter:url" content={seo.url} />
      <meta name="twitter:description" content={seo.description} />
      <meta name="twitter:image" content={seo.image} />
      <meta name="twitter:creator" content={seo.twitterUsername} />
      {children}
    </>
  )
}
