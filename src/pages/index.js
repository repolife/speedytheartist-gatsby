import React from 'react'
import { PageWrapper } from '@components/App/PageWrapper'
import { Main } from '@components/Content/Main'
import { Maintence } from '@components/App/Maintence/Maintence'
import { Music } from '@components/Music/Music'

const Index = () => {
    if (process.env.INACTIVE === 'true') {
        return <Maintence title="Under Maintence" />
    }

    return (
        <PageWrapper>
            <Main title="Speedy The Artist">
                <Music />
            </Main>
        </PageWrapper>
    )
}

export const Head = () => {
    return (
        <link
            href="https://fonts.googleapis.com/css?family=Open+Sans:400,600,700,800|Oswald:400,500,600,700'"
            rel="stylesheet"
        />
    )
}

export default Index
