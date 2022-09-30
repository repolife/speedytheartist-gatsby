import React, { useEffect, useState, useMemo } from 'react';
import { Footer as FooterContiner } from "../style/base"
import { SocialLink } from './Social/SocialLinks/SocialLinks';
import { graphql, useStaticQuery } from "gatsby"

export const Footer = () => {
    const data = useStaticQuery(graphql`
    query {
      allFile(
        filter: {sourceInstanceName: {eq: "links"}, childMarkdownRemark: {frontmatter: {type: {}}}}
      ) {
        edges {
          node {
            childrenMarkdownRemark {
              frontmatter {
                type
                url
                name
                title
              }
            }
          }
        }
      }
    }
  `)



    return (<FooterContiner>
        {data && data.allFile.edges.map(edge => {
            const { name, url } = edge.node.childrenMarkdownRemark[0].frontmatter;
            return (
                <SocialLink name={name} url={url} props={{ size: 20, color: 'white' }} />
            )
        })}


    </FooterContiner>)

}

export default Footer