import React from "react"
import Layout from "../components/layout"
// import Image from "../components/image"
import SEO from "../components/seo"
import { Container, Col, Row } from 'react-bootstrap'
import MainSlider from '../components/slider'
import Welcome from '../components/welcome'
import Invitados from "../components/invitados"
import Programa from '../components/programa'
import Sponsors from '../components/sponsors'
import Comite from '../components/comite'


const IndexPage = () => (
  <Layout>
    <SEO title="Inicio" />
    <Container fluid className='gradient'>
      < MainSlider />
      <Row>
        <Col md={5} sm={12} xs={12} style={{ justifyContent: 'center', alignItems: 'center'}} ><Comite /></Col>
        <Col md={7} sm={12} xs={12}><Welcome /></Col>
      </Row>
      <Row>
        <Programa />
        <Invitados />
      </Row>
      <Sponsors />
    </Container>

  </Layout>
)

export default IndexPage
