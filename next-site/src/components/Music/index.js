'use client'
import styled from 'styled-components'

const MusicItem = styled.iframe`
    width: ${props => props.width || '100%'};
    height: 15vh;
`

export default MusicItem
