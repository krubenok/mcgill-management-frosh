module.exports = {
  siteMetadata: {
    title: `Froshage`,
    titleTemplate: "%s · MUS Frosh 2021",
    description: `McGill Management Frosh 2021`,
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
        name: `Froshage`,
        short_name: `MUS Frosh`,
        start_url: `/`,
        background_color: `#ffffff`,
        theme_color: `#D9E4F7`,
        display: `minimal-ui`,
        icon: `src/images/mammoth.svg`,
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
        name: "Froshage",
        short_name: "MUS Frosh 2021",
        start_url: "/",
        background_color: "#FFFFFF",
        theme_color: "#D9E4F7",
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
