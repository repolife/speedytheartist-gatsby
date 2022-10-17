import React, { useMemo, useEffect, useState } from 'react'
import Container from './index'
import { SocialLink } from '../Social/SocialLinks/SocialLinks'
import { graphql, useStaticQuery } from 'gatsby'
import { useLocation } from '@reach/router'

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

    const location = useLocation()
    useEffect(() => {
        if (typeof window === undefined) return
        setPathname(location.pathname.toLocaleLowerCase())
    })

    console.log()
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

        console.log(filtered)

        return filtered.length <= 0 ? edges : filtered
    }, [pathname, edges])

    return (
        <Container>
            {filteredIcons &&
                filteredIcons.map(icon => {
                    const { name, url } =
                        icon.node.childrenMarkdownRemark[0].frontmatter
                    return (
                        <SocialLink
                            key={icon.node.id}
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
