module.exports = {
  siteMetadata: {
    title: `Richard Ng`,
    description: `Portfolio page of Richard`,
    author: `@gatsbyjs`
  },
  plugins: [
    {
      resolve: `gatsby-plugin-react-svg`,
      options: {
        rule: {
          include: /assets/
        }
      }
    },
    {
      resolve: `gatsby-plugin-transition-link`,
      options: {
        layout: require.resolve(`./src/components/layout.tsx`)
      }
    },
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`
      }
    },
    `gatsby-plugin-typescript`,
    {
      resolve: `gatsby-plugin-sass`,
      options: {
        cssLoaderOptions: {
          camelCase: false
        }
      }
    },
    {
      resolve: `gatsby-plugin-postcss`,
      options: {
        postCssPlugins: [
          require('postcss-import')(),
          require('postcss-extend')(),
          require('postcss-merge-rules')({
            minPixelValue: 0,
            propList: [],
            replace: true,
            rootValue: 16,
            selectorBlackList: ['html'],
            unitPrecision: 4,
          }),
          require('postcss-preset-env')({
            stage: 1
          }),
          require('cssnano')()
        ]
      }
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/gatsby-icon.png` // This path is relative to the root of the site.
      }
    }
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ]
}
