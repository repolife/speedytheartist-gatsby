import React, { useEffect, useState, useMemo } from 'react'
import axios from 'axios'

import { Nav } from '../Nav/Nav'
import { GlobalStyle, Container } from '../../style/base'
import { MusicContext } from '../../context/MusicContext'
import { useStaticQuery, graphql } from 'gatsby'

export const PageWrapper = ({ children }) => {
    const [music, setMusic] = useState([])
    const [refreshToken, setRefreshToken] = useState('')
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState(null)

    const { GATSBY_SPOTIFY_ARTIST_ID: artistId } = process.env

    const data = useStaticQuery(graphql`
        {
            allFile(filter: { sourceInstanceName: { eq: "music" } }) {
                edges {
                    node {
                        id
                        childMarkdownRemark {
                            frontmatter {
                                title
                                image {
                                    publicURL
                                }
                                spotify
                            }
                        }
                    }
                }
            }
        }
    `)

    useEffect(() => {
        const getRefreshToken = async () => {
            try {
                const response = await axios.get(`/.netlify/functions/spotify`)
                const token = await response.data.data.access_token
                return await token
            } catch (error) {
                setError(true)
            }
        }

        getRefreshToken().then(token => setRefreshToken(token))
    }, [])

    useEffect(() => {
        if (!refreshToken) return

        const getSpotfyAlbums = async token => {
            try {
                const response = await axios.get(
                    `https://api.spotify.com/v1/artists/${artistId}/albums`,

                    {
                        headers: {
                            Authorization: `Bearer ${token}`,
                            'Content-type': 'application/json',
                        },
                        params: {
                            limit: 50,
                            offset: '1',
                        },
                    }
                )
                setMusic(response.data.items)
            } catch (error) {
                setError(error)
            }
        }

        getSpotfyAlbums(refreshToken)
    }, [refreshToken])

    useEffect(() => {
        if (!refreshToken) return
        if (refreshToken !== '') return
        setMusic(data.allFile.edges)
    }, [refreshToken])

    const preparedSpotifyItems = useMemo(() => {
        if (!refreshToken) return

        if (music.length <= 0) return

        const items = []

        if (refreshToken === '') {
            const {
                id,
                childMarkdownRemark: {
                    frontmatter: {
                        image: { publicURL },
                        title,
                        spotify,
                    },
                },
            } = music[0].node

            items.push({
                id,
                url: spotify,
                title,
                artwork: publicURL,
            })
        }

        if (refreshToken !== '') {
            music.map(item =>
                items.push({
                    id: item.id,
                    title: item.name,
                    artwork: item.images[0].url,
                    url: item.external_urls.spotify,
                })
            )
        }

        const featured = items[0]
        console.log('token', refreshToken !== null)

        console.log(items)
        console.log(featured)

        return { items, featured }
    }, [music, refreshToken])

    return (
        <Container>
            <GlobalStyle />
            <Nav />
            {preparedSpotifyItems && (
                <MusicContext.Provider
                    value={{
                        music: preparedSpotifyItems.items,
                        featured: preparedSpotifyItems.featured,
                    }}
                >
                    {children}
                </MusicContext.Provider>
            )}
        </Container>
    )
}
