module.exports = {
  siteMetadata: {
    title: `Louis Mason`,
    description: `Louis Mason is a Polish Australian contemporary artist and writer based in London.`,
    author: `Akinsola Lawanson`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `louis-mason`,
        short_name: `louis-mason`,
        start_url: `/`,
        background_color: `#fff`,
        theme_color: `#fff`,
        display: `minimal-ui`,
        icon: `src/images/gatsby-icon.png`, // This path is relative to the root of the site.
      },
    },
    {
      resolve: `gatsby-plugin-styled-components`,
      options: {
        // Add any options here
      },
    },
    {
      resolve: `gatsby-source-contentful`,
      options: {
        spaceId: `4o232seikgsa`,
        // Learn about environment variables: https://gatsby.dev/env-vars
        accessToken: "TGHZSAlZQ6spZQ3PJV1-6Op96KGjNx1nHENJPbrwhSE",
        // downloadLocal: true,
      },
    },
    {
      resolve: `gatsby-remark-images-contentful`,
      options: {
        // It's important to specify the maxWidth (in pixels) of
        // the content container as this plugin uses this as the
        // base for generating different widths of each image.
        maxWidth: 590,
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
