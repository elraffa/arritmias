import React from 'react'
import Logowhite from '../images/logo-white.png'
import { Row, Col } from 'react-bootstrap';
import { FaFacebook, FaInstagram } from 'react-icons/fa';

const Footer = () => (

    <section className='footer'>
        <Row style={{ margin: 0 }}>
            <Col md={3} sm={12} xs={12} style={{ margin: 0 }}>
                <img src={Logowhite} alt='Encuentro Nacional de Arritmias' className='footer-img' />

            </Col>
            <Col>
                <ul style={{ listStyleType: 'none', marginTop: 20 }}>
                        <li><a href='/'>Inicio</a></li>
                        <li><a href='#bienvenida'>Bienvenida</a></li>
                        <li><a href='#programa'>Programa</a></li>
                        <li><a href='#invitados'>Invitados</a></li>
                        <li><a href='#sponsors'>Sponsors</a></li>
                        <div className='social-footer'>
                        <li><a href="https://www.facebook.com/Encuentro-Nacional-de-Arritmias-102559971635631" rel='noreferrer'>{<FaFacebook />}</a></li>
                        <li><a href="https://www.instagram.com/encuentro.arritmias/" rel='noreferrer'>{<FaInstagram />}</a></li>
                    </div>
                </ul>
            </Col>
        </Row>
    </section>

)

export default Footer;
