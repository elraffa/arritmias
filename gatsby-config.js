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
        link:'#programa'
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
        name: 'Ángel Arenal',
        country: 'Hospital Gregorio Marañon - Madrid, España',
        filename: 'arenal'
      },
      {
        name: 'Adrián Baranchuk',
        country: 'Universidad de Kingston - Canadá',
        filename: 'baranchuk'
      },
      {
        name: 'Roberto Costa',
        country: 'Hospital Sirio-Libanés - San Pablo, Brasil',
        filename: 'costa'
      },
      {
        name: 'Carlos Grande',
        country: 'Hospital U. Son Espases – Palma de Mallorca, España',
        filename: 'grande'
      },
      {
        name: 'Elkin González Villegas',
        country: 'Hospital U. La Paz – Madrid, España',
        filename: 'villegas'
      },
      {
        name: 'Carina Hardy',
        country: 'INCOR - San Pablo, Brasil',
        filename: 'hardy'
      },
      {
        name: 'José Luis Merino',
        country: 'Hospital Universitario la Paz - Madrid, España',
        filename: 'merino'
      },
      {
        name: 'Ángel Moya Mitjans',
        country: 'Hospital Universitario Dexeus – Barcelona, España',
        filename: 'mitjans'
      },
      {
        name: 'José Carlos Pachón Mateos',
        country: 'Hospital del Corazón – San Pablo, Brasil',
        filename: 'pachon'
      },
      {
        name: 'Armando Pérez Silva',
        country: 'Hospital Regional – Concepción, Chile',
        filename: 'pachon'
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
