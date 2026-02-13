import { getSpotifyAlbums } from '@/lib/spotify'
import { getContentBySlug } from '@/lib/markdown'
import MusicItem from './MusicItem'
import { Music as MusicDisplay } from '@/components/Music/Music'
import { Title, InternalLink } from '@/style/base'
import { Video } from '@/components/Video/Video'
import { Lyrics } from '@/components/Lyrics/Lyrics'
import { notFound } from 'next/navigation'

export default async function MusicPage({ params }) {
    const { slug } = await params
    const spotifyAlbums = await getSpotifyAlbums()
    
    // Find album by slugified name
    const album = spotifyAlbums.find(a => 
        a.name.replace(/\s+/g, '_').toLowerCase() === slug
    )

    if (!album) {
        notFound()
    }

    // Try to find matching markdown for extra metadata (video, lyrics reference)
    const extraMetadata = await getContentBySlug('music', slug)

    const artistName = album.artists[0].name
    const releaseDate = album.release_date

    return (
        <MusicItem>
            <MusicItem.Background img={album.images[0]?.url} />
            <Title style={{ color: 'white' }}>{artistName}</Title>
            <Title style={{ color: 'white' }}>{album.name}</Title>
            
            <MusicDisplay
                width="100%"
                url={album.external_urls.spotify}
            />
            
            <p style={{ marginTop: '1rem' }}>{`Released ${releaseDate}`}</p>
            
            {extraMetadata?.video && (
                <Video videoId={extraMetadata.video} />
            )}
            
            <Lyrics artist={artistName} track={album.name} />
            
            {extraMetadata?.news && (
                <InternalLink href={`/news/${extraMetadata.news}`} style={{ marginTop: '1rem', display: 'block' }}>
                    Related News
                </InternalLink>
            )}
        </MusicItem>
    )
}
