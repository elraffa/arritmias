import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"


const Menu = ({ menuLinks }) => (
    <nav className='menu'>
             <ul style={{ display: 'flex', flex: 1, justifyContent: "center", marginBottom: 0 }}>
                {menuLinks.map((link, index) => (
                    <li
                        key={link.name}
                        style={{
                            listStyleType: 'none',
                            padding: '0.5rem',
                            marginBottom: 0
                        }}
                    >
                        <Link style={{ color: 'black', marginRight: 10}} to={link.link}>
                            {link.name}                          
                        </Link>
                        {menuLinks.length - 1 !== index ? '|' : ''}
                    </li>
                ))}
            </ul>
        </nav>
)

Menu.propTypes = {
    menuLinks: PropTypes.array,
  }
  
Menu.defaultProps = {
    menuLinks: {},
  }

export default Menu;