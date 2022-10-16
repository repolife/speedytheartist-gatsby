import React, { useContext } from 'react'
import News from '../index'
import MusicContext from '@context/MusicContext'
import { SiNotepadplusplus } from 'react-icons/si'

export const NewsItem = () => {
    const { news } = useContext(MusicContext)
    console.log(news)

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
            <News.Image src={image} />
        </News>
    )
}

export default NewsItem
