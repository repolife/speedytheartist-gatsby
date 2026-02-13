'use client'
import React, { useContext } from 'react'
import MusicContext from '@context/MusicContext'
import { NewsItem } from '@/components/News/NewsItem/NewsItem'
import { Collection, Title } from '@/style/base'

export default function NewsPage() {
    const { news } = useContext(MusicContext)

    return (
        <Collection>
            <Title style={{ color: 'white', paddingLeft: '0', textAlign: 'center' }}>All News</Title>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))', gap: '2rem', marginTop: '2rem', width: '100%' }}>
                {news.map((item) => (
                    <div key={item._id} style={{ display: 'flex', justifyContent: 'center' }}>
                        <NewsItem item={item} />
                    </div>
                ))}
            </div>
        </Collection>
    )
}
