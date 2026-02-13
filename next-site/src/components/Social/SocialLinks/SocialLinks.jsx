'use client'
import React from 'react'
import {
    SiLinktree,
    SiBandsintown,
    SiApplemusic,
    SiYoutubemusic,
    SiTidal,
} from 'react-icons/si'
import {
    FaTwitter,
    FaBandcamp,
    FaInstagram,
    FaYoutube,
    FaFacebook,
    FaTiktok,
    FaSpotify,
    FaSoundcloud,
} from 'react-icons/fa'
import { LinkWrapper } from '../LinkWrapper/LinkWrapper'

export const SocialLink = ({ name, url, props }) => {
    const nameToLower = name.toLowerCase()

    const icons = {
        facebook: FaFacebook,
        soundcloud: FaSoundcloud,
        bandcamp: FaBandcamp,
        linktree: SiLinktree,
        bandsintown: SiBandsintown,
        twitter: FaTwitter,
        tiktok: FaTiktok,
        youtube: FaYoutube,
        instagram: FaInstagram,
        spotify: FaSpotify,
        apple: SiApplemusic,
        ytmusic: SiYoutubemusic,
        tidal: SiTidal,
    }

    const Icon = icons[nameToLower]

    if (!Icon) return null

    return (
        <LinkWrapper url={url} name={name}>
            <Icon {...props} />
        </LinkWrapper>
    )
}

export default SocialLink
