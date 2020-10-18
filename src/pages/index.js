import React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"
// import Image from "../components/image"
import SEO from "../components/seo"
import { Container, Col, Row } from 'react-bootstrap'
import MainSlider from '../components/slider'
import Welcome from '../components/welcome'
import Invitados from "../components/invitados"


const IndexPage = () => (
  <Layout>
    <SEO title="Inicio" />
        <Container fluid>
          < MainSlider />
        </Container>
        <Container fluid className='gradient'>
          <Row>
            <Col md={5} sm={12} xs={12} ></Col>
            <Col md={7} sm={12} xs={12}><Welcome /></Col>
          </Row>
          <Row>
            <Invitados />
          </Row>
        </Container>
        
         
          <Link to="/page-2/">Go to page 2</Link> <br />
         
  </Layout>
)

export default IndexPage
