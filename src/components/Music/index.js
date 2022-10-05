import styled from 'styled-components'

const MusicItem = styled.div`
    display: grid;
    text-align: center;
    grid-gap: 5px;
    justify-content: center;
    border: solid;
    padding: 1em;
    max-height: 30vh;
    width: 25vw;
    @media only screen and (max-width: 950px) {
        width: 100%;
    }
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
`

const Link = styled.a`
    flex-grow: 0.1;
`

MusicItem.Title = Title
MusicItem.ArtWork = ArtWork
MusicItem.Listen = Listen
MusicItem.Link = Link

export default MusicItem
