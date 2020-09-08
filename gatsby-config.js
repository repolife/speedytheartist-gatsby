/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */

module.exports = {
  /* Your site config here */
  plugins: [
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Speedy`,
        short_name: `Speedy`,
        start_url: `/`,
        background_color: `black`,
        theme_color: `#6B5211`,
        display: `standalone`,
        icon: `src/images/model.png`,
      },
    },
    `gatsby-plugin-styled-components`,
    `gatsby-plugin-react-helmet`,
  ],
}
