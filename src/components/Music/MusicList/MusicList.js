import React, { useContext } from 'react'
import Music from '@components/Music/Music'
import MusicContext from '@context/MusicContext'
import { Collection, InternalLink } from '@style/base/'
export const MusicList = () => {
    const { music } = useContext(MusicContext)
    if (!music) {
        return null
    }

    return (
        <Collection>
            {music &&
                music.map(item => (
                    <React.Fragment key={item.id}>
                        <InternalLink to={item.pathname}>
                            {item.title}
                        </InternalLink>
                        <Music key={item.id} url={item.url} />
                    </React.Fragment>
                ))}
        </Collection>
    )
}
