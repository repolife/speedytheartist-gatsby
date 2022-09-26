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
        icon: `src/images/model.png`,
      },
    },
    {
      resolve: `gatsby-plugin-prefetch-google-fonts`,
      options: {
        fonts: [
          {
            family: `Oswald`,
            variants: [`400`, `500`, `600`, `700`],
          },
          {
            family: `Open Sans`,
            variants: [`400`, `500`, `600`, `700`]
          },
        ],
      },
    },
    {
      resolve: `gatsby-plugin-alias-imports`,
      options: {
        alias: {
          "@components": path.resolve(__dirname, './src/componets/'),
          "@src": path.resolve(__dirname, './src/'),

          "@images": path.resolve(__dirname, './src/assets/images/'),
          extensions: [
            "js", "jsx", "png", "jpg"

          ],
        },

      }
    },
    `gatsby-plugin-styled-components`,
    `gatsby-plugin-image`,
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
  ],
}
