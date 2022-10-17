import React from 'react'
import { RootElement } from '@components/App/RootElement/RootElement'
import { Collection } from '@style/base'
export const News = ({ pageContext }) => {
    const { nodes } = pageContext

    if (!nodes) return loading

    console.log(nodes)
    return (
        <RootElement>
            <Collection>
                {nodes &&
                    nodes.map(node => {
                        const {
                            id,
                            childMarkdownRemark: {
                                fields: { slug },
                                frontmatter: { title, image },
                            },
                        } = node

                        return <h2>{title}</h2>
                    })}
            </Collection>
        </RootElement>
    )
}

export default News
