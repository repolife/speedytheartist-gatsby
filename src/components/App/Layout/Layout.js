import React, { useEffect, useState, useMemo } from 'react'
import axios from 'axios'
import { Main } from '@components/Content/Main'
import { Nav } from '../../Nav/Nav'
import { GlobalStyle, Container } from '../../../style/base'
import { MusicContext } from '@context/MusicContext'
import { useStaticQuery, graphql } from 'gatsby'
import { useQuery } from '@tanstack/react-query'
import { Loader } from '@components/Loader/Loader'

export const Layout = ({ children }) => {
    // const { GATSBY_SPOTIFY_ARTIST_ID: artistId } = process.env

    // const data = useStaticQuery(graphql`
    //     {
    //         music: allFile(filter: { sourceInstanceName: { eq: "music" } }) {
    //             edges {
    //                 node {
    //                     id
    //                     childMarkdownRemark {
    //                         frontmatter {
    //                             title
    //                             image
    //                             spotify
    //                         }
    //                     }
    //                 }
    //             }
    //         }
    //         news: allFile(filter: { sourceInstanceName: { eq: "news" } }) {
    //             edges {
    //                 node {
    //                     id
    //                     childMarkdownRemark {
    //                         frontmatter {
    //                             title
    //                             url
    //                             blurb
    //                             date
    //                             image
    //                         }
    //                     }
    //                 }
    //             }
    //         }
    //     }
    // `)

    // const {
    //     isLoading: loadingToken,
    //     data: token,
    //     isSuccess: tokenSuccess,
    // } = useQuery(['token'], async () => {
    //     const response = await axios.get(`/.netlify/functions/spotify`)
    //     const token = await response.data?.data?.access_token
    //     return await token
    // })

    // const {
    //     data: albums,
    //     isLoading: loadingAlbums,
    //     isSuccess: albumSuccess,
    // } = useQuery(
    //     ['albums', token],
    //     async () => {
    //         const response = await axios.get(
    //             `https://api.spotify.com/v1/artists/${artistId}/albums`,

    //             {
    //                 headers: {
    //                     Authorization: `Bearer ${token}`,
    //                     'Content-type': 'application/json',
    //                 },
    //                 params: {
    //                     limit: 50,
    //                     market: 'US',
    //                     groups: 'single,album',
    //                 },
    //             }
    //         )
    //         const items = await response.data?.items
    //         return await items
    //     },
    //     { enabled: !!token }
    // )

    // const preparedSpotifyItems = useMemo(() => {
    //     if (!data) return

    //     const items = []

    //     if (!albums && data) {
    //         const {
    //             id,
    //             childMarkdownRemark: {
    //                 frontmatter: { image, title, spotify },
    //             },
    //         } = data.music.edges[0].node

    //         items.push({
    //             id,
    //             url: spotify,
    //             title,
    //             artwork: image,
    //         })
    //     }

    //     if (albums) {
    //         const sorted = albums.sort(
    //             (a, b) => new Date(b.release_date) - new Date(a.release_date)
    //         )
    //         sorted.map(item =>
    //             items.push({
    //                 id: item.id,
    //                 title: item.name,
    //                 artwork: item.images[0].url,
    //                 url: item.external_urls.spotify,
    //             })
    //         )
    //     }

    //     const featured = items[0]

    //     return { items, featured }
    // }, [albums, data])

    return (
        <Container>
            <GlobalStyle />
            <Nav />
            {/* {preparedSpotifyItems && (
                <MusicContext.Provider
                    value={{
                        music: preparedSpotifyItems.items,
                        featured: preparedSpotifyItems.featured,
                        news: data.news,
                    }}
                >
                    <Main>{!albums && !data ? <Loader /> : children}</Main>
                </MusicContext.Provider>
            )} */}
        </Container>
    )
}

export default Layout
