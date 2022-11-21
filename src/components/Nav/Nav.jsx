import React, { useContext } from 'react'
import { Left, LogoContainer, Artist, Menu, Logo } from '../../style/base'
import { NavLink } from './NavLink'
import { Footer } from '../Footer/Footer'
import logo from '../../assets/images/logo.png'
import { motion } from 'framer-motion'
import { useStaticQuery, graphql } from 'gatsby'
import ThemeContext from '@context/ThemeContext'

export const Nav = () => {
    const { image } = useContext(ThemeContext)

    const {
        site: {
            siteMetadata: { title },
        },
    } = useStaticQuery(graphql`
        {
            site {
                siteMetadata {
                    title
                }
            }
        }
    `)
    return (
        <Left>
            <LogoContainer>
                <Logo
                    src={logo}
                    alt={`${title} logo`}
                    title={`${title} logo`}
                />
            </LogoContainer>
            <motion.div
                initial={{ opacity: 0, scale: 1 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8 }}
            >
                {' '}
                <Artist>
                    <Artist.img
                        src={image ? image.src : '/img/artist.png'}
                        alt={image ? image.alt : title}
                        title={image ? image.title : title}
                        object={image}
                    />
                </Artist>
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
