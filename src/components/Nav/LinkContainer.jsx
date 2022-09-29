import React from 'react';
import styled from "styled-components"
import { useAnimationControls, motion } from 'framer-motion';
import { useActive } from '../../hooks/useActive';

const Container = styled(motion.div)`
margin-bottom: 10px;
display: flex;
flex-direction: row;
width: 15vw;
justify-content: space-evenly;
align-items: center;
`

export const LinkContainer = ({ isActive, children }) => {


    return (<Container
        initial={{ x: -400 }}
        animate={{ x: 0 }}
        transition={{ duration: 0.5 }}
    >{children}</Container>)
};

export default LinkContainer;