
import styled from 'styled-components'

const Contaner = styled.div`
display: flex;
flex-direction: row;
max-width: 15vw;
justify-content: center;
margin-top: auto;
margin-bottom: 5vw;
flex-wrap: wrap;
@media screen and (max-width: 650px) {
  margin-top: 0; 
 }
`

export default Contaner;