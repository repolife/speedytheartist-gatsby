import styled from 'styled-components'

const MusicItem = styled.div`
    display: grid;
    text-align: center;
    grid-gap: 1em;
    justify-content: center;
`

const Title = styled.h1`
    color: ;
`

const ArtWork = styled.img`
    width: 200px;
    height: 200px;
`

const Listen = styled.div`
    display: flex;
    justify-content: center;
`

const Link = styled.a`
    flex-grow: 0.1;
`

MusicItem.Title = Title
MusicItem.ArtWork = ArtWork
MusicItem.Listen = Listen
MusicItem.Link = Link

export default MusicItem
