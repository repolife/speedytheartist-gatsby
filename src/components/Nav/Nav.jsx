import React from 'react'
import { Left, LogoContainer, Artist, Menu, Logo } from '../../style/base'
import { NavLink } from './NavLink'
import { Footer } from '../Footer/Footer'
import logo from '../../assets/images/logo.png'
import { motion } from 'framer-motion'

export const Nav = () => {
    return (
        <Left>
            <LogoContainer>
                <Logo src={logo} alt="logo" />
            </LogoContainer>
            <motion.div
                initial={{ opacity: 0, scale: 1 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8 }}
            >
                {' '}
                <Artist img="/img/artist.png" alt="speedy the artist" />
            </motion.div>

            <Menu>
                <NavLink to="/" name="home" />
                <NavLink to="/music" name="music" />
                <NavLink to="/collections/news" name="news" />
                <NavLink to="/events" name="events" />
            </Menu>
            <Footer />
        </Left>
    )
}

export default Nav
