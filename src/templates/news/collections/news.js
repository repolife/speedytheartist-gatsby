import React from 'react'
import { RootElement } from '@components/App/RootElement/RootElement'
import { SEO } from '@components/SEO/SEO'
import { NewsItem } from '@components/News/NewsItem/NewsItem'
import { Collection } from '@style/base'
export const News = ({ pageContext }) => {
    const { nodes } = pageContext

    if (!nodes) return null

    return (
        <RootElement>
            <Collection>
                {' '}
                {nodes &&
                    Object.keys(nodes).map(node => {
                        const { id } = nodes[node].node

                        return <NewsItem key={id} item={nodes[node].node} />
                    })}
            </Collection>
        </RootElement>
    )
}
export const Head = () => {
    return <SEO title="News page" />
}
export default News
