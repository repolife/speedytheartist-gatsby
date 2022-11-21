import React from 'react'
import { useQuery } from '@tanstack/react-query'
import axios from 'axios'

export const Lyrics = ({ artist, track }) => {
    const { isLoading, data, isError, isSuccess } = useQuery(
        ['artist', 'track', 'apikey'],
        async () => {
            const response = await axios.get(
                `${process.env.GATSBY_LYRICS_URL}`,
                {
                    headers: { 'Content-Type': 'applicaton/json' },
                    params: {
                        uid: process.env.GATSBY_LYRICS_UID,
                        tokenid: process.env.GATSBY_LYRICS_TOKEN,
                        term: track,
                        artist,
                        format: 'json',
                    },
                }
            )

            console.log(response)
        },
        { enabled: !!track && !!artist }
    )
    if (!isSuccess) {
        return null
    }

    if (data) {
        return <h2>lyrics</h2>
    }
}

export default Lyrics
