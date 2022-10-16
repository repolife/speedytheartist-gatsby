import React, { useContext } from 'react'
import News from '../index'
import MusicContext from '@context/MusicContext'
import { navigate } from 'gatsby'

export const NewsItem = ({ item }) => {
    const { news } = useContext(MusicContext)

    const {
        childImageSharp,
        childMarkdownRemark: {
            fields: { slug },
            frontmatter: { blurb, url, title, image },
        },
    } = news.edges[0].node

    if (!news) {
        return null
    }
    return (
        <News>
            <News.Title>{item?.title ?? title}</News.Title>
            <News.Image src={item?.image ?? image} />

            <News.Button onClick={() => navigate(`/news${item?.slug ?? slug}`)}>
                read more
            </News.Button>
        </News>
    )
}

export default NewsItem
