import React, { useState } from "react"
import {
  GlobalStyle,
  Container,
  BackgroundImage,
  ModelContainer,
  ModelImage,
  ModelLink,
  SideTab,
  CloseButton,
  Menu,
} from "../style/base"
import { FaTimesCircle } from "react-icons/fa"
import modelPic from "../images/model.png"
import Platform from "../components/platform"
import SocialMedia from "../components/socialmedia"
import Helmet from "react-helmet"
import frontRight from "../images/Front top right.png"
import bottomLeft from "../images/Back bottom left.png"

const Home = () => {
  const [toggle, setToggle] = useState({ display: false })
  const { display } = toggle

  const toggleDisplay = () => {
    setToggle({ display: !toggle.display })
  }

  return (
    <Container>
      <GlobalStyle />
      {!display ? (
        <ModelLink>
          <BackgroundImage>
            <SideTab
              title="View Menu"
              onClick={() => {
                toggleDisplay()
              }}
            >
              <img src={bottomLeft}></img>
            </SideTab>
          </BackgroundImage>
        </ModelLink>
      ) : (
        <Menu>
          <CloseButton
            title="Close Menu"
            onClick={() => {
              toggleDisplay()
            }}
            href="#"
          >
            <FaTimesCircle size="20px" />
          </CloseButton>
          <Platform
            onClick={() => {
              toggleDisplay()
            }}
          ></Platform>
          <SocialMedia></SocialMedia>
        </Menu>
      )}
    </Container>
  )
}

export default Home
