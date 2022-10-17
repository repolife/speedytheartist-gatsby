import React from 'react'
import { RootElement } from '@components/App/RootElement/RootElement'
import { SEO } from '@components/SEO/SEO'
import { NewsItem } from '@components/News/NewsItem/NewsItem'

export const News = props => {
    console.log(props)
    return <RootElement></RootElement>
}

export const Head = () => {
    return <SEO title="News page" />
}
export default News
