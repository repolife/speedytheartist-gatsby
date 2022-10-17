const { createFilePath } = require('gatsby-source-filesystem')
const path = require('path')

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
        }
    `)

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
