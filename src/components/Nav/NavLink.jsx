import React, {useEffect, useState} from 'react';
import {   Span,  LinkContainer  } from "../../style/base"
import { Link} from 'gatsby';
import { useLocation } from "@reach/router"
export const NavLink = ({name, to}) => {
    const [isActive, setIsActive] = useState(false);
    const location = useLocation();

    useEffect(() => {
        if(location.pathname !== to) return; 
        setIsActive(true)
    }, [location, to])


    

    return(
        <LinkContainer><Span active={isActive} /><Link to={to}>{name}</Link></LinkContainer>

    )
}

export default NavLink