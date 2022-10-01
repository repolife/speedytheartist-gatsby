import React, { useContext } from 'react'
import { MusicContext } from '@context/MusicContext'
import MusicItem from '.'
import { SocialLink } from '@components/Social/SocialLinks/SocialLinks'
import { FaSpotify } from 'react-icons/fa'

export const Music = ({ title, image, url }) => {
    const { music } = useContext(MusicContext)

    const defaultNode =
        music?.allFile.edges[0].node.childMarkdownRemark.frontmatter

    if (!defaultNode) {
        return <h2>loading...</h2>
    }

    console.log(defaultNode.spotify)
    return (
        <MusicItem>
            <MusicItem.Title>{defaultNode.title}</MusicItem.Title>
            <MusicItem.ArtWork
                src={defaultNode.image.childImageSharp.fluid.src}
            />
            <MusicItem.Listen>
                Listen on{' '}
                <MusicItem.Link href={defaultNode.spotify}>
                    {' '}
                    <FaSpotify props={{ size: 20, color: 'green' }} />
                </MusicItem.Link>
            </MusicItem.Listen>
        </MusicItem>
    )
}

export default Music
