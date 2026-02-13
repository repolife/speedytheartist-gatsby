import { getBio } from '@/lib/sanity-service'
import { Title } from '@/style/base'
import { PortableText } from '@portabletext/react'

export const metadata = {
  title: 'Bio | Speedy The Artist',
}

export default async function BioPage() {
    const content = await getBio()

    if (!content) {
        return (
            <div style={{ padding: '2rem', color: 'white' }}>
                <Title style={{ color: 'white', fontSize: '2rem' }}>Bio</Title>
                <div style={{ marginTop: '2rem', color: 'white' }}>Bio not found.</div>
            </div>
        )
    }

    return (
        <div style={{ padding: '2rem', color: 'white' }}>
            <Title style={{ color: 'white', fontSize: '2rem' }}>{content.title}</Title>
            <div style={{ marginTop: '2rem', fontSize: '1.4rem', lineHeight: '1.8', maxWidth: '800px', color: 'white' }}>
                <PortableText value={content.content} />
            </div>
        </div>
    )
}
