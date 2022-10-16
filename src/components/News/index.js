import styled from 'styled-components'
import { pallet } from '@style/base'

const defaultMargin = '5px'
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

const Button = styled.button`
    width: 50%;
    margin: 0 auto;

    background-image: linear-gradient(
        to right,
        ${pallet.lightPurple} 0%,
        ${pallet.darkOrange} 51%,
        ${pallet.yellow} 100%
    );
    background-size: 200% auto;
    color: white;

    margin: 0 auto ${defaultMargin} auto;
    height: 2em;
    transition: 0.5s;
    font-size: 1.2rem;

    text-transform: uppercase;
    border-radius: 5px;
    cursor: pointer;

    &:hover {
        background-position: right top;
    }
`

News.Image = Image
News.Title = Title
News.Button = Button

export default News
