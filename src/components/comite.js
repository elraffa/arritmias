import React from 'react';
import { FaHeartbeat } from 'react-icons/fa';
import { Row, Col } from 'react-bootstrap'
import fac from '../images/logo-fac-1.png'
import sac from '../images/logo-sac.png'
import sadec from '../images/logo-sadec.png'

const Comite = () => (

    <div className="comite">
        <span className='btn-inscripciones desktop-hide'><a href='https://intercloudy.contilatam.com/1646/encuentro-nacional-de-arritmias' target='_blank' rel='noreferrer'>Inscripciones</a></span>
        <div className='floating' style={{ maxWidth: 250, margin: '0 auto', textAlign: 'center', fontSize: 80, color: '#b50017' }} >
        <FaHeartbeat />
        </div>
        <h3 style={{ marginTop: 20, borderBottom: '1px solid #ccc' }}>Comité Organizador y Científico</h3>

        <h4>Presidentes:</h4>
        <h5>Marcelo Coll (FAC) - David Doiny (SAC) - Ricardo Speranza (SADEC)</h5>
        <h4>Secretarios:</h4>
        <Row>
            <Col><h5>Alejandro Cueto</h5><h5>Fernando Di Tommaso</h5> <h5>Gabriel Eidelman</h5> <h5>Estela Falconi </h5> <h5>Jorge Figueroa</h5> <h5>José Gant López </h5></Col>
            <Col><h5>Emilio Logarzo</h5><h5>Nicolás Martinenghi</h5><h5>Luis Medesani</h5><h5>Daniel Ortigoza</h5><h5>Mariana Valentino</h5><h5>Diego Velazco</h5></Col>
        </Row>
        <br></br>
        <hr/>
        <Row className='organizadores'>
            <Col><h6>Comité de Arritmias</h6><img src={fac} alt='Sociedad Argentina de Cardiología' /></Col>
            <Col><h6>Consejo de Arritmias</h6><img src={sac} alt='Sociedad Argentina de Cardiología' /></Col>
            <Col><h6>Sociedad Argentina de Electrofisiología Cardíaca</h6><img src={sadec} alt='Sociedad Argentina de Cardiología' /></Col>
        </Row>

    </div >
)

export default Comite;