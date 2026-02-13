import { getNewsBySlug } from '@/lib/sanity-service'
import NewsItem, { Image, Blurb, Link } from './NewsItem'
import { Title, Collection } from '@/style/base'
import { notFound } from 'next/navigation'
import { PortableText } from '@portabletext/react'

export default async function NewsPage({ params }) {
    const { slug } = await params
    const content = await getNewsBySlug(slug)

    if (!content) {
        notFound()
    }

    return (
        <Collection>
            <Title style={{ color: 'white', fontSize: '2rem' }}>
                {content.title}
            </Title>
            <NewsItem>
                {content.image && <Image src={content.image} />}
                <Blurb>{content.blurb}</Blurb>
                {content.url && (
                    <Link href={content.url}>check it out</Link>
                )}
                <div style={{ textAlign: 'left', marginTop: '2rem', fontSize: '1.2rem', color: 'white' }}>
                    <PortableText value={content.content} />
                </div>
            </NewsItem>
        </Collection>
    )
}
