import React from 'react'
import abbott from '../images/sponsors/abbott.png'
import boston from '../images/sponsors/boston.png'
import biotronik from '../images/sponsors/biotronik_logo.png'
import medtronic from '../images/sponsors/medtronic.png'
import eccosur from '../images/sponsors/logo_eccosur.svg'
import boehringer from '../images/sponsors/boehringer.png'
import roemmers from '../images/sponsors/roemmers.png'
import exo from '../images/sponsors/logo-exo.png'
import { Row, Col } from 'react-bootstrap'


const Sponsors = () => (
    <div id='sponsors' className='sponsors' >
        <Row className='sponsors-row' >
            <h1 className='main-titles'>Sponsors</h1>
        </Row>
        <hr></hr>
        <Row className='sponsors-row' >
            <h2 className='main-subtitles' >Diamante</h2>
        </Row>
        <Row className='sponsors-row'>
            <Col md={3} sm={6} xs={6} >
                <a href='https://www.medicine.abbott/ar/index.html' target='_blank' rel='noreferrer'><img className='img-fluid img-sponsors' src={abbott} alt='Abbott' /></a>
            </Col>
            <Col md={3} sm={6} xs={6} >
                <a href='https://www.biotronik.com/es-es/products' target='_blank' rel='noreferrer'><img className='img-fluid img-sponsors' src={biotronik} alt='Biotronik' /></a>
            </Col>
            <Col md={3} sm={6} xs={6} >
                <a href='https://www.bostonscientific.com/es-ar/home.html' target='_blank' rel='noreferrer'><img className='img-fluid img-sponsors boston' src={boston} alt='Boston Scientific' /></a>
            </Col>
            <Col md={3} sm={6} xs={6} >
                <a href='https://www.medtronic.com/ar-es/index.html' target='_blank' rel='noreferrer'><img className='img-fluid img-sponsors' src={medtronic} alt='Medtronic' /></a>
            </Col>
           
        </Row>
        <Row className='sponsors-row'>
            <Col md={6} sm={12} xs={12} >
            <Row className='sponsors-row' >
                <h2 className='main-subtitles'>Platino</h2>
            </Row>
            <Row className='sponsors-row'>
                <Col md={6} sm={12} xs={12} >
                    <a href='http://www.eccosur.com/' target='_blank' rel='noreferrer'><img className='img-fluid img-sponsors' src={eccosur} alt='Eccosur' /></a>
                </Col>
            </Row>
            </Col>
            <Col md={6} sm={12} xs={12} >
            <Row className='sponsors-row' >
                <h2 className='main-subtitles'>Oro</h2>
            </Row>

             <Row className='sponsors-row' >
            <Col md={12} >
                <a href='https://www.sudamerica.boehringer-ingelheim.com/' target='_blank' rel='noreferrer'><img className='img-fluid img-sponsors' src={boehringer} alt='Boehringer Ingelheim' /></a>
            </Col>
             </Row>
        </Col>
        </Row>
        <Row className='sponsors-row' >
            <h2 className='main-subtitles'>Acompañan</h2>
        </Row>
        <Row className='sponsors-row'>
            <Col md={6} sm={12} xs={12}>
                <a href='https://www.roemmers.com.ar/' target='_blank' rel='noreferrer'><img className='img-fluid img-sponsors' src={roemmers} alt='Roemmers' /></a>
            </Col>
            <Col md={6} sm={12} xs={12}>
                <a href='https://www.exo.com.ar/' target='_blank' rel='noreferrer'><img className='img-fluid img-sponsors' src={exo} alt='Exo' /></a>
            </Col>
        </Row>
    </div>
)

export default Sponsors;