import React from 'react'
import abbott from '../images/sponsors/abbott.png'
import boston from '../images/sponsors/boston.png'
import biotronik from '../images/sponsors/biotronik_logo.png'
import medtronic from '../images/sponsors/medtronic.png'
import eccosur from '../images/sponsors/logo_eccosur.svg'
import boehringer from '../images/sponsors/boehringer.png'
import roemmers from '../images/sponsors/roemmers.png'
import { Row, Col } from 'react-bootstrap'


const Sponsors = () => (
    <div id='sponsors' className='sponsors' >
        <Row className='sponsors-row' >
            <h1>Sponsors</h1>
        </Row>
        <Row className='sponsors-row' >
            <h2>Diamante</h2>
        </Row>
        <Row className='sponsors-row'>
            <Col md={3} sm={6} xs={6} >
                <img className='img-fluid img-sponsors' src={biotronik} alt='Abbott' />
            </Col>
            <Col md={3} sm={6} xs={6} >
                <img className='img-fluid img-sponsors' src={boston} alt='Abbott' />
            </Col>
            <Col md={3} sm={6} xs={6} >
                <img className='img-fluid img-sponsors' src={medtronic} alt='Abbott' />
            </Col>
            <Col md={3} sm={6} xs={6} >
                <img className='img-fluid img-sponsors' src={abbott} alt='Abbott' />
            </Col>
        </Row>
        <Row className='sponsors-row' >
            <h2>Platino</h2>
        </Row>
        <Row className='sponsors-row'>
            <Col md={6} sm={6} xs={6} >
                <img className='img-fluid img-sponsors' src={abbott} alt='Abbott' />
            </Col>
            <Col md={6} sm={6} xs={6} >
                <img className='img-fluid img-sponsors' src={eccosur} alt='Abbott' />
            </Col>
        </Row>
        <Row className='sponsors-row' >
            <h2>Oro</h2>
        </Row>
        <Row className='sponsors-row' >
            <Col md={12} >
                <img className='img-fluid img-sponsors' src={boehringer} alt='Abbott' />
            </Col>
        </Row>
        <Row className='sponsors-row' >
            <h2>Acompaña</h2>
        </Row>
        <Row className='sponsors-row'>
            <Col md={12} >
                <img className='img-fluid img-sponsors' src={roemmers} alt='Abbott' />
            </Col>
        </Row>
    </div>
)

export default Sponsors;