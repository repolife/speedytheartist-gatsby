import React, { useState, useContext } from 'react'
import { RootElement } from '@components/App/RootElement/RootElement'
import { Music as MusicDisplay } from '@components/Music/Music'
import { SEO } from '@components/SEO/SEO'
import { Title, InternalLink } from '@style/base'
import MusicItem from './index'
import { ShareSocial } from 'react-share-social'
import { useLocation } from '@reach/router'
import { Lyrics } from '@components/Lyrics/Lyrics'
import ThemeContext from '@context/ThemeContext'
import { graphql } from 'gatsby'
import { Video } from '@components/Video/Video'
import { useEffect } from 'react'

export const Music = ({ pageContext: { field, pathname }, data }) => {
    const location = useLocation()
    const mainArtistName = 'Speedy The Artist'
    const defaultArtist = field.artists[0].name

    const { markdownRemark } = data

    const { image, setImage } = useContext(ThemeContext)

    useEffect(() => {
        setImage({
            src: field.images[0].url,
            title: `${defaultArtist} - ${field.name} - album cover`,
            alt: `${defaultArtist} - ${field.name} - album cover`,
        })
    }, [field, defaultArtist])

    const artist =
        field.album_group === 'appears_on'
            ? `${defaultArtist}, ${mainArtistName}`
            : field.artists[0].name
    const group =
        field.album_group.charAt(0).toUpperCase() + field.album_group.slice(1)
    return (
        <ThemeContext.Provider
            value={{
                image,
                setImage,
            }}
        >
            <RootElement>
                <MusicItem>
                    <Title>{artist}</Title>
                    <Title>{` ${field.name}`}</Title>
                    <MusicDisplay
                        width="100%"
                        url={field.external_urls.spotify}
                    />
                    <p>{`Released ${field.release_date}`}</p>
                    {markdownRemark?.frontmatter?.video && (
                        <Video videoId={markdownRemark?.frontmatter.video} />
                    )}
                    <Lyrics artist={field.artists[0].name} track={field.name} />
                    {markdownRemark?.frontmatter?.news && (
                        <InternalLink
                            to={`${location.origin}/news/${markdownRemark?.frontmatter.news}`}
                        >
                            Related News
                        </InternalLink>
                    )}

                    <ShareSocial
                        url={`${location.href}`}
                        socialTypes={[
                            'facebook',
                            'twitter',
                            'reddit',
                            'telegram',
                            'email',
                        ]}
                        style={{
                            root: { background: 'transparent', color: 'red' },
                            copyContainer: { display: 'none', height: '10vh' },
                        }}
                    />
                </MusicItem>
            </RootElement>
        </ThemeContext.Provider>
    )
}

export const Head = ({ pageContext }) => {
    const {
        field: { name, images, artists },
    } = pageContext
    return (
        <SEO
            title={`${name}`}
            keywords="streaming, spotify, streaming platforms,"
            cardImage={images[0].url}
            description={`Check out ${name} from ${artists[0].name}`}
        />
    )
}

export const query = graphql`
    query ($pathname: String) {
        markdownRemark(frontmatter: { title: { eq: $pathname } }) {
            frontmatter {
                video
                news
            }
        }
    }
`

export default Music
