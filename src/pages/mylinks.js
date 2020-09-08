import React from "react"
import { Menu, CloseButton, Container, GlobalStyle } from "../style/base"
import { FaTimesCircle } from "react-icons/fa"
import { Link } from "gatsby"
import Platform from "../components/platform"
import SocialMedia from "../components/socialmedia"

const MyLinks = () => {
  return (
    <Container>
      <GlobalStyle />
      <Menu>
        <Link to="/" title="Homepage">
          <CloseButton href="#">
            <FaTimesCircle size="20px" />
          </CloseButton>
        </Link>

        <Platform></Platform>
        <SocialMedia></SocialMedia>
      </Menu>
    </Container>
  )
}

export default MyLinks
