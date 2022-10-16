const { createFilePath } = require('gatsby-source-filesystem')
const path = require('path')

exports.createPages = async ({ actions, graphql }) => {
    const { createPage } = actions

    return await graphql(`
        {
            news: allFile(filter: { sourceInstanceName: { eq: "news" } }) {
                nodes {
                    name
                    id
                    sourceInstanceName
                    name
                    relativePath
                    publicURL
                    childMarkdownRemark {
                        fields {
                            slug
                        }
                    }
                }
            }
        }
    `).then(result => {
        if (result.errors) {
            result.errors.forEach(e => console.error(e.toString()))
            return Promise.reject(result.errors)
        }

        const news = result.data.news.nodes

        news.forEach(node => {
            const id = node.id

            createPage({
                path: `/${node.sourceInstanceName}${node.childMarkdownRemark.fields.slug}`,
                component: path.resolve(
                    `src/templates/${String(node.sourceInstanceName)}.js`
                ),
                // additional data can be passed via context
                context: {
                    id,
                },
            })
        })
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
