/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"

import Header from "./header"
import 'bootstrap/dist/css/bootstrap.min.css';
import "./layout.css"
import { useSiteMetadata } from "../hooks/use-site-metadata"

const Layout = ({ children }) => {
  const { title, menuLinks } = useSiteMetadata()

  return (
    <div id='main'>
      <Header menuLinks={menuLinks} siteTitle={title || `Title`} />
      <div>
        <main>{children}</main>
        <footer style={{
          marginTop: `2rem`
        }}>
          © {new Date().getFullYear()}, Encuentro Nacional de Arritmias.
              {` `}
          Diseño y desarrollo web por <a href="https://www.mktdigitalideas.com">MKTDigital Ideas</a>
        </footer>
      </div>

    </div>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
