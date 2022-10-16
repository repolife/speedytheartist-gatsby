import styled from 'styled-components'
import { LinkStyle } from '@style/base'

const NewsItem = styled.div`
    display: grid;
    grid-gap: 10vh;
    text-align: center;
`

const Image = styled.img`
    width: 100%;
    height: auto;
`

const Blurb = styled.p`
    font-size: 1.5rem;
`

const Link = styled.a.attrs({ target: '_blank', rel: 'noopener noreferrer' })`
    ${LinkStyle}
    font-Size: 1rem;
    text-decoration: none;
`

NewsItem.Image = Image
NewsItem.Blurb = Blurb
NewsItem.Link = Link

export default NewsItem
