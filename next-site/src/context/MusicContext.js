'use client'
import React, { createContext, useState, useEffect } from 'react'
import axios from 'axios'

export const MusicContext = createContext({ music: [], featured: [], news: [], loading: false })

export const MusicContextProvider = ({ music: initialMusic, featured: initialFeatured, news, children }) => {
    const [music, setMusic] = useState(initialMusic || [])
    const [featured, setFeatured] = useState(initialFeatured || null)
    const [loading, setLoading] = useState(false)
    const fetchedRef = React.useRef(false)

    useEffect(() => {
        if (fetchedRef.current) return
        fetchedRef.current = true

        const fetchSpotify = async () => {
            setLoading(true)
            try {
                // 1. Get token from our backend
                const tokenResponse = await axios.get('/api/spotify')
                const { token, artistId } = tokenResponse.data
                
                // 2. Fetch albums and singles in parallel with per-group limits
                const groups = ['album', 'single', 'appears_on']
                const requests = groups.map(group => 
                    axios.get(`https://api.spotify.com/v1/artists/${artistId}/albums`, {
                        headers: {
                            Authorization: `Bearer ${token}`,
                            'Content-type': 'application/json',
                        },
                        params: {
                            limit: 50, // Limit per group
                            include_groups: group,
                        },
                    })
                )

                const responses = await Promise.all(requests)
                const allAlbums = responses.flatMap(res => res.data.items)
                
                const spotifyMusic = allAlbums.map(album => ({
                    id: album.id,
                    title: album.name,
                    artwork: album.images[0]?.url,
                    url: album.external_urls.spotify,
                    releaseDate: album.release_date,
                    pathname: `/music/${album.name.replace(/\s+/g, '_').toLowerCase()}`,
                }))
                
                setMusic(prevMusic => {
                    // Combine Sanity music with Spotify music, avoiding duplicates by title
                    const combined = [...prevMusic]
                    spotifyMusic.forEach(spotifyItem => {
                        const exists = combined.some(item => 
                            item.title.toLowerCase() === spotifyItem.title.toLowerCase()
                        )
                        if (!exists) {
                            combined.push(spotifyItem)
                        }
                    })

                    // Sort combined list by release date
                    return combined.sort((a, b) => {
                        const dateA = a.releaseDate ? new Date(a.releaseDate) : new Date(0)
                        const dateB = b.releaseDate ? new Date(b.releaseDate) : new Date(0)
                        return dateB - dateA
                    })
                })

                // Always set the latest Spotify release as featured (Spotify priority)
                if (spotifyMusic.length > 0) {
                    setFeatured(spotifyMusic[0])
                }
            } catch (error) {
                console.error('Error fetching Spotify albums in client:', error)
            } finally {
                setLoading(false)
            }
        }
        
        fetchSpotify()
    }, [])

    return (
        <MusicContext.Provider value={{ music, featured, news, loading }}>
            {children}
        </MusicContext.Provider>
    )
}

export default MusicContext
