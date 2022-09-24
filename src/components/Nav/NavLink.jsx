import React, {useEffect, useState} from 'react';
import {   Span,  LinkContainer, Link  } from "../../style/base"
import { Link as GastbyLink} from 'gatsby';
import { useLocation } from "@reach/router"
import styled from "styled-components"

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


    

    return(
        <LinkContainer><Span active={isActive} /><Link to={to}>{name.toUpperCase()}</Link></LinkContainer>

    )
}

export default NavLink