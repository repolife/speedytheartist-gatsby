import React, { useEffect, useState } from "react"
import axios from 'axios'

import { Nav } from "../Nav/Nav"
import {
    GlobalStyle,
    Container,
} from "../../style/base"
import { MusicContext } from '../../context/MusicContext';
export const PageWrapper = ({ children }) => {
    const [token, setToken] = useState(localStorage.getItem('token'))
    const [music, setMusic] = useState([]);
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState(false);


    const getRefreshToken = async () => {
        try {
            const response = await axios.get(`/.netlify/functions/spotify`);
            setToken(response.data)

        } catch (error) {
            setError(true)
        }

    }

    useEffect(() => {
        if (token) return;
        setLoading(true)
        getRefreshToken()
        setLoading(false)
    }, [token])


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