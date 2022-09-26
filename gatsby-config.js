require(`dotenv`).config()

const shouldAnalyseBundle = process.env.ANALYSE_BUNDLE

module.exports = {
  siteMetadata: {
    // You can overwrite values here that are used for the SEO component
    // You can also add new values here to query them like usual
    // See all options: https://github.com/LekoArts/gatsby-themes/blob/main/themes/gatsby-theme-emilia-core/gatsby-config.js
    siteTitle: `Gavin Hailey's Photography`,
    siteTitleAlt: `Gavin Hailey's Photography Portfolio`,
    siteHeadline: `Gavin Hailey's Photography`,
    siteUrl: `https://photo.gavinhailey.dev`,
    siteDescription: `Collection of my hobbiest photography over the last few years`,
    siteLanguage: `en`,
    siteImage: `/banner.jpg`,
    author: `@gavinhailey`,
  },
  plugins: [
    {
      resolve: `@lekoarts/gatsby-theme-emilia`,
      // See the theme's README for all available options
      options: {
        name: `Gavin Hailey`,
        location: `Denver, CO`,
        socialMedia: [{
          href: `https://github.com/gavinhailey`,
          title: `GitHub`
        },
        {
          href: `https://www.instagram.com/gavinhailey/`,
          title: `Instagram`
        },
        { 
          href: `https://www.linkedin.com/in/gavin-hailey/`,
          title: `LinkedIn`
        }],
        showThemeAuthor: false,
        formatString: `MM/DD/YYYY`,
      },
    },
    {
      resolve: `gatsby-plugin-sitemap`,
      options: {
        output: `/`,
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Emilia - @lekoarts/gatsby-theme-emilia`,
        short_name: `Emilia`,
        description: `Minimalistic portfolio/photography site with masonry grid, page transitions and big images. Themeable with Theme UI.`,
        start_url: `/`,
        background_color: `#fff`,
        // This will impact how browsers show your PWA/website
        // https://css-tricks.com/meta-theme-color-and-trickery/
        // theme_color: `#3182ce`,
        display: `standalone`,
        icons: [
          {
            src: `/android-chrome-192x192.png`,
            sizes: `192x192`,
            type: `image/png`,
          },
          {
            src: `/android-chrome-512x512.png`,
            sizes: `512x512`,
            type: `image/png`,
          },
        ],
      },
    },
    `gatsby-plugin-gatsby-cloud`,
    shouldAnalyseBundle && {
      resolve: `gatsby-plugin-webpack-bundle-analyser-v2`,
      options: {
        analyzerMode: `static`,
        reportFilename: `_bundle.html`,
        openAnalyzer: false,
      },
    },
  ].filter(Boolean),
}
