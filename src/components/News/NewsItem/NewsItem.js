import React, { useContext } from 'react'
import News from '../index'
import MusicContext from '@context/MusicContext'

export const NewsItem = () => {
    const { news } = useContext(MusicContext)

    const {
        childImageSharp,
        childMarkdownRemark: {
            frontmatter: { blurb, url, title, image },
        },
    } = news.edges[0].node

    if (!news) {
        return null
    }
    return (
        <News>
            <News.Title>{title}</News.Title>
            <News.Image src={image} />
            <News.Button>read more</News.Button>
        </News>
    )
}

export default NewsItem
