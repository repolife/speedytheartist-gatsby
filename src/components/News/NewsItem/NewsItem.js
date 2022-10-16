import React, { useContext } from 'react'
import News from '../index'
import MusicContext from '@context/MusicContext'
import { Link } from 'gatsby'

export const NewsItem = () => {
    const { news } = useContext(MusicContext)

    const {
        childImageSharp,
        childMarkdownRemark: {
            fields: { slug },
            frontmatter: { blurb, url, title, image },
        },
    } = news.edges[0].node

    console.log(slug)
    if (!news) {
        return null
    }
    return (
        <News>
            <News.Title>{title}</News.Title>
            <News.Image src={image} />
            <Link to={`/news${slug}`}>
                {' '}
                <News.Button>read more</News.Button>
            </Link>
        </News>
    )
}

export default NewsItem
