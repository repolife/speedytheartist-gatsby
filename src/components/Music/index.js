import styled from 'styled-components'
import { pallet } from '@style/base'

const MusicItem = styled.iframe`
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
    width: ${props => props.width ?? '25vw'};
    @media only screen and (max-width: 950px) {
        width: 100%;
    }
    color: white;
    text-decoration: none;
`

export default MusicItem
