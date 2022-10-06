import styled from 'styled-components'
import { pallet } from '@style/base'

const MusicItem = styled.a`
    display: grid;
    text-align: center;
    grid-gap: 5px;
    justify-content: center;
    border: solid 1px;
    border-image: linear-gradient(
            to right,
            ${pallet.darkOrange},
            ${pallet.yellow}
        )
        2;
    padding: 1em;
    max-height: 30vh;
    width: 25vw;
    @media only screen and (max-width: 950px) {
        width: 100%;
    }
    color: white;
    text-decoration: none;
`

const Title = styled.h1`
    font-size: 1.2rem;
`

const ArtWork = styled.img`
    height: auto;
    width: 100%;
    height: 20vh;
    object-fit: contain;
`

const Listen = styled.div`
    display: flex;
    justify-content: center;
    font-size: 1.3rem;
    align-items: center;
    flex-direction: row;
`

const Blurb = styled.span`
    margin-right: 3px;
`

MusicItem.Title = Title
MusicItem.ArtWork = ArtWork
MusicItem.Listen = Listen
MusicItem.Blurb = Blurb

export default MusicItem
