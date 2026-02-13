import axios from 'axios'
import qs from 'qs'

export async function getSpotifyToken() {
    const client_id = process.env.SPOTIFY_CLIENT_ID
    const client_secret = process.env.SPOTIFY_SECRET

    if (!client_id || !client_secret) {
        throw new Error('Spotify credentials missing')
    }

    const auth_token = Buffer.from(
        `${client_id}:${client_secret}`,
        'utf-8'
    ).toString('base64')

    const token_url = 'https://accounts.spotify.com/api/token'
    const data = qs.stringify({ grant_type: 'client_credentials' })

    const response = await axios.post(token_url, data, {
        headers: {
            Authorization: `Basic ${auth_token}`,
            'Content-Type': 'application/x-www-form-urlencoded',
        },
    })

    return response.data.access_token
}

export async function getSpotifyAlbums() {
        const artistId = process.env.SPOTIFY_ARTIST_ID
    try {
        const access_token = await getSpotifyToken()

        const spotifyData = await axios.get(
            `https://api.spotify.com/v1/artists/${artistId}/albums`,
            {
                headers: {
                    Authorization: `Bearer ${access_token}`,
                    'Content-type': 'application/json',
                },
                params: {
                    limit: 50,
                    include_groups: 'album,single',
                },
            }
        )

        // Sort by release date descending
        const items = spotifyData.data.items
        
        console.log(`Fetched ${items.length} items from Spotify for ${artistId}`)
        items.forEach(item => {
            console.log(`- ${item.name} (${item.release_date}) [${item.id}]`)
        })

        items.sort((a, b) => {
            const dateA = a.release_date ? new Date(a.release_date) : new Date(0)
            const dateB = b.release_date ? new Date(b.release_date) : new Date(0)
            return dateB - dateA
        })

        return items
    } catch (error) {
        console.error('Error fetching Spotify data:', error.message)
        return []
    }
}
