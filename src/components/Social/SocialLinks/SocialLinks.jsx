import React, { useEffect, useState } from 'react';
import { SiLinktree, SiBandsintown } from 'react-icons/si'
import { FaTwitter, FaInstagram, FaYoutube, FaFacebook, FaTiktok } from 'react-icons/fa'
import styled from "styled-components"
import { motion } from "framer-motion"

const Social = styled(motion.div)`
margin-left: 2vw;
margin-top: 2vw;
dislay: flex;
flex-direction: column; 
flex-wrap: wrap;
`
export const SocialLink = ({ name, url, props }) => {
    const nameToLower = name.toLowerCase();

    if (nameToLower === 'facebook') {
        return (
            <Social><FaFacebook {...props} /></Social>
        )
    }
    if (nameToLower === 'linktree') {
        return (
            <Social><SiLinktree {...props} /></Social>
        )
    }
    if (nameToLower === 'bandsintown') {
        return (
            <Social><SiBandsintown  {...props} /></Social>
        )
    }
    if (nameToLower === 'twitter') {
        return (
            <Social><FaTwitter {...props} /></Social>
        )
    }

    if (nameToLower === 'tiktok') {
        return (
            <Social><FaTiktok  {...props} /></Social>
        )
    }

    if (nameToLower === 'youtube') {
        return (
            <Social><FaYoutube  {...props} /></Social>
        )
    }


    if (nameToLower === 'instagram') {
        return (
            <Social><FaInstagram size={20} color='white' /></Social>
        )
    }

    return (null)
}

export default Social