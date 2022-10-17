import React, { useContext } from 'react'
import Music from '@components/Music/Music'
import MusicContext from '@context/MusicContext'
import { Collection } from '@style/base/'

export const MusicList = () => {
    const { music } = useContext(MusicContext)
    if (!music) {
        return null
    }

    return (
        <Collection>
            {music && music.map(item => <Music key={item.id} url={item.url} />)}
        </Collection>
    )
}
