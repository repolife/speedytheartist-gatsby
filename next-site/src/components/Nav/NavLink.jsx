'use client'
import React, { useEffect, useState } from 'react'
import { Span } from '../../style/base'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import styled from 'styled-components'
import { LinkContainer } from './LinkContainer'
import { motion } from 'framer-motion'

const StyledLink = styled(Link)`
    font-size: 1.2rem;
    color: #fff;
    font-family: 'oswald', sans-serif;
    float: right;
    text-decoration: none;
    transition: transform 0.3s ease;
    ${props => props.$isActive && 'transform: scale(1.5);'}
    
    @media screen and (max-width: 650px) {
        font-size: 1rem;
    }
`

export const NavLink = ({ name, to }) => {
    const pathname = usePathname()
    const isActive = pathname === to || (to !== '/' && pathname.startsWith(to))

    const variants = {
        active: {
            scale: 1.2,
            transition: { type: 'spring', duration: 0.5 },
        },
        inactive: {
            scale: 1
        },
    }

    return (
        <LinkContainer isActive={isActive}>
            <motion.div
                whileHover="active"
                whileTap="active"
                animate={isActive ? "active" : "inactive"}
                variants={variants}
            >
                <StyledLink $isActive={isActive} href={to}>
                    {name.toUpperCase()}
                </StyledLink>
            </motion.div>
        </LinkContainer>
    )
}

export default NavLink
