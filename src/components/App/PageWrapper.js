import React, { useEffect, useState } from 'react'
import axios from 'axios'

import { Nav } from '../Nav/Nav'
import { GlobalStyle, Container } from '../../style/base'
import { MusicContext } from '../../context/MusicContext'
import { useStaticQuery, graphql } from 'gatsby'

export const PageWrapper = ({ children }) => {
    const [music, setMusic] = useState(null)
    const [refreshToken, setREfreshToken] = useState(null)
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState(false)

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

    const getRefreshToken = async () => {
        try {
            const response = await axios.get(`/.netlify/functions/spotify`)
            const token = response.data.data.access_token
            setREfreshToken(token)
            localStorage.setItem('token', token)
            setLoading(false)
        } catch (error) {
            setError(true)
        }
    }

    useEffect(() => {
        if (localStorage.getItem('token')) return
        setLoading(true)
        getRefreshToken()
    }, [])

    useEffect(() => {
        if (refreshToken) return
        setMusic(data)
    }, [refreshToken])

    return (
        <Container>
            <GlobalStyle />
            <Nav />
            <MusicContext.Provider value={{ music }}>
                {children}
            </MusicContext.Provider>
        </Container>
    )
}
