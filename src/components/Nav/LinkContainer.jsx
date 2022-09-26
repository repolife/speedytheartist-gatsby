import React, { useEffect } from 'react';
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

    const framer = {
        transition: {
            duration: 5
        },
        animate: {
            scale: 10
        },
        initial: { scale: 0 }

    }

    const { controls } = useActive(isActive)


    return (<Container animate={controls}>{children}</Container>)
};

export default LinkContainer;