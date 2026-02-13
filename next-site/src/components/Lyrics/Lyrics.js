'use client'
import React from 'react'
import { useQuery } from '@tanstack/react-query'
import axios from 'axios'
import { LinkStyle } from '@/style/base'

export const Lyrics = ({ artist, track }) => {
    const { data, isSuccess } = useQuery({
        queryKey: ['lyrics', artist, track],
        queryFn: async () => {
            const response = await axios.get(
                process.env.NEXT_PUBLIC_LYRICS_URL || 'https://www.stands4.com/services/v2/lyrics.php',
                {
                    headers: { 'Content-Type': 'application/json' },
                    params: {
                        uid: process.env.NEXT_PUBLIC_LYRICS_UID,
                        tokenid: process.env.NEXT_PUBLIC_LYRICS_TOKEN,
                        term: track,
                        artist,
                        format: 'json',
                    },
                }
            )

            return response.data.result
        },
        enabled: !!track && !!artist
    })

    if (!isSuccess || !data) {
        return null
    }

    return (
        <a
            style={{
                textAlign: 'center',
                ...LinkStyle,
                fontSize: '1rem',
                marginTop: '1rem',
                display: 'block',
                textDecoration: 'none'
            }}
            href={data['artist-link']}
            target="_blank"
            rel="noopener noreferrer"
        >
            Lyrics
        </a>
    )
}

export default Lyrics
