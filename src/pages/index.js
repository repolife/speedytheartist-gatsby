import React, { useState } from "react"
import {
  GlobalStyle,
  Container,
  BackgroundImage,
  ModelContainer,
  ModelImage,
  ModelLink,
  SideTab,
  Menu,
} from "../style/base"
import { FaTimesCircle } from "react-icons/fa"
import Platform from "../components/platform"
import SocialMedia from "../components/socialmedia"
import Helmet from "react-helmet"
import bottomLeft from "../images/Back bottom left.png"
import { motion } from "framer-motion"
import { Link } from "gatsby"

const Home = () => {
  const [toggle, setToggle] = useState({ display: false })
  const [stone, clickStone] = useState({ click: false })
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

        <ModelLink>
          <BackgroundImage>
            <motion.div
              whileHover={{ scale: 0.8 }}
              whileTap={{ scale: 0.8 }}
              animate={{ rotate: 360 }}
              transition={{ duration: 2 }}
            >
              <Link to="/mylinks" title="My Links">
                <SideTab title="View Menu">
                  {" "}
                  <img src={bottomLeft}></img>
                </SideTab>
              </Link>
            </motion.div>
          </BackgroundImage>
        </ModelLink>
      </Container>
    </motion.div>
  )
}

export default Home
