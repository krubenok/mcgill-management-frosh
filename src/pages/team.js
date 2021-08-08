import React from "react";
import { StaticQuery, graphql } from "gatsby";
import Img from "gatsby-image";
import Header from "../components/header";
import Footer from "../components/footer";
import SEO from "../components/seo";

// eslint-disable-next-line import/no-anonymous-default-export
export default () => (
  <StaticQuery
    query={graphql`
      query {
        abbey: file(relativePath: { eq: "coords/abbey.jpg" }) {
          childImageSharp {
            fluid {
              ...GatsbyImageSharpFluid
            }
          }
        }
        antoine: file(relativePath: { eq: "coords/antoine.jpg" }) {
          childImageSharp {
            fluid {
              ...GatsbyImageSharpFluid
            }
          }
        }
        ben: file(relativePath: { eq: "coords/ben.jpg" }) {
          childImageSharp {
            fluid {
              ...GatsbyImageSharpFluid
            }
          }
        }
        david: file(relativePath: { eq: "coords/david.jpg" }) {
          childImageSharp {
            fluid {
              ...GatsbyImageSharpFluid
            }
          }
        }
        flo: file(relativePath: { eq: "coords/flo.jpg" }) {
          childImageSharp {
            fluid {
              ...GatsbyImageSharpFluid
            }
          }
        }
        guillaume: file(relativePath: { eq: "coords/guillaume.jpg" }) {
          childImageSharp {
            fluid {
              ...GatsbyImageSharpFluid
            }
          }
        }
        mateo: file(relativePath: { eq: "coords/mateo.jpg" }) {
          childImageSharp {
            fluid {
              ...GatsbyImageSharpFluid
            }
          }
        }
        nicolas: file(relativePath: { eq: "coords/nicolas.jpg" }) {
          childImageSharp {
            fluid {
              ...GatsbyImageSharpFluid
            }
          }
        }
        patrick: file(relativePath: { eq: "coords/patrick.jpg" }) {
          childImageSharp {
            fluid {
              ...GatsbyImageSharpFluid
            }
          }
        }
        taylor: file(relativePath: { eq: "coords/taylor.jpg" }) {
          childImageSharp {
            fluid {
              ...GatsbyImageSharpFluid
            }
          }
        }
        zach: file(relativePath: { eq: "coords/zach.jpg" }) {
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
          title="Team"
          keywords={[`McGill`, `Management`, `Frosh`, `2021`, `Mammoth`]}
        />

        <Header />

        <section className="bg-white py-8">
          <div className="container max-w-5xl mx-auto m-8">
            <h2 className="w-full my-2 text-5xl font-bold leading-tight text-center text-gray-800">
              Team
            </h2>
            <div className="w-full mb-4">
              <div className="h-1 mx-auto gradient w-64 opacity-25 my-0 py-0 rounded-t"></div>
            </div>
            <div className="flex flex-wrap">
              <div className="p-6">
                <h3 className="text-3xl text-gray-800 font-bold leading-none mb-3">
                  Committee
                </h3>
                <div className="flex flex-wrap leading-normal text-black">
                  <div className="w-full sm:w-full md:w-1/2 lg:w-1/3 my-8 px-4">
                    <Img
                      fluid={data.david.childImageSharp.fluid}
                      alt="David Fish"
                    />
                    <p className="text-m lg:text-l mt-2">
                      <strong>Name:</strong> David Fish
                    </p>
                    <p className="text-m lg:text-l mt-2">
                      VP Events from Vancouver, BC
                    </p>
                    <p className="text-m lg:text-l mt-2">
                      <strong>Major:</strong> Finance
                    </p>
                    <p className="text-m lg:text-l mt-2">
                      <strong>Fun Fact: </strong> I've never had coffee before
                    </p>
                    <p className="text-m lg:text-l mt-2">
                      <strong>Guilty Pleasure: </strong> Disney Movies
                    </p>
                  </div>
                  <div className="w-full sm:w-full md:w-1/2 lg:w-1/3 my-8 px-4">
                    <Img
                      fluid={data.flo.childImageSharp.fluid}
                      alt="Flo Campbell"
                    />
                    <p className="text-m lg:text-l mt-2">
                      <strong>Name:</strong> Flo Campbell
                    </p>
                    <p className="text-m lg:text-l mt-2">
                      Co-Chair from Montreal, QC
                    </p>
                    <p className="text-m lg:text-l mt-2">
                      <strong>Major:</strong> Accounting
                    </p>
                    <p className="text-m lg:text-l mt-2">
                      <strong>Hidden Talent: </strong> Loosing my phone
                    </p>
                    <p className="text-m lg:text-l mt-2">
                      <strong>Go-To McGill Event: </strong> Beach Day Every Day
                    </p>
                  </div>
                  <div className="w-full sm:w-full md:w-1/2 lg:w-1/3 my-8 px-4">
                    <Img
                      fluid={data.guillaume.childImageSharp.fluid}
                      alt="Guillaume Paquette"
                    />
                    <p className="text-m lg:text-l mt-2">
                      <strong>Name:</strong> Guillaume Paquette
                    </p>
                    <p className="text-m lg:text-l mt-2">
                      Co-Chair from Montreal, QC
                    </p>
                    <p className="text-m lg:text-l mt-2">
                      <strong>Major:</strong> Finance
                    </p>
                    <p className="text-m lg:text-l mt-2">
                      <strong>Hidden Talent: </strong> Walking in heels
                    </p>
                    <p className="text-m lg:text-l mt-2">
                      <strong>Best spot in Montreal: </strong> Bronfman 2nd
                      floor
                    </p>
                  </div>
                  <div className="w-full sm:w-full md:w-1/2 lg:w-1/3 my-8 px-4">
                    <Img
                      fluid={data.abbey.childImageSharp.fluid}
                      alt="Abbey Kaminker"
                    />
                    <p className="text-m lg:text-l mt-2">
                      <strong>Name:</strong> Abbey Kaminker
                    </p>
                    <p className="text-m lg:text-l mt-2">
                      Chief of Staff from Toronto, On
                    </p>
                    <p className="text-m lg:text-l mt-2">
                      <strong>Major:</strong> Finance
                    </p>
                    <p className="text-m lg:text-l mt-2">
                      <strong>Hidden Talent: </strong> Getting a seat in the
                      library during finals
                    </p>
                    <p className="text-m lg:text-l mt-2">
                      <strong>Guilty Pleasure: </strong> TikTok
                    </p>
                  </div>
                  <div className="w-full sm:w-full md:w-1/2 lg:w-1/3 my-8 px-4">
                    <Img
                      fluid={data.antoine.childImageSharp.fluid}
                      alt="Antoine Dalarue"
                    />
                    <p className="text-m lg:text-l mt-2">
                      <strong>Name:</strong> Antoine Dalarue
                    </p>
                    <p className="text-m lg:text-l mt-2">
                      Director of Logistics from Geneva, Switzerland
                    </p>
                    <p className="text-m lg:text-l mt-2">
                      <strong>Major:</strong> Finance
                    </p>
                    <p className="text-m lg:text-l mt-2">
                      <strong>Hidden Talent: </strong> Handstands
                    </p>
                    <p className="text-m lg:text-l mt-2">
                      <strong>Go-To McGill Event: </strong> Bronfman Ball
                    </p>
                  </div>
                  <div className="w-full sm:w-full md:w-1/2 lg:w-1/3 my-8 px-4">
                    <Img
                      fluid={data.ben.childImageSharp.fluid}
                      alt="Ben Raymond"
                    />
                    <p className="text-m lg:text-l mt-2">
                      <strong>Name:</strong> Ben Raymond
                    </p>
                    <p className="text-m lg:text-l mt-2">
                      Director of Logistics from Montreal, QC
                    </p>
                    <p className="text-m lg:text-l mt-2">
                      <strong>Major:</strong> Finance
                    </p>
                    <p className="text-m lg:text-l mt-2">
                      <strong>Hidden Talent: </strong> Convincing people to
                      spend $500 on ugly shoes
                    </p>
                    <p className="text-m lg:text-l mt-2">
                      <strong>Best spot in Montreal: </strong> Ssense
                    </p>
                  </div>
                  <div className="w-full sm:w-full md:w-1/2 lg:w-1/3 my-8 px-4">
                    <Img
                      fluid={data.mateo.childImageSharp.fluid}
                      alt="Mateo Jeanneau"
                    />
                    <p className="text-m lg:text-l mt-2">
                      <strong>Name:</strong> Mateo Jeanneau
                    </p>
                    <p className="text-m lg:text-l mt-2">
                      SEDI Director from Berkeley, CA
                    </p>
                    <p className="text-m lg:text-l mt-2">
                      <strong>Major:</strong> Strategy, Reatail &
                      Entrepeneurship
                    </p>
                    <p className="text-m lg:text-l mt-2">
                      <strong>Hidden Talent: </strong> Fixing iPhones
                    </p>
                    <p className="text-m lg:text-l mt-2">
                      <strong>Guilty Pleasure: </strong> Argentinian Trap
                    </p>
                  </div>
                  <div className="w-full sm:w-full md:w-1/2 lg:w-1/3 my-8 px-4">
                    <Img
                      fluid={data.nicolas.childImageSharp.fluid}
                      alt="Nicolas Beaulne"
                    />
                    <p className="text-m lg:text-l mt-2">
                      <strong>Name:</strong> Nicolas Beaulne
                    </p>
                    <p className="text-m lg:text-l mt-2">
                      Director of Sponsorship from Ottawa, ON
                    </p>
                    <p className="text-m lg:text-l mt-2">
                      <strong>Major:</strong> International Management
                    </p>
                    <p className="text-m lg:text-l mt-2">
                      <strong>Hidden Talent: </strong> All-terrain sleeping
                    </p>
                    <p className="text-m lg:text-l mt-2">
                      <strong>Go-To McGill Event: </strong> Not qualified to
                      answer
                    </p>
                  </div>
                  <div className="w-full sm:w-full md:w-1/2 lg:w-1/3 my-8 px-4">
                    <Img
                      fluid={data.patrick.childImageSharp.fluid}
                      alt="Patrick Koper"
                    />
                    <p className="text-m lg:text-l mt-2">
                      <strong>Name:</strong> Patrick Koper
                    </p>
                    <p className="text-m lg:text-l mt-2">
                      Director of Sponsorship from Montreal, QC
                    </p>
                    <p className="text-m lg:text-l mt-2">
                      <strong>Major:</strong> Finance
                    </p>
                    <p className="text-m lg:text-l mt-2">
                      <strong>Hidden Talent: </strong> Family Guy impression
                    </p>
                    <p className="text-m lg:text-l mt-2">
                      <strong>Go-To McGill Event: </strong> Terrasse St-Ambroise
                    </p>
                  </div>
                  <div className="w-full sm:w-full md:w-1/2 lg:w-1/3 my-8 px-4">
                    <Img
                      fluid={data.taylor.childImageSharp.fluid}
                      alt="Taylor Williams"
                    />
                    <p className="text-m lg:text-l mt-2">
                      <strong>Name:</strong> Taylor Williams
                    </p>
                    <p className="text-m lg:text-l mt-2">
                      SEDI Director from Vancouver, BC
                    </p>
                    <p className="text-m lg:text-l mt-2">
                      <strong>Major:</strong> Managing for Sustainability
                    </p>
                    <p className="text-m lg:text-l mt-2">
                      <strong>Hidden Talent: </strong> Flower Arranging
                    </p>
                    <p className="text-m lg:text-l mt-2">
                      <strong>Fun Fact: </strong> I am allergic to flowers
                    </p>
                  </div>
                  <div className="w-full sm:w-full md:w-1/2 lg:w-1/3 my-8 px-4">
                    <Img
                      fluid={data.zach.childImageSharp.fluid}
                      alt="Zach Cicek"
                    />
                    <p className="text-m lg:text-l mt-2">
                      <strong>Name:</strong> Zach Cicek
                    </p>
                    <p className="text-m lg:text-l mt-2">
                      Inter-Faculty Coordinator from Vancouver, BC
                    </p>
                    <p className="text-m lg:text-l mt-2">
                      <strong>Major:</strong> Marketing
                    </p>
                    <p className="text-m lg:text-l mt-2">
                      <strong>Hidden Talent: </strong> Belly Moving
                    </p>
                    <p className="text-m lg:text-l mt-2">
                      <strong>Guilty Pleasure: </strong> Ecole Privée
                    </p>
                  </div>
                </div>
              </div>
              <div className="p-6"></div>
            </div>
          </div>
        </section>
        <Footer />
      </body>
    )}
  />
);
