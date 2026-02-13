'use client'
import React from 'react'
import styled from 'styled-components'
import { motion } from 'framer-motion'
import { Span } from '../../style/base'

const Container = styled(motion.div)`
    margin-bottom: 1.2rem;
    display: flex;
    flex-direction: row;
    width: 15vw;
    justify-content: space-evenly;
    align-items: center;
    @media screen and (max-width: 650px) {
        margin-bottom: 2rem;
    }
`

export const LinkContainer = ({ isActive, children }) => {
    return (
        <Container
            initial={{ x: -400 }}
            animate={{ x: 0 }}
            transition={{ duration: 0.5 }}
        >
            {children}
            {isActive && <Span $active />}
        </Container>
    )
}

export default LinkContainer
