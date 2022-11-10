const path = require('path')
const qs = require('qs')
const axios = require('axios')
require('dotenv')
exports.sourceNodes = async (
    { actions, createContentDigest, createNodeId },
    pluginOptions
) => {
    const { createNode } = actions

    const auth_token = Buffer.from(
        `${pluginOptions.client_id}:${pluginOptions.client_secret}`,
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

    const access_token = await response.data.access_token

    const spotifyData = await axios.get(
        `https://api.spotify.com/v1/artists/${pluginOptions.artistId}/albums`,

        {
            headers: {
                Authorization: `Bearer ${access_token}`,
                'Content-type': 'application/json',
            },
            params: {
                limit: 50,
                market: 'US',
                groups: 'single,album',
            },
        }
    )

    const ALBUM_NODE_TYPE = `Album`
    spotifyData.data.items.forEach(album =>
        createNode({
            ...album,
            id: createNodeId(`${ALBUM_NODE_TYPE}-${album.id}`),
            parent: null,
            children: [],
            internal: {
                type: ALBUM_NODE_TYPE,
                contentDigest: createContentDigest(album),
            },
        })
    )
}
exports.onPostBuild = async ({ cache }) => {
    await cache.set(`key`, `value`)
    const cachedValue = await cache.get(`key`)
    console.log(cachedValue) // logs `value`
}
