import React from 'react';
import { Left, LogoContainer, Artist, Menu, Logo } from "../../style/base"
import { NavLink } from "./NavLink"
import { Footer } from '../Footer'
import artistImage from "../../assets/images/artist.jpg"
import logo from '../../assets/images/logo.png'
import { motion } from "framer-motion";

export const Nav = () => {

  return (<Left>
    <LogoContainer>
      <Logo src={logo} alt='logo' />

    </LogoContainer>
    <motion.div
      initial={{ opacity: 0, scale: 1 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.8 }}
    >        <Artist img={artistImage} alt='speedy the artist' />
    </motion.div>

    <Menu>
      <NavLink to="/" name='home' />
      <NavLink to="/music" name='music' />

    </Menu>
    <Footer />

  </Left>)
}

export default Nav