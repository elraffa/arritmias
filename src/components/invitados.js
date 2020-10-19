import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import { useSiteMetadata } from "../hooks/use-site-metadata"
import { Row, Col } from 'react-bootstrap'
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
            <Row style={{ margin: 0, padding: 20 }} >
            <h1>Invitados</h1>
            </Row>
            <Row style={{ margin: 0, padding: 20 }}>
                {invitados.map(invitado => (
                    <Col md={2} sm={6} xs={6}>
                        {data.allFile.edges.map(({node}) => 
                                    (   
                                        invitado.filename === node.base.split('.')[0] &&
                                        <Img fluid={node.childImageSharp.fluid} alt={node.base.split('.')[0]} style={{ borderRadius: 150, border: '4px solid #8e0508' }}/>
                                    )
                                )}
                                <h3>{invitado.name}</h3>
                                <p>{invitado.country}</p>
                    </Col>
                        ))}
                </Row>
        </div>
    )
}

export default Invitados;