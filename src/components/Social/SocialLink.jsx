import React, {useEffect, useState} from 'react';
import { SiLinktree, SiBandsintown} from 'react-icons/si'
import {FaTwitter, FaInstagram, FaYoutube, FaFacebook, FaTiktok} from 'react-icons/fa'
import {Social} from "../../style/base"

export const SocialLink = ({name, url, props}) => {
    const nameToLower = name.toLowerCase();
    console.log(props)

    if(nameToLower === 'facebook'){
        return(
        <Social><FaFacebook {...props} /></Social>
        )
    }
    if(nameToLower === 'linktree'){
        return(
        <Social><SiLinktree {...props} /></Social>
        )
    }
    if(nameToLower === 'bandsintown'){
        return(
        <Social><SiBandsintown size={20} color='white' /></Social>
        )
    }
    if(nameToLower === 'twitter'){
        return(
        <Social><FaTwitter {...props} /></Social>
        )
    }

    if(nameToLower === 'tiktok'){
        return(
        <Social><FaTiktok size={20} color='white' /></Social>
        )
    }

    if(nameToLower === 'youtube'){
        return(
        <Social><FaYoutube size={20} color='white' /></Social>
        )
    }

    
    if(nameToLower === 'instagram'){
        return(
        <Social><FaInstagram size={20} color='white' /></Social>
        )
    }
    
    return(null)
}

export default Social