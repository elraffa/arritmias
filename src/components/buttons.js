import React from 'react';
import { Row, Col, Button } from 'react-bootstrap'

const Buttons = () => (

    <Row style={{ alignItems: 'center', textAlign: 'center', marginBottom: 20, justifyContent: 'space-between' }}>
        <Col>
            <Button className='newButton'><a href="https://intercloudy.contilatam.com/certificados/index.php?idCertificado=264" target='_blank'>Descargue su certificado</a></Button>
            {/* <Button className='newButton'><a href="#">Acceda al contenido On Demand</a></Button> */}
        </Col>
    </Row>

)

export default Buttons;