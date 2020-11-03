import React, { useState } from 'react'
import { Col, Row, Modal, Button } from 'react-bootstrap'
import { FaChevronRight } from 'react-icons/fa';


const Programa = (props) => {

    // const { programa } = useSiteMetadata()
    const [clinica, setClinica] = useState(false);
    const [ablacion, setAblacion] = useState(false);
    const [dispositivos, setDispositivos] = useState(false);
    const [subita, setSubita] = useState(false);
    const [pediatria, setPediatria] = useState(false);
    const [tecnicos, setTecnicos] = useState(false);

    const handleCloseClinica = () => setClinica(false);
    const handleShowClinica = () => setClinica(true);
    const handleCloseAblacion = () => setAblacion(false);
    const handleShowAblacion = () => setAblacion(true);
    const handleCloseDispositivos = () => setDispositivos(false);
    const handleShowDispositivos = () => setDispositivos(true);
    const handleCloseSubita = () => setSubita(false);
    const handleShowSubita = () => setSubita(true);
    const handleClosePediatria = () => setPediatria(false);
    const handleShowPediatria = () => setPediatria(true);
    const handleCloseTecnicos = () => setTecnicos(false);
    const handleShowTecnicos = () => setTecnicos(true);



    return (
        <div id='programa'>
            <Row className='sponsors-row'>
                <h1 className='main-titles'>Programa</h1>
            </Row>
            <hr></hr>

            <Row style={{ margin: 0, width: '100%' }}>

                <Col md={4} sm={12} xs={12} className='programa' onClick={handleShowClinica} data-target="#clinica" >
                    <div className='card card-clinica'>
                        <h4 id='h4'>Clínica</h4>
                        <div className='chevron-right'>
                            <FaChevronRight />
                        </div>
                    </div>
                </Col>
                <Col md={4} sm={12} xs={12} className='programa' onClick={handleShowSubita}  >
                    <div className='card card-subita'>
                        <h4 id='h4'>Muerte Súbita</h4>
                        <div className='chevron-right'>
                            <FaChevronRight />
                        </div>
                    </div>
                </Col>
                <Col md={4} sm={12} xs={12} className='programa' onClick={handleShowAblacion} data-target="#ablacion"  >
                    <div className='card card-ablacion'>
                        <h4 id='h4'>Ablación</h4>
                        <div className='chevron-right'>
                            <FaChevronRight />
                        </div>
                    </div>
                </Col>
                <Col md={4} sm={12} xs={12} className='programa' onClick={handleShowDispositivos} >
                    <div className='card card-dispositivos'>
                        <h4 id='h4'>Dispositivos</h4>
                        <div className='chevron-right'>
                            <FaChevronRight />
                        </div>
                    </div>
                </Col>
               
                <Col md={4} sm={12} xs={12} className='programa' onClick={handleShowPediatria} >
                    <div className='card card-pediatria'>
                        <h4 id='h4'>Arritmias en Pediatría</h4>
                        <div className='chevron-right'>
                            <FaChevronRight />
                        </div>
                    </div>
                </Col>
                <Col md={4} sm={12} xs={12} className='programa' onClick={handleShowTecnicos} >
                    <div className='card card-tecnicos'>
                        <h4 id='h4'>Ses. p/Técnicos y Enfermeros</h4>
                        <div className='chevron-right'>
                            <FaChevronRight />
                        </div>
                    </div>
                </Col>

                <Modal size='lg' show={clinica} onHide={handleCloseClinica} id='clinica' aria-labelledby="clinica" centered >
                    <Modal.Header closeButton>
                        <Modal.Title id="clinica">Clínica</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                      
                            <h4>CONDUCTA ACTUAL EN WPW ASINTOMATICO</h4>

                            <h4>SINCOPE</h4>  
                            <p>CARDIONEUROMODULACION: INDICACIÓN EN LAS BRADIARRITMIAS FUNCIONALES.</p> 
                            
                            <p>SELECCIÓN DE PACIENTES PARA ESTIMULACION EN SÍNCOPE NEUROMEDIADO</p>                   

                            <h4>ARRITMIA VENTRICULAR CLINICA</h4>
                            <p>ALGORITMOS PARA LA IDENTIFICACION DEL ORIGEN DE LA EV IDIOPATICA</p>

                            <h5>Extrasístoles Ventriculares Frecuente. ¿Debemos tratarlas?</h5>

                            <h4>FIBRILACION AURICULAR CLINICA</h4>
                            <p>NOVEDADES DE LAS GUIAS 2020</p>
                            <p>FIBRILACIÓN AURICULAR ASINTOMATICA. MANEJO ACTUAL</p>

                    </Modal.Body>
                    <Modal.Footer>
                        <Button variant="secondary" onClick={handleCloseClinica}>
                            Cerrar
                    </Button>
                    </Modal.Footer>
                </Modal>

                <Modal size='lg' show={ablacion} onHide={handleCloseAblacion} id='ablacion' aria-labelledby="ablacionLabel" centered>
                    <Modal.Header closeButton>
                        <Modal.Title>Ablación</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <h4>DESAFIOS EN LA ABL DE TPS. CUANDO LO SENCILLO SE VUELVE COMPLEJO.</h4>
                        <h4>FA INVASIVA</h4>
                        <p>ABLACION DE FIBRILACIÓN AURICULAR PERSISTENTE: ESTADO ACTUAL</p>
                        <p>ABLACION DE FIBRILACIÓN AURICULAR EN INSUFICIENCIA CARDIACA</p>
                        <h4>TV INVASIVA</h4>
                        <p>ABLACION DE EXTRASISTOLES VENTRICULARES DE MUSCULOS PAPILARES</p>
                        <p>ARRITMIAS VENTRICULARES DEL SUMMIT DEL VENTRICULO IZQUIERDO. Consideraciones anatómicas y desafíos de la ablación.</p>
                        <p>ECOCARDIOGRAMA INTRACARDIACO: utilidad en distintos escenarios</p>

                        <h4>TV INVASIVA II</h4>
                        <p>Ablación de Arritmias Ventriculares en Miocardiopatía Isquémico/necrótica </p>
                        <p>ABLACIÓN ENDO EPICARDICA en MIOCARDIOPATIA Chagásica.</p>
                    </Modal.Body>
                    <Modal.Footer>
                        <Button variant="secondary" onClick={handleCloseAblacion}>
                            Cerrar
                    </Button>
                    </Modal.Footer>
                </Modal>

                <Modal size='lg' show={subita} onHide={handleCloseSubita} id='subita' centered>
                    <Modal.Header closeButton>
                        <Modal.Title>Muerte Súbita</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <p>ESTRATIFICACION DE RIESGO EN DEPORTISTAS Post Covid</p>
                        <p>ESTRATIFICACION DE RIESGO EN MIOCARDIOPATÍA HIPERTROFICA</p>
                    </Modal.Body>

                    <Modal.Footer>
                        <Button variant="secondary" onClick={handleCloseSubita}>
                            Cerrar
                    </Button>
                    </Modal.Footer>
                </Modal>

                <Modal size='lg' show={dispositivos} onHide={handleCloseDispositivos} id='dispositivos' centered>
                    <Modal.Header closeButton>
                        <Modal.Title>Dispositivos</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                    <h4>Avances en Resincronizacion Cardiaca</h4>
                    <h4>TERAPIA DE RESINCRONIZACIÓN CARDIACA EN SITUACIONES COMPLEJAS</h4>
                    <p>Resincronización mediante estimulación hisiana y rama izquierda</p>
                        CDI Subcutáneo " ¿Se han ampliado las indicaciones?"
                    <h4>Extracción Transvenosa de Electrodos.</h4>
                    <p>EXTRACCIÓN DE CATETERES EN OCTOGENARIOS: DESAFIOS Y CONSEJOS.</p>
                    <p>RESULTADOS ACTUALES Y TRATAMIENTO DE LAS COMPLICACIONES.</p>
                    <h4>OTRA MIRADA DE LA ELECTROFISIOLOGÍA CARDIACA (MESA MUJERES)</h4>
                    <h5>ARRITMIAS Y EMBARAZO</h5>
                    <p>VALOR DE LAS TECNICAS DE IMÁGENES EN LA ABLACIÓN DE LA FIBRILACIÓN AURICULAR Y DE LA TAQUICARDIA VENTRICULAR</p>
                    </Modal.Body>
                    <Modal.Footer>
                        <Button variant="secondary" onClick={handleCloseDispositivos}>
                            Cerrar
                        </Button>
                    </Modal.Footer>
                </Modal>

                <Modal size='lg' show={pediatria} onHide={handleClosePediatria} id='pediatria' centered>
                    <Modal.Header closeButton>
                        <Modal.Title>Espacio Pediatría</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <p>Abordaje invasivo de las arritmias SV en cardiopatias congenitas: cuando, cómo y a quiénes?</p>
                        <p>Sindrome de WPW. Que hay de nuevo en esta entidad casi centenaria?</p>
                    </Modal.Body>
                    <Modal.Footer>
                        <Button variant="secondary" onClick={handleClosePediatria}>
                            Cerrar
                        </Button>
                    </Modal.Footer>
                </Modal>

                <Modal size='lg' show={tecnicos} onHide={handleCloseTecnicos} id='tecnicos' centered>
                    <Modal.Header closeButton>
                        <Modal.Title>Espacio Técnicos</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <h4>Nuevos Modos de Estimulación Cardíaca</h4>
                        <p>Estimulación Multipunto</p>
                        <p>Estimulación Septal</p>
                    </Modal.Body>
                    <Modal.Footer>
                        <Button variant="secondary" onClick={handleCloseTecnicos}>
                            Cerrar
                        </Button>
                    </Modal.Footer>
                </Modal>


            </Row>
            <Row className='sponsors-row'>
                <Button variant="primary" size="lg" className="btn-programa"><a href='https://intercloudy.contilatam.com/programa-cientifico/27/encuentro-nacional-de-arritmias-edicion-virtual'>Programa Científico Completo</a></Button>
            </Row>

        </div>
    )
}

export default Programa;