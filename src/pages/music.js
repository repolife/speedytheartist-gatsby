import React from 'react'
import { RootElement } from '@components/App/RootElement/RootElement'
import { MusicList } from '@components/Music/MusicList/MusicList'
import { SEO } from '@components/SEO/SEO'

const Music = () => {
    return (
        <RootElement>
            {' '}
            <MusicList />{' '}
        </RootElement>
    )
}

export const Head = () => {
    return <SEO title="Music page" />
}

export default Music
