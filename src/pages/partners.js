import React from "react";
import { StaticQuery, graphql, Link } from "gatsby";
import Img from "gatsby-image";
import Header from "../components/header";
import Footer from "../components/footer";
import SEO from "../components/seo";

export default () => (
  <StaticQuery
    query={graphql`
      query {
        coc: file(relativePath: { eq: "sponsors/coc.png" }) {
          childImageSharp {
            fluid {
              ...GatsbyImageSharpFluid
            }
          }
        }
        das: file(relativePath: { eq: "sponsors/das.jpg" }) {
          childImageSharp {
            fluid {
              ...GatsbyImageSharpFluid
            }
          }
        }
        fizz: file(relativePath: { eq: "sponsors/fizz.png" }) {
          childImageSharp {
            fluid {
              ...GatsbyImageSharpFluid
            }
          }
        }
        licm: file(relativePath: { eq: "sponsors/licm.png" }) {
          childImageSharp {
            fluid {
              ...GatsbyImageSharpFluid
            }
          }
        }
        sos: file(relativePath: { eq: "sponsors/sos.png" }) {
          childImageSharp {
            fluid {
              ...GatsbyImageSharpFluid
            }
          }
        }
        wize: file(relativePath: { eq: "sponsors/wize.png" }) {
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
          title="Partners"
          keywords={[`McGill`, `Management`, `Frosh`, `2020`, `Penguins`]}
        />

        <Header />

        <section className="bg-white py-8">
          <div className="container max-w-5xl mx-auto m-8">
            <h2 className="w-full my-2 text-5xl font-bold leading-tight text-center text-gray-800">
              Partners
            </h2>
            <div className="w-full mb-4">
              <div className="h-1 mx-auto gradient w-64 opacity-25 my-0 py-0 rounded-t"></div>
            </div>
            <div className="flex flex-wrap items-center justify-around leading-normal text-black">
              <div className="w-full sm:w-full md:w-1/2 lg:w-1/3 my-8 px-4">
                <a href="https://www.chefoncalldelivery.com">
                  <Img
                    fluid={data.coc.childImageSharp.fluid}
                    alt="Chef on Call"
                  />
                </a>
              </div>
              <div className="w-full sm:w-full md:w-1/2 lg:w-1/3 my-8 px-4">
                <a href="https://dasmcgill.ca">
                  <Img
                    fluid={data.das.childImageSharp.fluid}
                    alt="Desautels Accounting Society"
                  />
                </a>
              </div>
              <div className="w-full sm:w-full md:w-1/2 lg:w-1/3 my-8 px-4">
                <a href="https://licm.ca">
                  <Img
                    fluid={data.licm.childImageSharp.fluid}
                    alt="Legal Information Clinic at McGill"
                  />
                </a>
              </div>
              <div className="w-full sm:w-full md:w-1/2 lg:w-1/3 my-8 px-4">
                <a href="https://fizz.ca/en?utm_source=mcgill&utm_medium=&utm_medium=&utm_term=referral&utm_content=logo-en&utm_campaign=BTS-partnerships">
                  <Img fluid={data.fizz.childImageSharp.fluid} alt="Fizz" />
                </a>
              </div>
              <div className="w-full sm:w-full md:w-1/2 lg:w-1/3 my-8 px-4">
                <a href="https://sostutoring.com">
                  <Img
                    fluid={data.sos.childImageSharp.fluid}
                    alt="SOS Tutoring"
                  />
                </a>
              </div>
              <div className="w-full sm:w-full md:w-1/2 lg:w-1/3 my-8 px-4">
                <a href="https://wizedemy.com">
                  <Img fluid={data.wize.childImageSharp.fluid} alt="Wize" />
                </a>
              </div>
            </div>
          </div>
        </section>
        <Footer />
      </body>
    )}
  />
);
