import React from 'react'
import Logowhite from '../images/logo-white.png'
import { Row, Col } from 'react-bootstrap';
import { FaFacebook, FaInstagram } from 'react-icons/fa';
import fac from '../images/logo-fac-1.png'
import sac from '../images/logo-sac.png'
import sadec from '../images/logo-sadec.png'

const Footer = () => (

    <section className='footer'>
        <Row style={{ margin: 0 }}>
            <Col md={3} sm={12} xs={12} style={{ margin: 0 }}>
                <img src={Logowhite} alt='Encuentro Nacional de Arritmias' className='footer-img' />
                                        
                <div className='social-footer'>
                        <a href="https://www.facebook.com/Encuentro-Nacional-de-Arritmias-102559971635631" rel='noreferrer'>{<FaFacebook />}</a>
                        <a href="https://www.instagram.com/encuentro.arritmias/" rel='noreferrer'>{<FaInstagram />}</a>
                </div>

            </Col>
            <Col>
                <h3 style={{ marginTop: 30}}>Organizan</h3>
                <Row className='organizadores-footer'>
                    
                    <Col md={3}><h6>Comité de Arritmias</h6><a href='https://www.fac.org.ar' target='_blank' rel='noreferrer'><img src={fac} alt='Sociedad Argentina de Cardiología' style={{ maxWidth: 100 }}/></a></Col>
                    <Col md={3}><h6>Consejo de Arritmias</h6><a href='https://www.sac.org.ar' target='_blank' rel='noreferrer'><img src={sac} alt='Sociedad Argentina de Cardiología' style={{ maxWidth: 100 }} /></a></Col>
                    <Col md={3}><h6>Sociedad Argentina de Electrofisiología Cardíaca</h6><a href='https://www.sociedadsadec.org.ar' target='_blank' rel='noreferrer'><img src={sadec} alt='Sociedad Argentina de Cardiología' style={{ maxWidth: 100 }} /></a></Col>
                </Row>


            </Col>
        </Row>
    </section>

)

export default Footer;
