import { Link } from "gatsby"
import PropTypes from "prop-types"
import React, { useEffect } from "react"
import Logo from './logo';
import Menu from './menu';
import { FaFacebook, FaTwitter, FaInstagram } from 'react-icons/fa';
import BurgerMenu from './burgerMenu'

import 'bootstrap/dist/css/bootstrap.min.css';
import { Row, Col } from 'react-bootstrap';


const Header = ({ siteTitle, menuLinks }) => {
  useEffect ( () => { 
    const scrollFunction = () => {
      let stickyHeader = document.getElementById('header');
      if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
        stickyHeader.classList.add('reduce')
      } else {
        stickyHeader.classList.remove('reduce');
      }
    }
    window.onscroll = () => scrollFunction()
  }
  )
  return (

    <header id='header' class='sticky-top' style={{ backgroundColor: 'white' }}>
      <div className='desktop-hide'>
        <BurgerMenu menuLinks={menuLinks} />
      </div>
      <Row style={{ margin: 0 }} className='header-row'>

        <Col md={3} sm={10} xs={10} style={{ margin: 0 }}>
          <Link
            to="/"
            style={{
              color: `white`,
              textDecoration: `none`,
            }}
          >
            <Logo style={{ margin: 0 }} />
          </Link>

        </Col>
        <Col md={9} sm={12} xs={12} className='header-right mobile-hide' >

             <Menu menuLinks={menuLinks} className='menu mobile-hide' /> 
             <div style={{ display: 'flex' }}>
              <ul className='social'>
                <li className='btn-inscripciones'><a href='https://intercloudy.contilatam.com/1646/encuentro-nacional-de-arritmias' target='_blank' rel='noreferrer'>Inscripciones</a></li>
                <li className='social-element'><a href="facebook.com/arritmias">{<FaFacebook />}</a></li>
                <li className='social-element'><a href="facebook.com/arritmias">{<FaTwitter />}</a></li>
                <li className='social-element'><a href="facebook.com/arritmias">{<FaInstagram />}</a></li>
              </ul>
             </div>

        </Col>
      </Row>
    </header>
  )
}

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
