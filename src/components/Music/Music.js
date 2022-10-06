import React from 'react'
import { FaSpotify } from 'react-icons/fa'
import MusicItem from '.'

export const Music = ({ title, artwork, url }) => {
    return (
        <MusicItem href={url} target="_blank" rel="noreferrer noopener">
            <MusicItem.Title>{title.toUpperCase()}</MusicItem.Title>
            <MusicItem.ArtWork src={artwork} />

            <MusicItem.Listen>
                <MusicItem.Blurb>Listen on</MusicItem.Blurb>

                <FaSpotify color="green" />
            </MusicItem.Listen>
        </MusicItem>
    )
}

export default Music
