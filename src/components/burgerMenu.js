import { Link } from "gatsby"
import PropTypes from "prop-types"
import React, { useState } from "react"

import { FaFacebook, FaInstagram, FaCaretRight } from 'react-icons/fa';
import { stack as Menu } from 'react-burger-menu';
import { Button } from 'react-bootstrap';
import logoWhite from '../images/logo-white.png';

var styles = {
  bmBurgerButton: {
    position: 'fixed',
    width: '26px',
    height: '20px',
    right: '20px',
    top: '24px'
  },
  bmBurgerBars: {
    background: '#AE0018'
  },
  bmBurgerBarsHover: {
    background: '#a90000'
  },
  bmCrossButton: {
    height: '24px',
    width: '24px'
  },
  bmCross: {
    background: '#bdc3c7'
  },
  bmMenuWrap: {
    position: 'fixed',
    height: '100%',
    top: 0
  },
  bmMenu: {
    background: '#AE0018',
    padding: '2.5em 1.5em 0',
    fontSize: '1.15em'
  },
  bmMorphShape: {
    fill: '#373a47'
  },
  bmItemList: {
    color: '#b8b7ad',
    padding: '0.8em',
    textAlign: 'center',
  },
  bmItem: {
    display: 'inline-block',
  },
  bmOverlay: {
    background: 'rgba(0, 0, 0, 0.3)'
  }
}

const BurgerMenu = ({ menuLinks }) => {

  const [menuOpenState, setMenuOpenState] = useState(false)

  const toggleMenu = () => {
    setMenuOpenState(!menuOpenState);
  }

  const stateChangeHandler = (newState) => setMenuOpenState(newState.isOpen);

  return (

    <Menu styles={styles} right isOpen={menuOpenState} onStateChange={(state) => stateChangeHandler(state)} >
      <Button variant="outline-light" style={{ textTransform: 'uppercase', display: 'block', margin: '0 auto' }} className='btn-lg btn-inscripciones-mobile'><a href='https://intercloudy.contilatam.com/1646/encuentro-nacional-de-arritmias' target='_blank' rel='noreferrer'>Inscripciones{<FaCaretRight />}</a></Button>
      <ul>
        {menuLinks.map((link) => (
          <li
            key={link.name}
            style={{
              listStyleType: 'none',
              padding: '0.9rem',
              margin: 0,
              textTransform: 'uppercase',
            }}
          >
            <Link style={{ color: 'white', marginRight: 20 }} to={link.link} onClick={toggleMenu}>
              {link.name}
            </Link>
          </li>
        ))}
      </ul>
      <img src={logoWhite} alt='Encuentro Nacional de Arritmias' style={{ width: '60%', display: 'block', margin: '0 auto' }} />
      <ul className='mobile-social'>
        <a href="https://www.facebook.com/Encuentro-Nacional-de-Arritmias-102559971635631">{<FaFacebook />}</a>
        <a href="https://www.instagram.com/encuentro.arritmias/">{<FaInstagram />}</a>
      </ul>
    </Menu>
  )
}

BurgerMenu.propTypes = {
  menuLinks: PropTypes.array,
}

BurgerMenu.defaultProps = {
  menuLinks: {},
}

export default BurgerMenu;