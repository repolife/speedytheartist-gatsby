import React from 'react';
import { SiLinktree, SiBandsintown, SiApplemusic, SiYoutubemusic, SiTidal, SiDeezer } from 'react-icons/si'
import { FaTwitter, FaBandcamp, FaInstagram, FaYoutube, FaFacebook, FaTiktok, FaSpotify } from 'react-icons/fa'
import { LinkWrapper } from '../LinkWrapper/LinkWrapper';

export const SocialLink = ({ name, url, props, animate }) => {
    const nameToLower = name.toLowerCase();

    if (nameToLower === 'facebook') {
        return (
            <LinkWrapper url={url} name={name}><FaFacebook {...props} /></LinkWrapper>
        )
    }

    if (nameToLower === 'bandcmp') {
        return (
            <LinkWrapper url={url} name={name}><FaBandcamp {...props} /></LinkWrapper>
        )
    }

    if (nameToLower === 'linktree') {
        return (
            <LinkWrapper url={url} name={name}><SiLinktree {...props} /></LinkWrapper>
        )
    }
    if (nameToLower === 'bandsintown') {
        return (
            <LinkWrapper url={url} name={name}><SiBandsintown  {...props} /></LinkWrapper>
        )
    }
    if (nameToLower === 'twitter') {
        return (
            <LinkWrapper url={url} name={name}><FaTwitter {...props} /></LinkWrapper>
        )
    }

    if (nameToLower === 'tiktok') {
        return (
            <LinkWrapper url={url} name={name}><FaTiktok {...props} /></LinkWrapper>
        )
    }

    if (nameToLower === 'youtube') {
        return (
            <LinkWrapper url={url} name={name}><FaYoutube  {...props} /></LinkWrapper>
        )
    }


    if (nameToLower === 'instagram') {
        return (
            <LinkWrapper url={url} name={name}><FaInstagram {...props} /></LinkWrapper>
        )
    }

    if (nameToLower === 'youtube') {
        return (
            <LinkWrapper url={url} name={name}><FaYoutube {...props} /></LinkWrapper>
        )
    }

    if (nameToLower === 'spotify') {
        return (
            <LinkWrapper url={url} name={name}><FaSpotify {...props} /></LinkWrapper>
        )
    }

    if (nameToLower === 'apple') {
        return (
            <LinkWrapper url={url} name={name}><SiApplemusic {...props} /></LinkWrapper>
        )
    }

    if (nameToLower === 'ytmusic') {
        return (
            <LinkWrapper url={url} name={name}><SiYoutubemusic {...props} /></LinkWrapper>
        )
    }

    if (nameToLower === 'tidal') {
        return (
            <LinkWrapper url={url} name={name}><SiTidal {...props} /></LinkWrapper>
        )
    }

    if (nameToLower === 'deezer') {
        return (
            <LinkWrapper url={url} name={name}><SiTidal {...props} /></LinkWrapper>
        )
    }



    return (null)
}

export default SocialLink