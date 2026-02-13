import { getSpotifyToken } from '@/lib/spotify'
import { NextResponse } from 'next/server'

export async function GET() {
    try {
        const token = await getSpotifyToken()
        return NextResponse.json({ 
            token,
            artistId: process.env.SPOTIFY_ARTIST_ID
        })
    } catch (error) {
        console.error('Spotify Token API Route Error:', error)
        return NextResponse.json({ error: 'Failed to get Spotify token' }, { status: 500 })
    }
}
