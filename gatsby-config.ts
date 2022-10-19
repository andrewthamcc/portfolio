import type { GatsbyConfig } from 'gatsby'

const config: GatsbyConfig = {
  siteMetadata: {
    author: `Andrew Tham`,
    description: `Portfolio of Toronto based developer Andrew Tham.`,
    image: `seo.png`,
    keywords: `web devloper, web dev, developer, dev, portfolio, toronto, andrew tham, tham, frontend developer, frontend, javascript, html, css, react developer, react, node`,
    title: `Andrew Tham`,
    twitterUsername: `@andrew_tham`,
    siteUrl: `http://andrewtham.cc`,
  },
  // More easily incorporate content into your pages through automatic TypeScript type generation and better GraphQL IntelliSense.
  // If you use VSCode you can also use the GraphQL plugin
  // Learn more at: https://gatsby.dev/graphql-typegen
  graphqlTypegen: true,
  plugins: [
    'gatsby-plugin-styled-components',
    'gatsby-plugin-image',
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        icon: 'src/images/icon.png',
      },
    },
    'gatsby-plugin-sharp',
    'gatsby-transformer-sharp',
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'images',
        path: './src/images/',
      },
      __key: 'images',
    },
  ],
}

export default config
