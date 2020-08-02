module.exports = {
  siteMetadata: {
    title: `Frosh of the Penguins`,
    description: `McGill Management Frosh 2020`,
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
  ],
};
