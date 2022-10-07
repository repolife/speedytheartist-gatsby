import React, { useContext } from 'react'
import Music from '@components/Music/Music'
import MusicContext from '@context/MusicContext'
import Container from '.'

export const MusicList = () => {
    const { music } = useContext(MusicContext)
    if (!music) {
        return null
    }

    return (
        <Container>
            {music && music.map(item => <Music key={item.id} url={item.url} />)}
        </Container>
    )
}
