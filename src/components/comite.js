import React from 'react';
import LogoCol from '../images/logo-col.png'
import { FaHeartbeat } from 'react-icons/fa';

const Comite = () => (

    <div className="comite">
        {/* <img className='img-fluid floating' style={{ maxWidth: 250, margin: '0 auto', textAlign: 'center' }} src={LogoCol} alt='Encuentro Nacional de Arritmias' /> */}
        <div className='floating' style={{ maxWidth: 250, margin: '0 auto', textAlign: 'center', fontSize: 80 }} >
        <FaHeartbeat />
        </div>
        <h3 style={{ marginTop: 20, borderBottom: '1px solid #ccc' }}>Comité Organizador y Científico</h3>

        <h4>Presidentes:</h4>
        <h5>Marcelo Coll - David Doiny - Ricardo Speranza</h5>
        <h4>Secretarios:</h4>
        <h5>Alejandro Cueto - Fernando Di Tommaso - Gabriel Eidelman - Estela Falconi - Jorge Figueroa - José Gant López - Emilio Logarzo - Nicolás Martinenghi - Luis Medesani - Daniel Ortigoza - Mariana Valentino - Diego Velazco</h5>

    </div >
)

export default Comite;