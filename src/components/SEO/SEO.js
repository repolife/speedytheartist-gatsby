import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'

export const SEO = ({ title }) => {
    const data = useStaticQuery(graphql`
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

    return (
        <>
            <title>
                {title} | {data.site.siteMetadata.title}
            </title>
            <link
                href="https://fonts.googleapis.com/css?family=Open+Sans:400,600,700,800|Oswald:400,500,600,700'"
                rel="stylesheet"
            />
            <meta name="title" content={data.site.siteMetadata.title} />
            <meta
                name="description"
                content={data.site.siteMetadata.description}
            />

            <meta property="og:type" content="website" />
            <meta property="og:url" content={data.site.siteMetadata.siteUrl} />
            <meta property="og:title" content={data.site.siteMetadata.title} />
            <meta
                property="og:description"
                content={data.site.siteMetadata.description}
            />
            <meta property="og:image" content={data.site.siteMetadata.image} />

            <meta
                property="twitter:card"
                content={data.site.siteMetadata.image}
            />
            <meta
                property="twitter:url"
                content={data.site.siteMetadata.siteUrl}
            />
            <meta
                property="twitter:title"
                content={data.site.siteMetadata.title}
            />
            <meta
                property="twitter:description"
                content={data.site.siteMetadata.description}
            />
            <meta property="twitter:image" content="" />
        </>
    )
}
export default SEO
