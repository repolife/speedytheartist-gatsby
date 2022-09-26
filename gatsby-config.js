const path = require('path')

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
        icon: `src/assets/images/logo.png`,
      },
    },
    `gatsby-plugin-styled-components`,
    `gatsby-plugin-image`,
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
  ],
}
