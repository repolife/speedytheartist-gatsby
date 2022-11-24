import styled from 'styled-components'
import { pallet } from '@style/base'

const VideoItem = styled.div`
    padding-bottom: 56.25%;
    padding-top: 30px;
    height: 0;
    overflow: hidden;
    position: relative;
    margin-top: 2em;
    margin-bottom: 2em;
`

const Source = styled.iframe`
    position: absolute;
    border: solid 1px;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    border-image: linear-gradient(
            to right,
            ${pallet.darkOrange},
            ${pallet.yellow}
        )
        2;
`
VideoItem.Source = Source
export default VideoItem
