'use client'
import styled from 'styled-components'

const MusicItem = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    padding: 2rem;
    color: white;
`
const Background = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-image: url(${props => props.img});
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    opacity: 0.1;
    z-index: -1;
`
MusicItem.Background = Background

export default MusicItem
