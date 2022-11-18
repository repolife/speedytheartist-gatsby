import React, { useState, useContext } from 'react'
import { RootElement } from '@components/App/RootElement/RootElement'
import { Music as MusicDisplay } from '@components/Music/Music'
import { SEO } from '@components/SEO/SEO'
import { Title } from '@style/base'
import MusicItem from './index'
import { FacebookShareButton } from 'react-share'
import { useLocation } from '@reach/router'
import { Lyrics } from '@components/Lyrics/Lyrics'
import ThemeContext from '@context/ThemeContext'

export const Music = ({ pageContext: { field } }) => {
    const mainArtistName = 'Speedy The Artist'
    const defaultArtist = field.artists[0].name

    const [image, setImage] = useState({
        src: field.images[0].url,
        title: `${defaultArtist} - ${field.name} - album cover`,
        alt: `${defaultArtist} - ${field.name} - album cover`,
    })

    console.log(field)

    const artist =
        field.album_group === 'appears_on'
            ? `${defaultArtist}, ${mainArtistName}`
            : field.artists[0].name
    const group =
        field.album_group.charAt(0).toUpperCase() + field.album_group.slice(1)
    return (
        <ThemeContext.Provider
            value={{
                image,
                setImage,
            }}
        >
            <RootElement>
                <MusicItem>
                    <Title>{artist}</Title>
                    <Title>{` ${field.name}`}</Title>

                    <MusicDisplay
                        width="100%"
                        url={field.external_urls.spotify}
                    />
                    <p>{`Released ${field.release_date}`}</p>
                </MusicItem>
            </RootElement>
        </ThemeContext.Provider>
    )
}

export const Head = ({ pageContext }) => {
    const {
        field: { name, images, artists },
    } = pageContext
    return (
        <SEO
            title={`${name}`}
            keywords="streaming, spotify, streaming platforms,"
            cardImage={images[0].url}
            description={`Check out ${name} from ${artists[0].name}`}
        />
    )
}

export default Music
