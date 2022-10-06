import React from 'react'
import { RootElement } from '@components/App/RootElement/RootElement'
import { Main } from '@components/Content/Main'
import { Maintence } from '@components/App/Maintence/Maintence'
import { Featured } from '@components/Music/Featured/Featured'
import { Title } from '@style/base'

const Index = () => {
    if (process.env.INACTIVE === 'true') {
        return <Maintence title="Under Maintence" />
    }

    return (
        <RootElement>
            <Title>Feature Music</Title>
            <Featured />
        </RootElement>
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
