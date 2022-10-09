import styled from 'styled-components'

const News = styled.div`
    display: grid;
`

const Image = styled.img`
    src: ${props => props.src};
`
News.Image = Image

export default News
