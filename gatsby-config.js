const path = require('path')

require('dotenv').config({
    path: `.env.${process.env.NODE_ENV}`,
})

module.exports = {
    siteMetadata: {
        title: 'Speedy The Artist',
        siteUrl: `https://www.speedytheartist.com`,
        twitterUsername: '@speedytheartist',
        image: './src/assets/images/artist.png',
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
                name: `bio`,
                path: `${__dirname}/content/bio`,
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
        `gatsby-plugin-styled-components`,
        `gatsby-plugin-image`,
        `gatsby-plugin-sharp`,
        `gatsby-transformer-sharp`,
        `gatsby-plugin-netlify-cms`,
        `gatsby-transformer-remark`,
    ],
}
