module.exports = {
  siteMetadata: {
    title: `SUPN Treff`,
    description: `Das Sub und Popkultur Netzwerk Treffen ist ein offenes Netzwerk von und für Akteur*innen aus Regensburg, die ganz verschiedenen Bereichen der lokalen Musikszene angehören: Veranstalter*innen von Clubkonzerten und Festivals, Musiker*innen, Verlagsleute, Booker*innen. Egal, ob DIY oder Profibereich, öffentlich gefördert oder privatwirtschaftlich, vor, auf oder hinter der Bühne - wir haben alle eins gemeinsam: wir brennen für eine lebendige, offene, bunte und vor allem auch starke Pop- und Subkulturszene in Regensburg.`,
    author: `@gatsbyjs`,
    menuLinks: [
      {
        name: "",
        link: "",
      },
    ],
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
        icon: `src/images/supn_icon.png`, // This path is relative to the root of the site.
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
