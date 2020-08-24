import React from "react";
import Header from "../components/header";
import Footer from "../components/footer";
import { StaticQuery, graphql } from "gatsby";
import Img from "gatsby-image";
import SEO from "../components/seo";

export default () => (
  <StaticQuery
    query={graphql`
      query {
        schedule: file(relativePath: { eq: "schedule.jpg" }) {
          childImageSharp {
            fluid(maxWidth: 1000) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    `}
    render={(data) => (
      <body className="leading-normal tracking-normal text-white gradient">
        <SEO
          title="Schedule"
          keywords={[`McGill`, `Management`, `Frosh`, `2020`, `Penguins`]}
        />

        <Header />

        <section className="bg-white py-8">
          <div className="container max-w-5xl mx-auto m-8">
            <Img
              fluid={data.schedule.childImageSharp.fluid}
              alt="Frosh Schedule"
            />
          </div>
        </section>

        <Footer />
      </body>
    )}
  />
);
