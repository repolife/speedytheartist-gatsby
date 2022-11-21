import React, { useState, useMemo } from 'react'
import { Main } from '@components/Content/Main'
import { Nav } from '../../Nav/Nav'
import { GlobalStyle, Container } from '../../../style/base'
import { MusicContext } from '@context/MusicContext'
import { useStaticQuery, graphql } from 'gatsby'
import { Loader } from '@components/Loader/Loader'
import { ThemeContext } from '@context/ThemeContext'

export const Layout = ({ children }) => {
    const data = useStaticQuery(graphql`
        {
            music: allSitePage(filter: { path: { glob: "/music/*" } }) {
                nodes {
                    path
                    pageContext
                }
            }
            news: allFile(filter: { sourceInstanceName: { eq: "news" } }) {
                edges {
                    node {
                        id
                        childImageSharp {
                            fluid(maxWidth: 500) {
                                src
                            }
                        }
                        childMarkdownRemark {
                            fields {
                                slug
                            }
                            frontmatter {
                                title
                                url
                                blurb
                                date
                                image
                            }
                        }
                    }
                }
            }
            site {
                siteMetadata {
                    title
                }
            }
        }
    `)

    const preparedSpotifyItems = useMemo(() => {
        if (!data) return

        const items = []

        const sorted = data.music.nodes.sort(
            (a, b) => new Date(b.release_date) - new Date(a.release_date)
        )

        sorted.map(item =>
            items.push({
                id: item.pageContext.id,
                title: item.pageContext.field.name,
                artwork: item.pageContext.field.images[0].url,
                url: item.pageContext.field.external_urls.spotify,
                pathname: item.path,
            })
        )

        const featured = items[0]

        return { items, featured }
    }, [data])

    return (
        <Container>
            <GlobalStyle />

            <Nav />
            {preparedSpotifyItems && (
                <MusicContext.Provider
                    value={{
                        music: preparedSpotifyItems.items,
                        featured: preparedSpotifyItems.featured,
                        news: data.news,
                    }}
                >
                    <Main>{!data ? <Loader /> : children}</Main>
                </MusicContext.Provider>
            )}
        </Container>
    )
}

export default Layout
