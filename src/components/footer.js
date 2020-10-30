import React from 'react'
import Logowhite from '../images/logo-white.png'
import { Row, Col } from 'react-bootstrap';
import { FaFacebook, FaInstagram } from 'react-icons/fa';
import fac from '../images/logo-fac-1.png'
import sac from '../images/logo-sac.png'
import sadec from '../images/logo-sadec.png'
import ciaeventos from '../images/compania-eventos.png'
import juncos from '../images/andrea-junco.png'
import whatsapp from '../images/whatsapp.png'

const Footer = () => (

    <section className='footer'>
        <Row style={{ margin: 0, alignItems: 'center', justifyItems: 'center' }}>
            <Col md={4} sm={12} xs={12} style={{ margin: '0 auto', textAlign: 'center', justifyContent: 'center', alignItems: 'center' }}>
                <img src={Logowhite} alt='Encuentro Nacional de Arritmias' className='footer-img' />
                                        
                <div className='social-footer'>
                        <a href="https://www.facebook.com/Encuentro-Nacional-de-Arritmias-102559971635631" rel='noreferrer'>{<FaFacebook />}</a>
                        <a href="https://www.instagram.com/encuentro.arritmias/" rel='noreferrer'>{<FaInstagram />}</a>
                </div>

            </Col>
            <Col>
                <h3 style={{ marginTop: 30, marginBottom: 5 }}>Organizan</h3>
                <Row className='organizadores-footer'>
                    
                    <Col md={3}><h6>Comité de Arritmias</h6><a href='https://www.fac.org.ar' target='_blank' rel='noreferrer'><img src={fac} alt='Sociedad Argentina de Cardiología' style={{ maxWidth: 120 }}/></a></Col>
                    <Col md={3}><h6>Consejo de Arritmias</h6><a href='https://www.sac.org.ar' target='_blank' rel='noreferrer'><img src={sac} alt='Sociedad Argentina de Cardiología' style={{ maxWidth: 120 }} /></a></Col>
                    <Col md={3}><h6>Sociedad Argentina de Electrofisiología Cardíaca</h6><a href='https://www.sociedadsadec.org.ar' target='_blank' rel='noreferrer'><img src={sadec} alt='Sociedad Argentina de Cardiología' style={{ maxWidth: 120 }} /></a></Col>
                </Row>
                <div class='footer-white'>
                     <h5 style={{ marginTop: 30, marginBottom: 5 }}>Organización Profesional</h5>
                     <Row className='organizadores-prof-footer'>
                    <Col md={3}><img src={juncos} alt='Andrea Juncos' style={{ maxWidth: 120 }} />
                    </Col>
                    <Col md={3}><img src={ciaeventos} alt='Compañía de Eventos' style={{ maxWidth: 160 }}/>
                    </Col>                 
                    </Row>
                    <div className="consultas">
                        <p><strong>Consultas: </strong><a href='mailto:organizador@companiadeeventos.com.ar'>organizador@companiadeeventos.com.ar</a></p>
                        <p><img src={whatsapp} alt='contacto' width='30' />  <a href='https://api.whatsapp.com/send?phone=5491164520046'> +54 9 11 6452 0046</a></p>
                     </div>
                </div>
          
            </Col>
        </Row>
    </section>

)

export default Footer;
