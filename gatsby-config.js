module.exports = {
  siteMetadata: {
    title: `Encuentro Nacional de Arritmias`,
    description: `Sitio web oficial del Encuentro Nacional de Arritmias del 12 y 13 de noviembre de 2020.`,
    author: `SADEC`,
    menuLinks: [
      {
        name:'inicio',
        link:'/',
        icon:'FaHome'
      }, 
      {
        name:'bienvenida',
        link:'#bienvenida'
      }, 
      {
        name:'programa',
        link:'/programa'
      },
      {
        name:'sponsors',
        link:'/sponsors'
      },
      {
        name:'exposicion',
        link:'/exposicion'
      },
      {
        name:'novedades',
        link:'/novedades'
      },
    ], 
    invitados: [
      {
        name: 'Juan Carlos Portaluppi',
        country: 'Brasil',
        filename: 'src/images/logo.png'
      },
      {
        name: 'Mauricio Scanavacca',
        country: 'Brasil',
        filename: 'src/images/logo.png'
      },
      {
        name: 'Mauricio Scanavacca',
        country: 'Brasil',
        filename: 'src/images/logo.png'
      },
      {
        name: 'Carina Hardy',
        country: 'Brasil',
        filename: 'hardy'
      },
      {
        name: 'Mauricio Scanavacca',
        country: 'Brasil',
        filename: `scanavacca`
      }
    ]
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/apple-touch-icon.png`, // This path is relative to the root of the site.
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
