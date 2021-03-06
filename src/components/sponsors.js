import React from 'react'
import abbott from '../images/sponsors/abbott.png'
import boston from '../images/sponsors/boston.png'
import biotronik from '../images/sponsors/biotronik.png'
import medtronic from '../images/sponsors/medtronic.png'
import eccosur from '../images/sponsors/logo_eccosur.svg'
import boehringer from '../images/sponsors/boehringer.png'
import roemmers from '../images/sponsors/roemmers.png'
import synchromax from '../images/sponsors/synchromax.png'
import cardiolab from '../images/sponsors/cardiolab.png'
import { Row, Col, OverlayTrigger, Popover } from 'react-bootstrap'


const Sponsors = () => {

    const popover = (
        <Popover id="popover-positioned-bottom">
            <Popover.Title as="h3">Abbott</Popover.Title>
            <Popover.Content style={{ display: 'flex', justifyContent: 'space-around', alignItems: 'center' }}>
            <p style={{ marginRight: 15 }}><a href='https://www.cardiovascular.abbott/int/en/home.html' target='_blank' rel='noreferrer'>CRM/EP</a></p>
            <p><a href='https://www.medicine.abbott/ar/index.html' target='_blank' rel='noreferrer'>EPD</a></p>

            </Popover.Content>
        </Popover>
        );
    
    return (
    <div id='sponsors' className='sponsors' >
        <Row className='sponsors-row' >
            <h1 className='main-titles'>Sponsors</h1>
        </Row>
        <hr></hr>
        <Row className='sponsors-row' >
            <h2 className='main-subtitles' >Diamante</h2>
        </Row>
        <Row className='sponsors-row'>
            <Col md={3} sm={12} xs={12} >


                <OverlayTrigger trigger="click" placement="bottom" overlay={popover}>
                    <img className='img-fluid img-sponsors' src={abbott} alt='Abbott' />
                </OverlayTrigger>
                
            </Col>
            <Col md={3} sm={12} xs={12} >
                <a href='https://www.biotronik.com/es-es/products' target='_blank' rel='noreferrer'><img className='img-fluid img-sponsors' src={biotronik} alt='Biotronik' /></a>
            </Col>
            <Col md={3} sm={12} xs={12} >
                <a href='https://www.bostonscientific.com/es-ar/home.html' target='_blank' rel='noreferrer'><img className='img-fluid img-sponsors boston' src={boston} alt='Boston Scientific' /></a>
            </Col>
            <Col md={3} sm={12} xs={12} >
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
            <Col md={4} sm={12} xs={12}>
                <a href='https://www.cardiolab.com.ar/' target='_blank' rel='noreferrer'><img className='img-fluid img-sponsors' src={cardiolab} alt='Cardiolab' /></a>
            </Col>
            <Col md={4} sm={12} xs={12}>
                <a href='https://www.roemmers.com.ar/' target='_blank' rel='noreferrer'><img className='img-fluid img-sponsors' src={roemmers} alt='Roemmers' /></a>
            </Col>
            <Col md={4} sm={12} xs={12}>
                <a href='https://synchromax.com/' target='_blank' rel='noreferrer'><img className='img-fluid img-sponsors' src={synchromax} alt='Synchromax' /></a>
            </Col>
        </Row>
    </div>
)
    }

export default Sponsors;