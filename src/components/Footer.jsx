import React, {useEffect, useState} from 'react';
import { SiLinktree } from 'react-icons/si'
import {FaTwitter, FaInstagram, FaYoutube, FaFacebook, FaTiktok} from 'react-icons/fa'
import {Social, Footer as FooterContiner} from "../style/base"
export const Footer = () => {

    return(<FooterContiner>
        <Social><FaTwitter size={20} color='white' /></Social>
        <Social><FaInstagram size={20} color='white' /></Social>
        <Social><SiLinktree size={20} color='white' /></Social>
        <Social><FaYoutube size={20} color='white' /></Social>
        <Social><FaFacebook size={20} color='white' /></Social>
        <Social><FaTiktok size={20} color='white' /></Social>

    </FooterContiner>)
     
}

export default Footer