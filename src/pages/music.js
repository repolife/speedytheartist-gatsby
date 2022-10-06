import React from 'react'
import { RootElement } from '@components/App/RootElement/RootElement'
import { Main } from '@components/Content/Main'
import { MusicList } from '@components/Music/MusicList/MusicList'

const Music = () => {
    return (
        <RootElement>
            {' '}
            <MusicList />
        </RootElement>
    )
}

export default Music
