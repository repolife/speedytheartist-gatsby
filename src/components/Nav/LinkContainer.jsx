import React, { useEffect } from 'react';
import styled from "styled-components"
import { useAnimationControls, motion } from 'framer-motion';

const Container = styled(motion.div)`
margin-bottom: 10px;
display: flex;
flex-direction: row;
width: 15vw;
justify-content: space-evenly;
align-items: center;
`

export const LinkContainer = ({ isActive, children }) => {
    const controls = useAnimationControls();


    useEffect(() => {
        if (!isActive) return;
        console.log(isActive)
        controls.start({
            transition: {
                duration: 5
            },
            animate: {
                scale: 10
            },
            initial: { scale: 0 }

        })

    }, [isActive])

    return (<Container animate={controls}>{children}</Container>)
};

export default LinkContainer;