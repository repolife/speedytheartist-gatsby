import React from 'react'
import { useQuery } from '@tanstack/react-query'
import axios from 'axios'

export const Lyrics = ({ artist, track }) => {
    const { isLoading, data, isError, isSuccess } = useQuery(
        ['artist', 'track', 'apikey'],
        async () => {
            const response = await axios.get(
                `https://api.musixmatch.com/ws/1.1/matcher.lyrics.get`,
                {
                    params: {
                        q_track: track,
                        q_artist: artist,
                        apikey: process.env.GATSBY_MUSIX_MATCH_API_KEY,
                    },
                }
            )
        },
        { enabled: !!track && !!artist }
    )
    if (!isSuccess) {
        return null
    }
}

export default Lyrics
