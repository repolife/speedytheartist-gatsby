import React, { useState } from 'react'
import MusicItem from '.'
import { Loader } from '@components/Loader/Loader'
export const Music = ({ url, width }) => {
    return (
        <MusicItem
            width={width}
            src={`https://embed.odesli.co/?url=${url}&theme=dark`}
            frameborder="0"
            loading="lazy"
            allowtransparency
            allowfullscreen
            sandbox="allow-same-origin allow-scripts allow-presentation
            allow-popups allow-popups-to-escape-sandbox"
        />
    )
}

export default Music
