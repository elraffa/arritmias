import React, { useState, useEffect } from 'react'
import { Col, Row, Modal, Button } from 'react-bootstrap'
import { useSiteMetadata } from "../hooks/use-site-metadata"


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
            <Row style={{ margin: 0, padding: 20 }} >
                <h1>Programa</h1>
            </Row>

            <Row style={{ margin: 0, width: '100%' }} id='programa'>


                <Col md={4} sm={12} xs={12} className='programa' onClick={handleShowClinica} data-target="#clinica" >
                    <div className='card'>
                        <h4 id='h4'>Clínica</h4>
                    </div>
                </Col>
                <Col md={4} sm={12} xs={12} className='programa' onClick={handleShowAblacion} data-target="#ablacion"  >
                    <div className='card'>
                        <h4 id='h4'>Ablación</h4>
                    </div>
                </Col>
                <Col md={4} sm={12} xs={12} onClick={handleShowDispositivos} >
                    <div className='card'>
                        <h4 id='h4'>Dispositivos</h4>
                    </div>
                </Col>
                <Col md={4} sm={12} xs={12} className='programa' className='programa' onClick={handleShowSubita}  >
                    <div className='card'>
                        <h4 id='h4'>Muerte Súbita</h4>
                    </div>
                </Col>
                <Col md={4} sm={12} xs={12} className='programa'  >
                    <div className='card'>
                        <h4 id='h4'>Arritmias en Pediatría</h4>
                    </div>
                </Col>
                <Col md={4} sm={12} xs={12} className='programa'  >
                    <div className='card'>
                        <h4 id='h4'>Sesiones p/Técnicos y Enfermeros</h4>
                    </div>
                </Col>

                <Modal show={clinica} onHide={handleCloseClinica} id='clinica' aria-labelledby="clinica">
                    <Modal.Header closeButton>
                        <Modal.Title>Clínica</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>Woohoo, you're reading this text in a modal!</Modal.Body>
                    <Modal.Footer>
                        <Button variant="secondary" onClick={handleCloseClinica}>
                            Cerrar
                    </Button>
                    </Modal.Footer>
                </Modal>

                <Modal show={ablacion} onHide={handleCloseAblacion} id='ablacion' aria-labelledby="ablacionLabel">
                    <Modal.Header closeButton>
                        <Modal.Title>Ablacion</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>Woohoo, you're reading this text in a modal!</Modal.Body>
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
                    <Modal.Body>Woohoo, you're reading this text in a modal!</Modal.Body>
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
                    <Modal.Body>Woohoo, you're reading this text in a modal!</Modal.Body>
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