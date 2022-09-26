import React, { useEffect, useState } from 'react';
import { Span } from "../../style/base"
import { Link as GastbyLink } from 'gatsby';
import { useLocation } from "@reach/router"
import styled from "styled-components"
import { LinkContainer } from './LinkContainer';
import { useAnimationControls, motion, animate } from 'framer-motion';

const Link = styled(props => <GastbyLink {...props} />)`
font-size: 12px;
color: #fff;
font-family: "oswald", sans-serif;
float: right;
transform: ${props => (props.isActive ? 'scale(1.5)' : '')};
pointer-events: ${props => (props.isActive ? 'none' : '')};

`


export const NavLink = ({ name, to }) => {
    const [isActive, setIsActive] = useState(false);
    const location = useLocation();
    const controls = useAnimationControls();

    useEffect(() => {
        if (location.pathname !== to) return;
        setIsActive(true)
    }, [location, to])

    const variants = {
        active: {

            scale: 1.5, transition:
                { type: 'spring', duration: 0.5 }


        },
        inactive: {}
    }



    return (

        <LinkContainer isActive={isActive}>
            <Span active={isActive} />
            <motion.div
                whileHover={!isActive ? 'active' : 'inactive'}
                variants={variants}>
                <Link isActive={isActive} to={to}>{name.toUpperCase()}</Link>
            </motion.div>
        </LinkContainer >


    )
}

export default NavLink