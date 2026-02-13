'use client'
import React, { useMemo, useEffect, useState } from 'react'
import styled from 'styled-components'
import { SocialLink } from '../Social/SocialLinks/SocialLinks'
import { usePathname } from 'next/navigation'

const FooterContainer = styled.div`
    margin-top: auto;
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    flex-wrap: wrap;
    padding-bottom: 2rem;
`

export const Footer = ({ links = [] }) => {
    const pathname = usePathname()

    const paths = {
        '/': 'Social',
        '/music': 'Music',
        '/support': 'Support',
        '/tour': 'Tour',
        '/video': 'Video',
    }

    const filteredIcons = useMemo(() => {
        if (!pathname) return links
        
        const type = paths[pathname] || 'Social'
        const filtered = links.filter(link => link.type === type)

        return filtered.length <= 0 ? links : filtered
    }, [pathname, links])

    return (
        <FooterContainer>
            {filteredIcons.map((icon, index) => (
                <SocialLink
                    key={index}
                    name={icon.name}
                    url={icon.url}
                    props={{ size: 20, color: 'white' }}
                />
            ))}
        </FooterContainer>
    )
}

export default Footer
