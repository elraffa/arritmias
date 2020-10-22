import React, { useState, useEffect } from 'react'
import { Col, Row, Modal, Button } from 'react-bootstrap'
import { useSiteMetadata } from "../hooks/use-site-metadata"
import { FaChevronRight } from 'react-icons/fa';


const Programa = (props) => {

    const { programa } = useSiteMetadata()
    const [clinica, setClinica] = useState(false);
    const [ablacion, setAblacion] = useState(false);
    const [dispositivos, setDispositivos] = useState(false);
    const [subita, setSubita] = useState(false);

    const handleCloseClinica = () => setClinica(false);
    const handleShowClinica = () => setClinica(true);
    const handleCloseAblacion = () => setAblacion(false);
    const handleShowAblacion = () => setAblacion(true);
    const handleCloseDispositivos = () => setDispositivos(false);
    const handleShowDispositivos = () => setDispositivos(true);
    const handleCloseSubita = () => setSubita(false);
    const handleShowSubita = () => setSubita(true);


    return (
        <div id='programa'>
            <Row className='sponsors-row'>
                <h1 className='main-titles'>Programa</h1>
            </Row>
            <hr></hr>

            <Row style={{ margin: 0, width: '100%' }}>

                <Col md={4} sm={12} xs={12} className='programa' onClick={handleShowClinica} data-target="#clinica" >
                    <div className='card'>
                        <h4 id='h4'>Clínica</h4>
                        <div className='chevron-right'>
                            <FaChevronRight />
                        </div>
                    </div>
                </Col>
                <Col md={4} sm={12} xs={12} className='programa' onClick={handleShowAblacion} data-target="#ablacion"  >
                    <div className='card'>
                        <h4 id='h4'>Ablación</h4>
                        <div className='chevron-right'>
                            <FaChevronRight />
                        </div>
                    </div>
                </Col>
                <Col md={4} sm={12} xs={12} onClick={handleShowDispositivos} >
                    <div className='card'>
                        <h4 id='h4'>Dispositivos</h4>
                        <div className='chevron-right'>
                            <FaChevronRight />
                        </div>
                    </div>
                </Col>
                <Col md={4} sm={12} xs={12} className='programa' className='programa' onClick={handleShowSubita}  >
                    <div className='card'>
                        <h4 id='h4'>Muerte Súbita</h4>
                        <div className='chevron-right'>
                            <FaChevronRight />
                        </div>
                    </div>
                </Col>
                <Col md={4} sm={12} xs={12} className='programa'  >
                    <div className='card'>
                        <h4 id='h4'>Arritmias en Pediatría</h4>
                    </div>
                </Col>
                <Col md={4} sm={12} xs={12} className='programa'  >
                    <div className='card'>
                        <h4 id='h4'>Ses. p/Técnicos y Enfermeros</h4>
                    </div>
                </Col>

                <Modal show={clinica} onHide={handleCloseClinica} id='clinica' aria-labelledby="clinica">
                    <Modal.Header closeButton>
                        <Modal.Title>Clínica</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <ul>
                            <li>Fibrilación auricular: - Manejo de la FA asintomática.</li>
                            <ul>
                                <li>¿Qué nos indican las nuevas guías europeas de FA? </li>
                                <li>Manejo de la Anticoagulación en FA.</li>
                            </ul>
                            <li>Síncope Reflejo. Monitorización electrocardiográfica en el Sincope: invasiva y no invasiva – Indicación y modo de estimulación cardíaca.</li>
                        </ul>
                    </Modal.Body>
                    <Modal.Footer>
                        <Button variant="secondary" onClick={handleCloseClinica}>
                            Cerrar
                    </Button>
                    </Modal.Footer>
                </Modal>

                <Modal show={ablacion} onHide={handleCloseAblacion} id='ablacion' aria-labelledby="ablacionLabel">
                    <Modal.Header closeButton>
                        <Modal.Title>Ablación</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <ul>
                            <li>Ablación de FA Persistente</li>
                            <li>Ablación de FA en Insuficiencia Cardíaca.</li>
                            <li>Avances recientes en la Ablación de la Taquicardia Ventricular. Abordaje endo-epicardico.</li>
                            <li>Mapas de alta densidad. Cuándo y cómo utilizarlos.</li>
                            <li>Rol de las imágenes para una ablación más segura.</li>
                        </ul>
                    </Modal.Body>
                    <Modal.Footer>
                        <Button variant="secondary" onClick={handleCloseAblacion}>
                            Cerrar
                    </Button>
                    </Modal.Footer>
                </Modal>

                <Modal show={subita} onHide={handleCloseSubita} id='subita'>
                    <Modal.Header closeButton>
                        <Modal.Title>Muerte Súbita</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <ul>
                            <li>Prevención de Muerte Súbita. Nuevos predictores en 2020. </li>
                            <li>Arritmias en pediatría</li>
                            <li>Sesiones para técnicos y enfermeros</li>
                        </ul>
                    </Modal.Body>

                    <Modal.Footer>
                        <Button variant="secondary" onClick={handleCloseSubita}>
                            Cerrar
                    </Button>
                    </Modal.Footer>
                </Modal>

                <Modal show={dispositivos} onHide={handleCloseDispositivos} id='dispositivos'>
                    <Modal.Header closeButton>
                        <Modal.Title>Dispositivos</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <ul>
                            <li>Sincronía eléctrica: métodos actuales para evaluar sincronía ventricular. </li>
                            <li>TRC indicaciones convencionales y no convencionales: ¿Qué hay de nuevo?</li>
                            <li>Nuevos sitios de estimulación: ¿Dónde implantar para optimizar resultados?</li>
                            <li>Monitoreo remoto de pacientes con dispositivos cardiacos implantables.</li>
                            <li>Extracción de Electrodos: “Estrategias y desafíos en procedimientos complejos”</li>
                        </ul>
                    </Modal.Body>
                    <Modal.Footer>
                        <Button variant="secondary" onClick={handleCloseDispositivos}>
                            Cerrar
                    </Button>
                    </Modal.Footer>
                </Modal>


            </Row>

        </div>
    )
}

export default Programa;