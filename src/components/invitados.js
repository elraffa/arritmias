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
        <div id='invitados' className='invitados'>
            <Row className='sponsors-row' >
                <h1 className='main-titles'>Invitados</h1>
            </Row>
            <hr></hr>

            <Row className='invitados-row'>
                {invitados.map((invitado, index) => (
                    // index < 4 &&
                    <Col md={3} sm={6} xs={6} >
                        {data.allFile.edges.map(({ node }) =>
                            (
                                invitado.filename === node.base.split('.')[0] &&
                                <Img fluid={node.childImageSharp.fluid} alt={node.base.split('.')[0]} className='invitados-img' />
                            )
                        )}
                        <h3 className='invitado-name'>{invitado.name}</h3>
                        <p>{invitado.country}</p>
                    </Col>
                ))}
                </Row>
            {/* Code if need to modify */}
            {/* 
            <Row className='invitados-row'>
                {invitados.map((invitado, index) => (
                    (index > 3 && index < 7) &&
                    <Col md={3} sm={6} xs={6} style={{ justifyContent: 'center' }}>
                        {data.allFile.edges.map(({ node }) =>
                            (
                                invitado.filename === node.base.split('.')[0] &&
                                <Img fluid={node.childImageSharp.fluid} alt={node.base.split('.')[0]} className='invitados-img' />
                            )
                        )}
                        <h3 className='invitado-name'>{invitado.name}</h3>
                        <p>{invitado.country}</p>
                    </Col>
                ))}
            </Row>
            <Row className='invitados-row'>
                {invitados.map((invitado, index) => (
                    (index > 6 && index < 13) &&
                    <Col md={3} sm={6} xs={6}>
                        {data.allFile.edges.map(({ node }) =>
                            (
                                invitado.filename === node.base.split('.')[0] &&
                                <Img fluid={node.childImageSharp.fluid} alt={node.base.split('.')[0]} className='invitados-img' />
                            )
                        )}
                        <h3 className='invitado-name'>{invitado.name}</h3>
                        <p>{invitado.country}</p>
                    </Col>
                ))}
            </Row> */}
        </div>
    )
}

export default Invitados;