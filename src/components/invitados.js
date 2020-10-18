import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import { useSiteMetadata } from "../hooks/use-site-metadata"
import Img from 'gatsby-image'


const Invitados = () => {
    const { invitados } = useSiteMetadata()
    const data = useStaticQuery(graphql`
    query MyQuery {
        allFile(filter: {relativeDirectory: {eq: "invitados"}}) {
          edges {
            node {
              base
              childImageSharp {
                fluid {
                  aspectRatio
                  base64
                  sizes
                  src
                  srcSet
                }
              }
            }
          }
        }
    }
    `)
    return (
<div className='invitados'>
        {invitados.map(invitado => (
            <div>
            <h3>{invitado.name}</h3>
            {data.allFile.edges.map(({node}) => 
                (   
                    invitado.filename === node.base.split('.')[0] &&
                    <Img fluid={node.childImageSharp.fluid} alt={node.base.split('.')[0]} />
                )
            )}
            <p>{invitado.country}</p>
            </div>
        ))}
    </div>  
    )
}

export default Invitados;