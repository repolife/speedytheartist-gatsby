import React, { Children, useEffect, useState } from 'react'
import styled from 'styled-components'
import { motion } from 'framer-motion'

const Social = styled(motion.div)`
margin-left: 2vw;
margin-bottom: 10px;
padding-right: 1vw;
margin-top: auto:
dislay: flex;
flex-direction: column; 
justify-content: center;
flex-wrap: wrap;
@media screen and (max-width: 650px) {
    margin-top: 1vh; 
   }
`

const scale = {
    scale: 1.2,
}

export const LinkWrapper = ({ url, name, animate, children }) => {
    return (
        <Social
            initial={{ y: 400, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6 }}
            whileHover={scale}
            whileTap={scale}
        >
            <a
                href={url}
                target="_blank"
                rel="noopener noreferrer"
                title={name}
            >
                {children}
            </a>
        </Social>
    )
}
