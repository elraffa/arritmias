import React, { useState } from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import { useSiteMetadata } from "../hooks/use-site-metadata"
import { Row, Col, Button } from 'react-bootstrap'
import Img from 'gatsby-image'
import brasil from '../images/brasil.png'
import usa from '../images/usa.png'
import chile from '../images/chile.png'
import espana from '../images/espana.png'


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

    const [ state, setState ] = useState({
        flag: 'todos'
    });

    const handleClick = (e) => {
        e.preventDefault();
        const place = e.target.id;
        setState({
            flag: place
        })
    }

    return (
        <div id='invitados' className='invitados'>
            <div className='invitados-row' >
                <h1 className='main-titles'>Invitados</h1>
            </div>

            <hr></hr>
            <Row className='flags'>
                <Button variant='info' id='todos' onClick={handleClick}>Todos</Button>
                <img src={brasil} width='50px' onClick={handleClick} id='brasil'/>
                <img src={usa} width='50px' onClick={handleClick} id='usa'/>
                <img src={espana} width='50px' onClick={handleClick} id='espana'/>
                <img src={chile} width='50px' onClick={handleClick} id='chile'/>
         
            </Row>

            <div className='invitados-row'>
                { state.flag === 'todos' ?                 
                invitados.map((invitado, index) => (
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
                )) : 
               invitados.map((invitado, index) => (
                invitado.flag === state.flag &&
                <div className='invitado-selection' >
                    {data.allFile.edges.map(({ node }) =>
                        (
                            invitado.filename === node.base.split('.')[0] &&
                            <Img fluid={node.childImageSharp.fluid} alt={node.base.split('.')[0]} className='invitados-img' />
                        )
                    )}
                    <h3 className='invitado-name'>{invitado.name}</h3>
                    <p>{invitado.country}</p>
                    </div>
                 )) 
                }
                </div>
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