import { createGlobalStyle } from "styled-components"
import styled from "styled-components"
import nomodel from "../images/no_model.jpg"
import modelPic from "../images/model.png"
import withModel from "../images/with_model.jpg"
import bigBackground from "../images/bigBackgroundpg.jpg"
import frontRight from "../images/Front top right.png"
import lowResImage from "../images/BigBackgroundpglowres.jpg"

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
  max-width: 100vw;
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
  background: url(${frontRight}) no-repeat center;
  display: flex;
  width: 100%;
  z-index: 1;

  flex-direction: row;
  align-content: center;
  justify-content: center;
  position: fixed;
  bottom: 25vh;
`

const BackgroundImage = styled.div`
  background: url(${lowResImage}) no-repeat center;
  height: 100vh;
  width: 100vw;
  object-fit: cover;
  object-position: center;
  position: fixed;
  background-size: cover;
`

const PlatformLinks = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  font-size: 1.5rem;

  & > a {
    background: ${pallet.red};
    margin: 1em;
    padding: 1em;
    min-width: 25vh;
    max-width: 25vh;
    text-align: center;
    border-radius: 10px;
    color: white;
    text-decoration-line: none;
    &: hover {
      box-shadow: 2px 2px 2px 2px #f7f7f73b;
    }
  }
`
const SocialMediaLinks = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  font-size: 1.5rem;
  align-items: center;
  & > a {
    width: 4em;
    margin: 1em;
    color: white;
    display: flex;
    flex-direction: column;
    text-decoration: none;
    align-items: center;
  }
`

const MusicLink = styled.a`
  display: flex;
`
const SideTab = styled.a`
  display: flex;
  justify-content: center;
  text-align: center;
  font-size: 5em;
  z-index: 2;
  cursor: pointer;

  & > img {
    height: 50vh;
  }
`

const CloseButton = styled.div`
  color: ${pallet.red};
  cursor: pointer;
  width: min-content;
`

const Menu = styled.div``
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
  Menu,
}
