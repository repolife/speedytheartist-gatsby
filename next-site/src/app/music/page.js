import { getSpotifyAlbums } from '@/lib/spotify'
import Music from '@/components/Music/Music'
import { Collection, Title, InternalLink } from '@/style/base'

export const metadata = {
  title: 'Music | Speedy The Artist',
}

export default async function MusicListPage() {
    const spotifyAlbums = await getSpotifyAlbums()

    return (
        <Collection>
            <Title style={{ color: 'white' }}>Discography</Title>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(250px, 1fr))', gap: '2rem', marginTop: '2rem' }}>
                {spotifyAlbums.map((album, index) => {
                    const slug = album.name.replace(/\s+/g, '_').toLowerCase()
                    return (
                        <div key={index} style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                             <InternalLink href={`/music/${slug}`}>
                                <img src={album.images[0]?.url} alt={album.name} style={{ width: '100%', borderRadius: '4px' }} />
                                <div style={{ marginTop: '0.5rem', color: 'white', fontWeight: 'bold' }}>{album.name}</div>
                             </InternalLink>
                        </div>
                    )
                })}
            </div>
        </Collection>
    )
}
