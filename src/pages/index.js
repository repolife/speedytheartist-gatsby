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
} from "../style/base"
import { FaTimesCircle } from "react-icons/fa"
import modelPic from "../images/model.png"
import Platform from "../components/platform"
import SocialMedia from "../components/socialmedia"
import Helmet from "react-helmet"

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
              &#128064;
            </SideTab>
          </BackgroundImage>

          <ModelImage src={modelPic}></ModelImage>
        </ModelLink>
      ) : (
        <div>
          <CloseButton
            title="Return Home"
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
        </div>
      )}
    </Container>
  )
}

export default Home
