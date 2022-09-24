import React from 'react';
import {   Span, Left, LogoContainer, Artist, Logo, Menu, LinkContainer  } from "../../style/base"
import { NavLink } from "./NavLink"
import { Footer } from '../Footer'
import artistImage from "../../assets/images/artist.jpg"

  export const Nav = () => {

    return(<Left>
        <LogoContainer>
           <h2>Logo</h2>
         
        </LogoContainer>
        <Artist img={artistImage} />
           <Menu>
            <NavLink  to="/" name='home' />
            <NavLink  to="/music" name='music' />

           </Menu>
           <Footer/>

    </Left>)
}

  export default Nav