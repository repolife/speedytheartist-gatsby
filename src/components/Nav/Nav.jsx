import React from 'react';
import {   Left, LogoContainer, Artist,  Menu, Logo } from "../../style/base"
import { NavLink } from "./NavLink"
import { Footer } from '../Footer'
import artistImage from "../../assets/images/artist.jpg"
import  logo from '../../assets/images/logo.png'

  export const Nav = () => {

    return(<Left>
        <LogoContainer>
          <Logo src={logo} alt='logo' />
         
        </LogoContainer>
        <Artist img={artistImage} alt='speedy the artist' />
           <Menu>
            <NavLink  to="/" name='home' />
            <NavLink  to="/music" name='music' />

           </Menu>
           <Footer/>

    </Left>)
}

  export default Nav