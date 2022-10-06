import React, { useEffect, useState, useMemo } from 'react'
import Container from './index'
import { SocialLink } from '../Social/SocialLinks/SocialLinks'
import { graphql, useStaticQuery } from 'gatsby'

export const Footer = () => {
    const data = useStaticQuery(graphql`
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

    return (
        <Container>
            {data &&
                data.allFile.edges.map(edge => {
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
