import React, { useEffect, useState } from 'react'
import { Span } from '../../style/base'
import { Link as GastbyLink } from 'gatsby'
import { useLocation } from '@reach/router'
import styled, { css } from 'styled-components'
import { LinkContainer } from './LinkContainer'
import { motion } from 'framer-motion'

const Link = styled(({ isActive, ...props }) => (
    <GastbyLink
        activeStyle={{ transform: isActive ? 'scale(1.5)' : '' }}
        {...props}
    />
))`
    font-size: 1.2rem;
    color: #fff;
    font-family: 'oswald', sans-serif;
    float: right;
    @media screen and (max-width: 650px) {
        font-size: 1rem;
    }
`
export const NavLink = ({ name, to }) => {
    const [isActive, setIsActive] = useState(false)
    const location = useLocation()

    console.log(location.pathname)

    const variants = {
        active: {
            scale: 1.5,
            transition: { type: 'spring', duration: 0.5 },
        },
        inactive: {},
    }

    useEffect(() => {
        if (!location) return
        if (!to) return
        const isPath = location.pathname.includes(to)

        console.log(isPath)

        if (isPath) {
            console.table(to, isPath)

            setIsActive(!isActive)
        }
    }, [location, to])

    return (
        <LinkContainer isActive={isActive}>
            <motion.div
                whileHover={!isActive ? 'active' : 'inactive'}
                whileTap={!isActive ? 'active' : 'inactive'}
                variants={variants}
            >
                <Link isActive={isActive} to={to}>
                    {name.toUpperCase()}
                </Link>
            </motion.div>
        </LinkContainer>
    )
}

export default NavLink
