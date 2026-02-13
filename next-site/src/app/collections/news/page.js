import { getAllContent } from '@/lib/markdown'
import { NewsItem } from '@/components/News/NewsItem/NewsItem'
import { Collection } from '@/style/base'

export const metadata = {
  title: 'News | Speedy The Artist',
}

export default async function NewsCollectionPage() {
    const newsContent = getAllContent('news')

    return (
        <Collection>
            {newsContent.map((item, index) => (
                <NewsItem key={index} item={item} />
            ))}
        </Collection>
    )
}
