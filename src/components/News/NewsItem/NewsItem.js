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
            frontmatter: { title, image },
        },
    } = news.edges[0].node

    if (!news) {
        return null
    }

    return (
        <News>
            <News.Title>
                {item?.childMarkdownRemark.frontmatter.title ?? title}
            </News.Title>
            <News.Image
                src={item?.childMarkdownRemark.frontmatter.image ?? image}
            />

            <News.Button
                onClick={() =>
                    navigate(
                        `/news${item?.childMarkdownRemark.fields?.slug ?? slug}`
                    )
                }
            >
                read more
            </News.Button>
        </News>
    )
}

export default NewsItem
