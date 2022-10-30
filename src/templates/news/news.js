import React from 'react'
import { RootElement } from '@components/App/RootElement/RootElement'
import { useStaticQuery, graqphl } from 'gatsby'
import { Title } from '@style/base'
import NewsItem from './index'

export const News = ({ pageContext }) => {
    const { id, field } = pageContext

    return (
        <RootElement>
            <Title style={{ color: 'white', fontSize: '1.5rem' }}>
                {field.title}
            </Title>
            <NewsItem>
                <NewsItem.Image src={field.image} />
                <NewsItem.Blurb>{field.blurb}</NewsItem.Blurb>
                <NewsItem.Link href={field.url}>check it out</NewsItem.Link>
            </NewsItem>
        </RootElement>
    )
}
