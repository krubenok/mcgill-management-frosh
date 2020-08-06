module.exports = {
  siteMetadata: {
    title: `Frosh of the Penguins`,
    titleTemplate: "%s · MUS Frosh 2020",
    description: `McGill Management Frosh 2020`,
    url: "https://musfrosh.com",
    image: "/cover.png", // Path to your image you placed in the 'static' folder
    siteLanguage: "en",
    siteImage: "/cover.png",
    author: `@krubenok`,
    github: `https://github.com/krubenok/mcgill-management-frosh`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Frosh of the Penguins`,
        short_name: `MUS Frosh`,
        start_url: `/`,
        background_color: `#ffffff`,
        theme_color: `#00ddfa`,
        display: `minimal-ui`,
        icon: `src/images/penguin.svg`,
      },
    },
    `gatsby-plugin-postcss`,
    {
      resolve: "gatsby-plugin-purgecss",
      options: {
        tailwind: true,
        purgeOnly: ["src/css/style.css", "src/css/global.css"],
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images/`,
      },
    },
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
    {
      resolve: "gatsby-plugin-manifest",
      options: {
        name: "Frosh of the Penguins",
        short_name: "MUS Frosh 2020",
        start_url: "/",
        background_color: "#FFFFFF",
        theme_color: "#7AB142",
        display: "standalone",
        icon: "src/images/logo.png",
      },
    },
    {
      resolve: "gatsby-plugin-offline",
      options: {
        precachePages: ["/about", "/schedule", "/resources"],
      },
    },
  ],
};
