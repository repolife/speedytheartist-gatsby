const { createFilePath } = require('gatsby-source-filesystem')
const path = require('path')
const qs = require('qs')
const axios = require('axios')

const {
    SPOTIFY_CLIENT_ID: client_id,
    SPOTIFY_SECRET: client_secret,
    GATSBY_SPOTIFY_ARTIST_ID: artistId,
} = process.env

exports.sourceNodes = async ({
    actions,
    createContentDigest,
    createNodeId,
    getNodesByType,
}) => {
    const { createNode } = actions
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

    const access_token = await response.data.access_token

    const spotifyData = await axios.get(
        `https://api.spotify.com/v1/artists/${artistId}/albums`,

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
exports.createPages = async ({ actions, graphql }) => {
    const { createPage } = actions
    const results = await graphql(`
        {
            collections: allFile {
                distinct(field: sourceInstanceName)
                edges {
                    node {
                        id
                        sourceInstanceName
                        childMarkdownRemark {
                            id
                            fields {
                                slug
                            }
                            frontmatter {
                                title
                                image
                            }
                        }
                    }
                }
            }
            news: allFile(filter: { sourceInstanceName: { eq: "news" } }) {
                nodes {
                    sourceInstanceName
                    childMarkdownRemark {
                        frontmatter {
                            title
                            image
                            blurb
                            url
                        }
                        id
                        fields {
                            slug
                        }
                    }
                }
            }
            music: allAlbum(sort: { fields: release_date, order: DESC }) {
                nodes {
                    id
                    href
                    images {
                        url
                    }
                    name
                    artists {
                        name
                    }
                    release_date
                    album_type
                    external_urls {
                        spotify
                    }
                }
            }
        }
    `)

    // Music
    await results.data.music.nodes.forEach(node => {
        if (node.errors) {
            node.errors.forEach(e => console.error(e.toString()))
            return Promise.reject(node.errors)
        }
        const id = node.id
        const name = node.name.replace(/\s+/g, '_').toLowerCase()
        createPage({
            path: `music/${name}`,
            component: path.resolve(`src/templates/music/music.js`),
            // additional data can be passed via context
            context: {
                id,
                field: { ...node },
            },
        })
    })
    await results.data.news.nodes.forEach(node => {
        if (node.errors) {
            node.errors.forEach(e => console.error(e.toString()))
            return Promise.reject(node.errors)
        }
        const id = node.childMarkdownRemark.id
        createPage({
            path: `${node.sourceInstanceName}${node.childMarkdownRemark.fields.slug}`,
            component: path.resolve(
                `src/templates/${String(node.sourceInstanceName)}/${String(
                    node.sourceInstanceName
                )}.js`
            ),
            // additional data can be passed via context
            context: {
                id,
                field: { ...node.childMarkdownRemark.frontmatter },
            },
        })
    })
    //News Collection
    await results.data.collections.distinct.forEach(collection => {
        if (collection.errors) {
            collection.errors.forEach(e => console.error(e.toString()))
            return Promise.reject(collection.errors)
        } else {
            if (collection !== 'news') {
                return
            } else {
                const edges = results.data.collections.edges
                const nodes = edges.filter(
                    e => e.node.sourceInstanceName === 'news'
                )
                createPage({
                    path: `/collections/news`,
                    component: path.resolve(
                        `src/templates/news/collections/news.js`
                    ),
                    context: {
                        nodes: { ...nodes },
                    },
                })
            }
        }
    })
}

exports.onCreateNode = ({ node, actions, getNode }) => {
    const { createNodeField } = actions

    if (node.internal.type === `MarkdownRemark`) {
        const value = createFilePath({ node, getNode })
        createNodeField({
            name: `slug`,
            node,
            value,
        })
    }
}
