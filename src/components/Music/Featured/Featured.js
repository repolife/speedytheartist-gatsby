import React, { useContext } from 'react'
import Music from '@components/Music/Music'
import MusicContext from '@context/MusicContext'

export const Featured = () => {
    const { featured } = useContext(MusicContext)
    if (!featured) {
        return null
    }

    return (
        <Music
            title={featured.title}
            artwork={featured.artwork}
            url={featured.url}
        />
    )
}
