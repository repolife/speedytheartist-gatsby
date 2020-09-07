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
import { motion } from "framer-motion"
import Category from "../components/categories"

const Home = () => {
  const [toggle, setToggle] = useState({ display: false })
  const { display } = toggle

  const toggleDisplay = () => {
    setToggle({ display: !toggle.display })
  }
  const variants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
  }

  return (
    <motion.div
      initial="hidden"
      animate="visible"
      variants={variants}
      transition={{ duration: 2 }}
    >
      <Container>
        <GlobalStyle />
        {!display ? (
          <ModelLink>
            <BackgroundImage>
              <motion.div
                whileHover={{ scale: 0.8 }}
                whileTap={{ scale: 0.8 }}
                animate={{ rotate: 360 }}
                transition={{ duration: 2 }}
              >
                <SideTab
                  title="View Menu"
                  onClick={() => {
                    toggleDisplay()
                  }}
                >
                  {" "}
                  <img src={bottomLeft}></img>
                </SideTab>
              </motion.div>
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
    </motion.div>
  )
}

export default Home
