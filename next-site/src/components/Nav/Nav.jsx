'use client'
import React, { useContext } from 'react'
import { Left, LogoContainer, Artist, Menu, Logo } from '../../style/base'
import { NavLink } from './NavLink'
import { Footer } from '../Footer/Footer'
import { motion } from 'framer-motion'
import ThemeContext from '@context/ThemeContext'

export const Nav = ({ siteTitle, footerLinks }) => {
    const { image } = useContext(ThemeContext)

    return (
        <Left>
            <LogoContainer>
                <Logo
                    src="/logo.png"
                    alt={`${siteTitle} logo`}
                    title={`${siteTitle} logo`}
                />
            </LogoContainer>
            <motion.div
                initial={{ opacity: 0, scale: 1 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8 }}
            >
                <Artist>
                    <Artist.img
                        src={image ? image.src : '/img/artist.png'}
                        alt={image ? image.alt : siteTitle}
                        title={image ? image.title : siteTitle}
                        $object={image}
                    />
                </Artist>
            </motion.div>

            <Menu>
                <NavLink to="/" name="home" />
                <NavLink to="/music" name="music" />
                <NavLink to="/news" name="news" />
                <NavLink to="/events" name="events" />
            </Menu>
            <Footer links={footerLinks} />
        </Left>
    )
}

export default Nav
