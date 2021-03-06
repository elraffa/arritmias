import React from 'react';
import { FaHeartbeat, FaCalendarCheck } from 'react-icons/fa';
import { Row, Col } from 'react-bootstrap'
import fac from '../images/logo-fac-1.png'
import sac from '../images/logo-sac.png'
import sadec from '../images/logo-sadec.png'

const Comite = () => (

    <div className="comite">
           <div class='date-top-mobile desktop-hide'>
                <FaCalendarCheck /><h4> 12-13 de nov. 2020</h4>
            </div>
            <div className='btn-inscripciones desktop-hide'>
            
                <a href='https://intercloudy.contilatam.com/1646/encuentro-nacional-de-arritmias' target='_blank' rel='noreferrer'>Inscripciones</a>
            </div>
        <div className='floating' style={{ maxWidth: 250, margin: '0 auto', textAlign: 'center', fontSize: 80, color: '#b50017' }} >
        <FaHeartbeat />
        </div>
        <h3 style={{ marginTop: 20, borderBottom: '1px solid #ccc', marginBottom: '0.7em' }}>Comité Organizador y Científico</h3>
        <h6>(En orden alfabético)</h6>

        <h4>Presidentes:</h4>
        <h5>Marcelo Coll (FAC)</h5>
        <h5>David Doiny (SAC)</h5>  
        <h5>Ricardo Speranza (SADEC)</h5>
        <br></br>
        <h4>Secretarios:</h4>
        <Row>
            <Col><h5>Alejandro Cueto</h5><h5>Fernando Di Tommaso</h5> <h5>Gabriel Eidelman</h5> <h5>Estela Falconi </h5> <h5>Jorge Figueroa</h5> <h5>José Gant López </h5></Col>
            <Col><h5>Emilio Logarzo</h5><h5>Andrés Martellotto</h5><h5>Nicolás Martinenghi</h5><h5>Luis Medesani</h5><h5>Daniel Ortigoza</h5><h5>Diego Velazco</h5></Col>
        </Row>
        <br></br>
        <hr/>
        <h4>Organizan</h4>

        <Row className='organizadores'>
            <Col ><h6>Comité<br></br> de Arritmias</h6></Col>
            <Col><h6>Consejo de Arritmias</h6></Col>
            <Col><h6>Soc. Arg. de Electrofisiología Cardíaca</h6></Col>
        </Row>
        <Row className='organizadores'>
            <Col><a href='https://www.fac.org.ar' target='_blank' rel='noreferrer'><img src={fac} alt='Sociedad Argentina de Cardiología' /></a></Col>
            <Col><a href='https://www.sac.org.ar' target='_blank' rel='noreferrer'><img src={sac} alt='Sociedad Argentina de Cardiología' /></a></Col>
            <Col><a href='https://www.sociedadsadec.org.ar' target='_blank' rel='noreferrer'><img src={sadec} alt='Sociedad Argentina de Cardiología' /></a></Col>
        </Row>

    </div >
)

export default Comite;