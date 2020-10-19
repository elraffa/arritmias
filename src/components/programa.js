import React from 'react'
import { Col, Row } from 'react-bootstrap'

const Programa = () => {
    return (
        <div id='programa'>
            <Row style={{ margin: 0, padding: 20 }} >
            <h1>Programa</h1>
            </Row>

            <Row style={{ margin: 0, width: '100%' }} id='programa'>
            
                <Col md={4} sm={12} xs={12} className='programa'>
                    <div className='card'>
                        <h4>Dispositivos</h4>
                    </div>
                </Col>
                <Col md={4} sm={12} xs={12} className='programa'>
                    <div className='card'>
                        <h4>Dispositivos</h4>
                    </div>
                </Col>
                <Col md={4} sm={12} xs={12} className='programa' >
                    <div className='card'>
                        <h4>Dispositivos</h4>
                    </div>
                </Col>
                <Col md={4} sm={12} xs={12} className='programa' >
                    <div className='card'>
                        <h4>Dispositivos</h4>
                    </div>
                </Col>
                <Col md={4} sm={12} xs={12} className='programa' >
                    <div className='card'>
                        <h4>Dispositivos</h4>
                    </div>
                </Col>
                <Col md={4} sm={12} xs={12} className='programa' >
                    <div className='card'>
                        <h4>Dispositivos</h4>
                    </div>
                </Col>
            </Row>
        </div>
    )
}

export default Programa;