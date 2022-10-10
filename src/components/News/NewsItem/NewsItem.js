import React, { useContext } from 'react'
import News from '../index'
import MusicContext from '@context/MusicContext'

export const NewsItem = () => {
    const { news } = useContext(MusicContext)
    console.log(news)

    const {
        childMarkdownRemark: {
            frontmatter: { blurb, url, title },
        },
    } = news.edges[0].node

    return <News></News>
}

export default NewsItem
