import styled from 'styled-components'
import { pallet, Button, defaultMargin } from '@style/base'

const News = styled.div`
    display: grid;
    width: 50vw;
    border: solid 1px;
    grid-gap: ${defaultMargin};
    justify-content: center;

    border-image: linear-gradient(${pallet.darkOrange}, ${pallet.yellow}) 2;
`

const Title = styled.h2`
    text-align: center;
    margin-top: ${defaultMargin};
    font-size: 1.2rem;
`
const Image = styled.img`
    src: ${props => props.src};
    width: 100%;
    height: auto;
    padding: 0 1em 0 1em;
`

News.Image = Image
News.Title = Title
News.Button = Button

export default News
