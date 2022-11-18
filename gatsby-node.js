const { createFilePath } = require('gatsby-source-filesystem')
const fs = require('fs')
const path = require('path')
const yaml = require('js-yaml')

exports.createPages = async ({ graphql, actions }) => {
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
                    album_group
                    external_urls {
                        spotify
                    }
                }
            }
        }
    `)

    const doc = yaml.load(fs.readFileSync('./static/admin/config.yml', 'utf8'))
    // Music
    await results.data.music.nodes.forEach(node => {
        if (node.errors) {
            node.errors.forEach(e => console.error(e.toString()))
            return Promise.reject(node.errors)
        }
        const id = node.id
        const pageName = node.name.replace(/\s+/g, '_').toLowerCase()
        createPage({
            path: `music/${pageName}`,
            component: path.resolve(`src/templates/music/music.js`),
            // additional data can be passed via context
            context: {
                id,
                field: { ...node },
            },
        })

        try {
            const collections = doc.collections
            const links = collections.filter(c => c.name === 'page')[0]
            const typeField = links.fields.filter(f => f.name === 'type')[0]
            typeField.options = [...typeField.options, `${pageName}`]
        } catch (e) {
            console.log(e)
        }
    })
    fs.writeFile('./static/admin/config.yml', yaml.dump(doc), err => {
        if (err) {
            console.log('shit', err)
        }
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
