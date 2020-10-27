import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"

const NotFoundPage = () => (
  <Layout>
    <SEO title="404: Not found" />
    <h1>404: No encontrado</h1>
    <h3 style={{ textAlign: center }}>La página que está buscando no existe. <a href='/'>Volver</a></h3>
  </Layout>
)

export default NotFoundPage
