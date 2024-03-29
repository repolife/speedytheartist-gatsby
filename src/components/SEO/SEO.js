import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'

export const SEO = ({ title, keywords, cardImage, description }) => {
    const {
        site: { siteMetadata },
    } = useStaticQuery(graphql`
        {
            site {
                siteMetadata {
                    title
                    description
                    twitterUsername
                    image
                    siteUrl
                }
            }
        }
    `)

    const image = cardImage ?? `${siteMetadata.siteUrl}${siteMetadata.image}`
    const twitterDescription = description ?? siteMetadata.description

    return (
        <>
            <title>
                {title} | {siteMetadata.title}
            </title>
            <meta name="title" content={siteMetadata.title} />

            <meta
                property="og:description"
                content={siteMetadata.description}
            />

            <meta name="title" content={siteMetadata.title} />
            <meta name="description" content={siteMetadata.description} />
            {/* <!-- Open Graph / Facebook --> */}

            <meta property="og:type" content="website" />
            <meta property="og:url" content={siteMetadata.siteUrl} />
            <meta property="og:title" content={siteMetadata.title} />
            <meta
                property="og:description"
                content={siteMetadata.description}
            />
            <meta property="og:image" content={image} />
            {/* <!-- Twitter --> */}

            <meta property="twitter:card" content="summary_large_image" />
            <meta property="twitter:url" content={siteMetadata.siteUrl} />
            <meta property="twitter:title" content={siteMetadata.title} />
            <meta property="twitter:description" content={twitterDescription} />
            <meta property="twitter:image" content={image} />
            <meta
                name="keywords"
                content={`${siteMetadata.title}, ${title}, ${keywords} Music, Rap, Seattle, Venezuela`}
            />
            {/* Google font CDN */}
            <link
                href="https://fonts.googleapis.com/css?family=Open+Sans:400,600,700,800|Oswald:400,500,600,700'"
                rel="stylesheet"
            />
        </>
    )
}
export default SEO
