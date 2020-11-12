module.exports = {
  siteMetadata: {
    title: `Encuentro Nacional de Arritmias`,
    description: `Sitio web oficial del Encuentro Nacional de Arritmias del 12 y 13 de noviembre de 2020.`,
    author: `SADEC`,
    keywords: ['arritmias', 'encuentro de arritmias', 'dispositivos implantables', 'muerte súbita' ],
    siteUrl: "https://www.encuentrodearritmias.com.ar",
    image: "/images/banner-web-2020.jpg",
    menuLinks: [
      {
        name: 'inicio',
        link: '/',
        icon: 'FaHome'
      },
      {
        name: 'bienvenida',
        link: '#bienvenida'
      },
      {
        name: 'programa',
        link: '#programa'
      },
      {
        name: 'invitados',
        link: '#invitados'
      },
      {
        name: 'sponsors',
        link: '#sponsors'
      },
    ],
    invitados: [
      {
        name: 'Ángel Arenal',
        country: 'Hospital Gregorio Marañon - Madrid, España',
        filename: 'arenal',
        flag: 'espana'
      },
      {
        name: 'David Calvo Cuervo',
        country: 'Hospital Universitario de Asturias – España)',
        filename: 'calvo',
        flag: 'espana'
      },
      {
        name: 'Roberto Costa',
        country: 'Hospital Sirio-Libanés - San Pablo, Brasil',
        filename: 'costa',
        flag: 'brasil'
      },
      {
        name: 'Fermín García',
        country: 'Pennsylvania Hospital - EE.UU.',
        filename: 'garcia',
        flag: 'usa'
      },
      {
        name: 'Carlos Grande',
        country: 'Hospital U. Son Espases – Palma de Mallorca, España',
        filename: 'grande',
        flag: 'espana'
      },
      {
        name: 'Elkin González Villegas',
        country: 'Hospital U. La Paz – Madrid, España',
        filename: 'villegas',
        flag: 'espana'
      },
      {
        name: 'Carina Hardy',
        country: 'INCOR - San Pablo, Brasil',
        filename: 'hardy',
        flag: 'brasil'
      },
      {
        name: 'Leonardo Liberman',
        country: 'Morgan Stanley Children\'s Hospital - Nueva York, Estados Unidos',
        filename: 'liberman',
        flag: 'usa'
      },
      {
        name: 'José Luis Merino',
        country: 'Hospital Universitario la Paz - Madrid, España',
        filename: 'merino',
        flag: 'espana'
      },
      {
        name: 'Ángel Moya Mitjans',
        country: 'Hospital Universitario Dexeus – Barcelona, España',
        filename: 'mitjans',
        flag: 'espana'
      },
      {
        name: 'Rodrigo Nehgme',
        country: 'Arnold Palmer Hospital For Children - Florida, Estados Unidos',
        filename: 'nehgme',
        flag: 'usa'
      },
      {
        name: 'José Carlos Pachón Mateos',
        country: 'Hospital del Corazón – San Pablo, Brasil',
        filename: 'pachon',
        flag: 'brasil'
      },
      {
        name: 'Pablo Moriña Vázquez',
        country: 'Hospital Juan Ramón Jiménez - Huelva, España',
        filename: 'vazquez',
        flag: 'espana'
      },
      {
        name: 'Armando Pérez Silva',
        country: 'Hospital Regional – Concepción, Chile',
        filename: 'perez',
        flag: 'chile'
      },
      {
        name: 'Mauricio Scanavacca',
        country: 'INCOR - San Pablo, Brasil',
        filename: `scanavacca`,
        flag: 'brasil'
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
        name: `Encuentro Nacional de Arritmias`,
        short_name: `ENA2020`,
        start_url: `/`,
        background_color: `#009CDE`,
        theme_color: `#009CDE`,
        display: `minimal-ui`,
        icon: `src/images/apple-touch-icon.png`, // This path is relative to the root of the site.
      },
    },
    {
      resolve: 'gatsby-plugin-google-analytics',
      options: {
        trackingId: process.env.GOOGLE_ANALYTICS_TRACKING_ID || 'none',
      }
    },
    {
      resolve: `gatsby-plugin-google-gtag`,
      options: {
        // You can add multiple tracking ids and a pageview event will be fired for all of them.
        trackingIds: [
          process.env.GOOGLE_ANALYTICS_TRACKING_ID, // Google Analytics / GA
        ],
      },
    }
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
