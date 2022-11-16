import React from 'react'
import { RootElement } from '@components/App/RootElement/RootElement'
import { Music as MusicDisplay } from '@components/Music/Music'
import { SEO } from '@components/SEO/SEO'
import { Title } from '@style/base'
import MusicItem from './index'
import { FacebookShareButton } from 'react-share'
import { useLocation } from '@reach/router'
import { Lyrics } from '@components/Lyrics/Lyrics'

export const Music = ({ pageContext: { field } }) => {
    const location = useLocation()
    const mainArtistName = 'Speedy The Artist'
    const defaultArtist = field.artists[0].name
    const isMainArtist = defaultArtist === mainArtistName

    const artistDisplay = !isMainArtist
        ? `${defaultArtist} - Featuring ${mainArtistName}`
        : defaultArtist

    const type =
        field.album_type.charAt(0).toUpperCase() + field.album_type.slice(1)
    return (
        <RootElement>
            <MusicItem>
                <Title>{`${artistDisplay}`}</Title>
                <Title>{` ${field.name}`}</Title>

                <MusicDisplay width="100%" url={field.external_urls.spotify} />
                <p>{`${type} released ${field.release_date}`}</p>
            </MusicItem>
        </RootElement>
    )
}

export const Head = ({ pageContext }) => {
    return (
        <SEO
            title={`${pageContext.field.name}`}
            keywords="streaming, spotify, streaming platforms,"
            cardImage={pageContext.field.images[0].url}
        />
    )
}

export default Music
