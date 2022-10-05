import React from 'react'
import { PageWrapper } from '../components/App/PageWrapper'
import { Main } from '@components/Content/Main'
import { MusicList } from '@components/Music/MusicList/MusicList'

const Music = () => {
    return (
        <PageWrapper>
            <Main>
                {' '}
                <MusicList />
            </Main>
        </PageWrapper>
    )
}

export default Music
