import React from 'react'
import { useQuery } from '@tanstack/react-query'
import axios from 'axios'
import { LinkStyle } from '@style/base'

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

            return response.data.result
        },
        { enabled: !!track && !!artist }
    )
    if (!isSuccess) {
        return null
    }

    if (data) {
        return (
            <a
                style={{
                    textAlign: 'center',
                    ...LinkStyle,
                    fontSize: '1em',
                    marginTop: '1em',
                }}
                href={data['artist-link']}
                target="_blank"
                rel="no_opener noreferrer"
            >
                Lyrics
            </a>
        )
    }
}

export default Lyrics
