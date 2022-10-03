import React, { useContext } from 'react'
import { MusicContext } from '@context/MusicContext'
import MusicItem from '.'
import { FaSpotify } from 'react-icons/fa'

export const Music = ({ title, image, url }) => {
    const { music } = useContext(MusicContext)

    const defaultNode =
        music?.allFile.edges[0].node.childMarkdownRemark.frontmatter

    if (!defaultNode) {
        return <h2>loading...</h2>
    }

    return (
        <MusicItem>
            <MusicItem.Title>{defaultNode.title.toUpperCase()}</MusicItem.Title>
            <MusicItem.ArtWork src={defaultNode.image.publicURL} />

            <MusicItem.Listen>
                Listen on{' '}
                <MusicItem.Link href={defaultNode.spotify}>
                    {' '}
                    <FaSpotify color="green" />
                </MusicItem.Link>
            </MusicItem.Listen>
        </MusicItem>
    )
}

export default Music
