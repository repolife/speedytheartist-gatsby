import styled from 'styled-components'

const MusicItem = styled.div`
    display: flex;
    flex-direction: column;
    height: 100vh;
    width: 100%;
`
const Background = styled.div`
    background-image: url(${props => props.img});
    background-size: contain;
    background-repeat: no-repeat;
    opacity: 0.1;
    height: 100vh;
`
MusicItem.Background = Background

export default MusicItem
