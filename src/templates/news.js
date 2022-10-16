import React from 'react'
import { RootElement } from '@components/App/RootElement/RootElement'

export const News = ({ pageContext }) => {
    console.log(pageContext)
    return (
        <RootElement>
            <h2>News</h2>
        </RootElement>
    )
}

export default News
