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
        fizz: file(relativePath: { eq: "sponsors/fizz.png" }) {
          childImageSharp {
            fluid {
              ...GatsbyImageSharpFluid
            }
          }
        }
        jed: file(relativePath: { eq: "sponsors/jed.png" }) {
          childImageSharp {
            fluid {
              ...GatsbyImageSharpFluid
            }
          }
        }
        movemate: file(relativePath: { eq: "sponsors/movemate.png" }) {
          childImageSharp {
            fluid {
              ...GatsbyImageSharpFluid
            }
          }
        }
        pop: file(relativePath: { eq: "sponsors/pop.png" }) {
          childImageSharp {
            fluid {
              ...GatsbyImageSharpFluid
            }
          }
        }
        spin: file(relativePath: { eq: "sponsors/spin.png" }) {
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
          keywords={[`McGill`, `Management`, `Frosh`, `2021`, `Mammoth`]}
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
                <a href="https://www.chefoncalldelivery.com" target="_blank">
                  <Img
                    fluid={data.coc.childImageSharp.fluid}
                    alt="Chef on Call"
                  />
                </a>
              </div>
              <div className="w-full sm:w-full md:w-1/2 lg:w-1/3 my-8 px-4">
                <a
                  href="https://fizz.ca/en?utm_source=mcgill&utm_medium=&utm_medium=&utm_term=referral&utm_content=logo-en&utm_campaign=BTS-partnerships"
                  target="_blank"
                >
                  <Img fluid={data.fizz.childImageSharp.fluid} alt="Fizz" />
                </a>
              </div>
              <div className="w-full sm:w-full md:w-1/2 lg:w-1/3 my-8 px-4">
                <a href="https://www.jed-consulting.com" target="_blank">
                  <Img
                    fluid={data.jed.childImageSharp.fluid}
                    alt="JED McGill"
                  />
                </a>
              </div>
              <div className="w-full sm:w-full md:w-1/2 lg:w-1/3 my-8 px-4">
                <a href="https://movemate.ca" target="_blank">
                  <Img
                    fluid={data.movemate.childImageSharp.fluid}
                    alt="MoveMate"
                  />
                </a>
              </div>
              <div className="w-full sm:w-full md:w-1/2 lg:w-1/3 my-8 px-4">
                <a href="https://popmontreal.com" target="_blank">
                  <Img
                    fluid={data.pop.childImageSharp.fluid}
                    alt="POP Montreal"
                  />
                </a>
              </div>
              <div className="w-full sm:w-full md:w-1/2 lg:w-1/3 my-8 px-4">
                <a href="https://www.spinenergie.com/en" target="_blank">
                  <Img
                    fluid={data.spin.childImageSharp.fluid}
                    alt="Spin Energie"
                  />
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
