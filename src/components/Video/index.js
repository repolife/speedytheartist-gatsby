import styled from 'styled-components'

const VideoItem = styled.div`
    padding-bottom: 56.25%;
    padding-top: 30px;
    height: 0;
    overflow: hidden;
    position: relative;
    margin-top: 2em;
`

const Source = styled.iframe`
    position: absolute;
    top: 0;
    left: 0;
    width: 50vw;
    height: 100%;
`
VideoItem.Source = Source
export default VideoItem
