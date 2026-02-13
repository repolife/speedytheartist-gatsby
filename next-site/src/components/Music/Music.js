'use client'
import React from 'react'
import MusicItem from '.'

export const Music = ({ url, width }) => {
    return (
        <MusicItem
            width={width}
            src={`https://embed.odesli.co/?url=${url}&theme=dark`}
            frameBorder="0"
            loading="lazy"
            allowTransparency
            allowFullScreen
            sandbox="allow-same-origin allow-scripts allow-presentation
            allow-popups allow-popups-to-escape-sandbox"
        />
    )
}

export default Music
