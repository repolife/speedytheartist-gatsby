'use client'
import React, { useContext } from 'react'
import News from '../index'
import MusicContext from '@context/MusicContext'
import Link from 'next/link'

export const NewsItem = ({ item }) => {
    const { news } = useContext(MusicContext)

    if (!news || news.length === 0) {
        return null
    }

    // Use the first item if none provided
    const displayItem = item || news[0]

    if (!displayItem) return null

    const { title, image, _id } = displayItem
    const slug = _id?.replace('migrated-news-', '')

    return (
        <News>
            <News.Title>
                {title}
            </News.Title>
            {image && <News.Image src={image} />}

            <Link href={`/news/${slug}`} style={{ textDecoration: 'none', width: '100%', display: 'flex', justifyContent: 'center' }}>
                <News.Button as="span" style={{ width: '80%', display: 'block' }}>
                    read more
                </News.Button>
            </Link>
        </News>
    )
}

export default NewsItem
