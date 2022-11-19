const path = require('path')

require('dotenv').config({
    path: `.env.${process.env.NODE_ENV}`,
})
const siteUrl = process.env.URL || `https://www.speedytheartist.com`
const client_id = process.env.SPOTIFY_CLIENT_ID
module.exports = {
    siteMetadata: {
        title: 'Speedy The Artist',
        siteUrl,
        twitterUsername: '@speedytheartist',
        image: '/img/artist.png',
        description:
            'Speedy The Artist is Seattle hip hop artist born in Venezuela with a universal sound. He makes original rap music that focuses on his life experiences',
    },
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
        {
            resolve: 'gatsby-source-filesystem',
            options: {
                path: `${__dirname}/static/img`,
                name: 'uploads',
            },
        },

        {
            resolve: 'gatsby-source-filesystem',
            options: {
                path: `${__dirname}/src/assets/images`,
                name: 'images',
            },
        },
        {
            resolve: `gatsby-source-filesystem`,
            options: {
                name: `music`,
                path: `${__dirname}/content/music`,
            },
        },
        {
            resolve: `gatsby-source-filesystem`,
            options: {
                name: `news`,
                path: `${__dirname}/content/news`,
            },
        },
        {
            resolve: `gatsby-source-filesystem`,
            options: {
                name: `links`,
                path: `${__dirname}/content/links`,
            },
        },
        {
            resolve: `gatsby-source-filesystem`,
            options: {
                name: `videos`,
                path: `${__dirname}/content/video`,
            },
        },
        {
            resolve: `gatsby-source-filesystem`,
            options: {
                name: `page`,
                path: `${__dirname}/content/page`,
            },
        },
        {
            resolve: `gatsby-source-filesystem`,
            options: {
                name: `bio`,
                path: `${__dirname}/content/bio`,
            },
        },

        {
            resolve: 'gatsby-plugin-html-attributes',
            options: {
                lang: 'en',
            },
        },

        {
            resolve: `source-plugin`,
            options: {
                client_id: '7775413f6caf4913a45ea741f24dd1b7',
                client_secret: '7407e9ccaabc41ceb534a6b8639c3610',
                artistId: '3yJssZSsFFWOzJmTaNjHYV',
            },
        },
        `gatsby-plugin-styled-components`,
        `gatsby-plugin-sharp`,
        `gatsby-transformer-sharp`,
        {
            resolve: 'gatsby-plugin-sitemap',
            options: {
                query: `
              {
                allSitePage {
                  nodes {
                    id
                    path
                  }
                }
              }
              
            `,
                resolveSiteUrl: () => siteUrl,
                resolvePages: ({ allSitePage: { nodes: allPages } }) => {
                    return allPages.map(page => {
                        return { ...page }
                    })
                },
                serialize: ({ path }) => {
                    return {
                        url: path,
                    }
                },
            },
        },
        {
            resolve: 'gatsby-transformer-remark',
            options: {
                plugins: [
                    {
                        resolve: 'gatsby-remark-images',
                        options: {
                            maxWidth: 2048,
                        },
                    },
                ],
            },
        },
        {
            resolve: `gatsby-plugin-alias-imports`,
            options: {
                alias: {
                    '@components': path.resolve(__dirname, 'src/components'),
                    '@hooks': path.resolve(__dirname, 'src/hooks'),
                    '@assets': path.resolve(__dirname, 'src/assets'),
                    '@style': path.resolve(__dirname, 'src/style'),
                    '@hooks': path.resolve(__dirname, 'src/hooks'),
                    '@context': path.resolve(__dirname, 'src/context'),
                },

                extensions: [],
            },
        },
        {
            resolve: `gatsby-plugin-netlify-cms`,
            options: {
                htmlFavicon: `src/assets/images/logo.png`,
            },
        },
    ],
}
