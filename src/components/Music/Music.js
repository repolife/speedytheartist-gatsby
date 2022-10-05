import React from 'react'
import { FaSpotify } from 'react-icons/fa'
import MusicItem from '.'

export const Music = ({ title, artwork, url }) => {
    return (
        <MusicItem>
            <MusicItem.Title>{title.toUpperCase()}</MusicItem.Title>
            <MusicItem.ArtWork src={artwork} />

            <MusicItem.Listen>
                Listen on{' '}
                <MusicItem.Link href={url}>
                    {' '}
                    <FaSpotify color="green" />
                </MusicItem.Link>
            </MusicItem.Listen>
        </MusicItem>
    )
}

export default Music
