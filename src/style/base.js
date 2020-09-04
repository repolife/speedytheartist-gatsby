import { createGlobalStyle } from "styled-components"
import styled from "styled-components"
import nomodel from "../images/no_model.jpg"
import modelPic from "../images/model.png"

const gridPadding = {
  padding: "10px",
}

const pallet = { red: `#bf504c` }

const GlobalStyle = createGlobalStyle`
@import url('https://fonts.googleapis.com/css?family=Raleway&display=swap')

* {
    margin: 0;
    padding: 0;
}

*,
*::before,
*::after {
    box-sizing: inherit;
}
    
html {
    box-sizing: border-box;
    font-size: 62.5%; 
    
    @media only screen and (max-width: $-large) {
        font-size: 50%;
    }
}

body {
    font-family: 'Raleway', sans-serif;
    font-weight: 400;
    line-height: 1.6;
    min-height: 100vh;
    background: #212725;
   }     
 `
const Container = styled.div`
  width: 100%;
  margin: 0 auto;
`

const ModelContainer = styled.div`
  max-width: 100vh;
  height: 100vh;
  object-fit: cover;
  object-position: top left;
  position: relative;
`

const ModelLink = styled.a`
  a:hover {
    color: red;
  }
`

const ModelImage = styled.img`
  display: block;
  height: auto;
  max-width: 100%;
  position: fixed;
  z-index: 1;

  padding: 0;
  margin: 0;

  bottom: 12%;
  left: 7%;
  transform: scale(1.2);

  @media only screen and (max-width: 414px) {
    transform: scale(2.9);
    bottom: 26%;
    left: 0%;
  }
  @media only screen and (max-width: 360px) {
    bottom: %;
    left: 0%;
    transform: scale(2.9);
  }
`

const BackgroundImage = styled.div`
  background: url(${nomodel}) no-repeat center;
  max-width: 100vh;
  height: 100vh;
  object-fit: cover;
  object-position: top left;
  position: relative;
`

const PlatformLinks = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  & > a {
    background: ${pallet.red};
    margin: 1em;
    padding: 1em;
    width: 10em;
    text-align: center;
    border-radius: 10px;
    color: white;
  }
`
const SocialMediaLinks = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  & > a {
    width: 4em;
    margin: 1em;
    color: white;
  }
`
const SideTab = styled.a`
  background: ${pallet.red};
  width: auto;

  height: auto;
  border-radius: 10px;
  position: absolute;
  top: 50vh;
  color: white;
  text-align: center;
  font-size: 5em;
  z-index: 2;
  cursor: pointer;

  > :hover {
    opacity: 0.6;
  }
`

const CloseButton = styled.div`
  color: ${pallet.red};
  cursor: pointer;
  text-align: end;
`
export {
  GlobalStyle,
  Container,
  gridPadding,
  BackgroundImage,
  ModelContainer,
  ModelImage,
  ModelLink,
  PlatformLinks,
  SocialMediaLinks,
  SideTab,
  CloseButton,
}
