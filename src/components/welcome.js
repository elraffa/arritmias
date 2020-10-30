import React from 'react'
import speranza from '../images/firma-speranza.png'
import coll from '../images/firma-coll.png'
import doiny from '../images/firma-doiny.png'

const welcome = () => (

    <section>
        <div id='bienvenida' className='anchor' style={{ scrollMarginTop: 120 }}></div>
        <h1 className='main-titles'>Bienvenidos</h1>
        <h4>Estimadas/os Colegas:</h4>
        <p> Es un placer para nosotros darles la bienvenida al Encuentro Nacional de Arritmias 2020, este evento que supo ser un clásico de la electrofisiología en nuestro país hasta el año 2011, momento en el que fue reemplazado por nuestro prestigioso Congreso Argentino de Arritmias, el cual fue prorrogado para el año 2021 para continuar su modalidad presencial.</p>
        <p>
        Con el espíritu de aquel encuentro tradicional, más el aporte de la tecnología, imprescindible en estos largos meses de aislamiento social, hemos diseñado un espacio que nos posibilite compartir conocimientos entre profesionales, interactuar con prestigiosos disertantes nacionales e internacionales en diversos temas de actualidad, e integrar a las empresas en una exposición virtual en 3D donde podrán presentarnos sus últimos avances en dispositivos y fármacos.
        </p>
        <p>Como ya es costumbre, la cardiología clínica y la pediatría tendrá sus sesiones especiales, como así también los técnicos y enfermeros, conformando un promisorio programa científico con alto nivel académico.</p>
        <p>Anhelamos que disfruten este Encuentro Nacional de Arritmias, y que podamos compartir la actualidad de nuestra especialidad en tiempos difíciles como el que nos toca vivir.</p>
        <div class='firmas'>
            <div class='firma-coll'>
                <img src={coll} alt='' /> 
                <h5>Marcelo Coll</h5>
                <h6>Director Comité <br></br>de Arritmias de FAC</h6>
            </div>
            <div class='firma-doiny'>
                <img src={doiny} alt='' /> 
                <h5>David Doiny</h5>
                <h6>Director Consejo <br></br>de Arritmias de SAC</h6>
            </div>
            <div class='firma-speranza'>
                <img src={speranza} alt='' width='160'/>
                <h5>Ricardo Speranza</h5>
                <h6>Presidente <br></br>de SADEC</h6>
            </div>
        </div>

    </section>

)

export default welcome
