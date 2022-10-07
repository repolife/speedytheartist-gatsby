import React from 'react'
import { FaSpotify } from 'react-icons/fa'
import MusicItem from '.'

export const Music = ({ url }) => {
    return (
        <iframe
            width="100%"
            height="150"
            src={`https://embed.odesli.co/?url=${url}&theme=dark`}
            frameborder="0"
            allowtransparency
            allowfullscreen
            sandbox="allow-same-origin allow-scripts allow-presentation allow-popups allow-popups-to-escape-sandbox"
        />
    )
}

export default Music
