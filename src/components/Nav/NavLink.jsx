import React, {useEffect, useState} from 'react';
import {   Span,  LinkContainer, Link  } from "../../style/base"
import { Link as GastbyLink} from 'gatsby';
import { useLocation } from "@reach/router"
import styled from "styled-components"
import { animate, motion } from 'framer-motion';

export const NavLink = ({name, to}) => {
    const [isActive, setIsActive] = useState(false);
    const location = useLocation();


    const Link = styled(props => <GastbyLink {...props} />)`
font-size: 12px;
color: #fff;
font-family: "oswald", sans-serif;
float: right;`

    useEffect(() => {
        if(location.pathname !== to) return; 
        setIsActive(true)
    }, [location, to])

// const navAnimation = {
    
// }
// initial={{ scale: 0 }}
// animate={{ rotate: 180, scale: 1 }}
// transition={{
//   type: "spring",
//   stiffness: 260,
//   damping: 20
// }}

    return(
        <LinkContainer>
   {isActive ? (     <motion.div
           whileHover={{ scale: 1.5 }}
           transition={{ type: "spring", stiffness: 260, damping: 20 }}
           animate={{rotate: 180, scale: 1}}
           

        >
            <Span active={isActive} />
            </motion.div>) :             <Span active={isActive} />


   }
            <Link to={to}>{name.toUpperCase()}</Link></LinkContainer>

    )
}

export default NavLink