'use client'
import styled from 'styled-components'
import { LinkStyle } from '@/style/base'

const NewsItemContainer = styled.div`
    display: grid;
    grid-gap: 5vh;
    text-align: center;
    padding: 2rem;
    color: white;
`

export const Image = styled.img`
    width: 100%;
    max-width: 600px;
    height: auto;
    margin: 0 auto;
`

export const Blurb = styled.p`
    font-size: 1.5rem;
    line-height: 1.6;
`

export const Link = styled.a.attrs({ target: '_blank', rel: 'noopener noreferrer' })`
    ${LinkStyle}
    font-size: 1rem;
    text-decoration: none;
    display: inline-block;
    padding: 0.5rem 1rem;
`

const NewsItem = ({ children }) => <NewsItemContainer>{children}</NewsItemContainer>
NewsItem.Image = Image
NewsItem.Blurb = Blurb
NewsItem.Link = Link

export default NewsItem
