import React from 'react';
import {   Span, Left, LogoContainer, Artist, Logo, Menu, LinkContainer  } from "../../style/base"
import { Link} from 'gatsby';
import { NavLink } from "./NavLink"
import artistImage from "../../assets/images/artist.jpg"

  export const Nav = () => {

    return(<Left>
        <LogoContainer>
           <h2>Logo</h2>
         
        </LogoContainer>
        <Artist img={artistImage} />
           <Menu>
            <NavLink  to="/" name='home' />
           </Menu>

    </Left>)
}

  export default Nav