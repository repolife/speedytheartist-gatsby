import React from 'react'
import { RootElement } from '@components/App/RootElement/RootElement'
import { Main } from '@components/Content/Main'
import { Maintence } from '@components/App/Maintence/Maintence'
import { Featured } from '@components/Music/Featured/Featured'
import { Title } from '@style/base'
import { SEO } from '@components/SEO/SEO'
import { NewsItem } from '@components/News/NewsItem/NewsItem'

const Index = () => {
    if (process.env.INACTIVE === 'true') {
        return <Maintence title="Under Maintence" />
    }

    return <RootElement></RootElement>
}

export const Head = () => {
    return <SEO title="Home page" />
}

export default Index
