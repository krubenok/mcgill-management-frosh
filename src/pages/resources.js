import React from "react";
import { StaticQuery, graphql } from "gatsby";
import Img from "gatsby-image";
import Header from "../components/header";
import Footer from "../components/footer";
import SEO from "../components/seo";

export default () => (
  <StaticQuery
    query={graphql`
      query {
        frosh1: file(relativePath: { eq: "frosh-1.jpg" }) {
          childImageSharp {
            fluid {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    `}
    render={(data) => (
      <body className="leading-normal tracking-normal text-white gradient">
        <SEO
          title="Frosh of the Penguins"
          keywords={[`McGill`, `Management`, `Frosh`, `2020`, `Penguins`]}
        />

        <Header />

        <section className="bg-white py-8">
          <div className="container max-w-5xl mx-auto m-8">
            <h2 className="w-full my-2 text-5xl font-bold leading-tight text-center text-gray-800">
              About
            </h2>
            <div className="w-full mb-4">
              <div className="h-1 mx-auto gradient w-64 opacity-25 my-0 py-0 rounded-t"></div>
            </div>

            <div className="flex flex-wrap">
              <div className="p-6">
                <p className="text-gray-600 mb-8">
                  The Management Undergraduate Society (MUS) is proud to present
                  Frosh of the Penguins, open to all incoming students within
                  the Faculty of Management at McGill University. Due to all
                  classes moving online for the Fall 2020 Semester, Management
                  Frosh will be proceeding in a virtual environment. Our goal is
                  to provide an unforgettable experience that is safe, inclusive
                  and welcoming, even with the uniqueness of Frosh this year.
                  Within our two day virtual event, students will be able to
                  connect with fellow classmates, upper year students, and
                  faculty members, as well as be introduced to the McGill and
                  Montreal community.
                </p>
                <p className="text-gray-600 mb-8">
                  No matter where our froshies are this year they will have the
                  ability to meet the McGill community, become comfortable with
                  Montreal, and make long-lasting friends. With the guidance of
                  over 70 Frosh Leaders, Management Frosh is an incoming
                  student's chance to experience all that McGill has to offer.
                </p>
                <Img fluid={data.frosh1.childImageSharp.fluid} />
              </div>
            </div>
            <div className="flex flex-wrap">
              <div className="p-6">
                <h3 className="text-3xl text-gray-800 font-bold leading-none mb-3">
                  Frequently Asked Questions
                </h3>
              </div>
            </div>
          </div>
        </section>

        <Footer />
      </body>
    )}
  />
);
