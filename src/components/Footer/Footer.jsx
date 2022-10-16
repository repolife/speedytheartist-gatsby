import React, { useMemo, useEffect, useState } from 'react'
import Container from './index'
import { SocialLink } from '../Social/SocialLinks/SocialLinks'
import { graphql, useStaticQuery } from 'gatsby'

export const Footer = () => {
    const [pathname, setPathname] = useState(null)
    const {
        allFile: { edges },
    } = useStaticQuery(graphql`
        query {
            allFile(
                filter: { sourceInstanceName: { eq: "links" } }
                sort: {
                    fields: childMarkdownRemark___frontmatter___type
                    order: DESC
                }
            ) {
                edges {
                    node {
                        id
                        childrenMarkdownRemark {
                            frontmatter {
                                type
                                url
                                name
                            }
                        }
                    }
                }
            }
        }
    `)
    useEffect(() => {
        if (typeof window === undefined) return
        setPathname(window.location.pathname.toLocaleLowerCase())
    })

    const paths = {
        '/': 'Social',
        '/music': 'Music',
        '/support': 'Support',
        '/tour': 'Tour',
        '/video': 'Video',
    }

    const filteredIcons = useMemo(() => {
        if (!pathname) return
        if (!edges) return

        const filtered = edges.filter(
            edge =>
                edge.node.childrenMarkdownRemark[0].frontmatter.type ===
                paths[pathname]
        )
        return filtered || edges
    }, [pathname, edges])

    const icons = filteredIcons ?? edges

    return (
        <Container>
            {icons &&
                icons.map(edge => {
                    const { name, url } =
                        edge.node.childrenMarkdownRemark[0].frontmatter
                    return (
                        <SocialLink
                            key={edge.node.id}
                            name={name}
                            url={url}
                            props={{ size: 20, color: 'white' }}
                        />
                    )
                })}
        </Container>
    )
}

export default Footer
