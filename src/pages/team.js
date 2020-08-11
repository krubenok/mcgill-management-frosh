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
        barre: file(relativePath: { eq: "coords/barre.jpeg" }) {
          childImageSharp {
            fluid {
              ...GatsbyImageSharpFluid
            }
          }
        }
        campbell: file(relativePath: { eq: "coords/campbell.jpeg" }) {
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
        elan: file(relativePath: { eq: "coords/elan.jpeg" }) {
          childImageSharp {
            fluid {
              ...GatsbyImageSharpFluid
            }
          }
        }
        guillaume: file(relativePath: { eq: "coords/guillaume.jpeg" }) {
          childImageSharp {
            fluid {
              ...GatsbyImageSharpFluid
            }
          }
        }
        lindsay: file(relativePath: { eq: "coords/lindsay.jpeg" }) {
          childImageSharp {
            fluid {
              ...GatsbyImageSharpFluid
            }
          }
        }
        megan: file(relativePath: { eq: "coords/megan.jpeg" }) {
          childImageSharp {
            fluid {
              ...GatsbyImageSharpFluid
            }
          }
        }
        melanie: file(relativePath: { eq: "coords/melanie.jpeg" }) {
          childImageSharp {
            fluid {
              ...GatsbyImageSharpFluid
            }
          }
        }
        patrick: file(relativePath: { eq: "coords/patrick.jpeg" }) {
          childImageSharp {
            fluid {
              ...GatsbyImageSharpFluid
            }
          }
        }
        sydney: file(relativePath: { eq: "coords/sydney.JPG" }) {
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
          keywords={[`McGill`, `Management`, `Frosh`, `2020`, `Penguins`]}
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
                      fluid={data.sydney.childImageSharp.fluid}
                      alt="Sydney"
                    />
                    <p className="text-m lg:text-l mt-2">
                      <strong>Name:</strong> Sydney Kalyn
                    </p>
                    <p className="text-m lg:text-l mt-2">
                      <strong>Position:</strong> VP Events{" "}
                    </p>
                    <p className="text-m lg:text-l mt-2">
                      <strong>Major:</strong> Finance / Business Analytics /
                      Math{" "}
                    </p>
                    <p className="text-m lg:text-l mt-2">
                      <strong>Go to McGill Event: </strong> Winter Carnival{" "}
                    </p>
                    <p className="text-m lg:text-l mt-2">
                      <strong>Best Spot in Montreal: </strong> Suwu on a Sunday
                      morning
                    </p>
                    <p className="text-m lg:text-l mt-2">
                      <strong>Hidden Talent:</strong> balancing pitchers on my
                      head
                    </p>
                    <p className="text-m lg:text-l mt-2">
                      <strong>First Year Bucket List: </strong> Participating in
                      scunt season
                    </p>
                  </div>
                  <div className="w-full sm:w-full md:w-1/2 lg:w-1/3 my-8 px-4">
                    <Img
                      fluid={data.barre.childImageSharp.fluid}
                      alt="Florence Barre"
                    />
                    <p className="text-m lg:text-l mt-2">
                      <strong>Name:</strong> Florence Barre
                    </p>
                    <p className="text-m lg:text-l mt-2">
                      <strong>Position:</strong> Co Chair{" "}
                    </p>
                    <p className="text-m lg:text-l mt-2">
                      <strong>Major:</strong> Marketing and Global Strategies{" "}
                    </p>
                    <p className="text-m lg:text-l mt-2">
                      <strong>Fun Fact: </strong> I met my doppelganger during
                      Frosh!!{" "}
                    </p>
                    <p className="text-m lg:text-l mt-2">
                      <strong>Go to McGill event:</strong> OAP!
                    </p>
                    <p className="text-m lg:text-l mt-2">
                      <strong>Best Spot in Montreal: </strong> Mac Campus
                    </p>
                    <p className="text-m lg:text-l mt-2">
                      <strong>Guilty pleasure:</strong> cutting bangs on myself
                      during mid-terms and finals
                    </p>
                    <p className="text-m lg:text-l mt-2">
                      <strong>Hidden talent:</strong> spending way too much time
                      in Bronfman
                    </p>
                    <p className="text-m lg:text-l mt-2">
                      <strong>First year bucket list:</strong> Cafe Campus
                    </p>
                  </div>
                  <div className="w-full sm:w-full md:w-1/2 lg:w-1/3 my-8 px-4">
                    <Img
                      fluid={data.guillaume.childImageSharp.fluid}
                      alt="Florence Barre"
                    />
                    <p className="text-m lg:text-l mt-2">
                      <strong>Name:</strong> Guillaume Paquette
                    </p>
                    <p className="text-m lg:text-l mt-2">
                      <strong>Position:</strong> Co Chair{" "}
                    </p>
                    <p className="text-m lg:text-l mt-2">
                      <strong>Go to mcgill event: </strong> bronfman ball as a
                      first year{" "}
                    </p>
                    <p className="text-m lg:text-l mt-2">
                      <strong>Best Spot in Montreal: </strong> Old Port
                    </p>
                    <p className="text-m lg:text-l mt-2">
                      <strong>First year bucket list:</strong> try to study on
                      bronfman 2nd floor{" "}
                    </p>
                    <p className="text-m lg:text-l mt-2">
                      <strong>Guilty pleasure:</strong> dressing as a drag ...
                      lmao
                    </p>
                    <p className="text-m lg:text-l mt-2">
                      <strong>Hidden Talent:</strong> walking in heels
                    </p>
                  </div>
                  <div className="w-full sm:w-full md:w-1/2 lg:w-1/3 my-8 px-4">
                    <Img
                      fluid={data.david.childImageSharp.fluid}
                      alt="David Fishman"
                    />
                    <p className="text-m lg:text-l mt-2">
                      <strong>Name:</strong> David Fishman
                    </p>
                    <p className="text-m lg:text-l mt-2">
                      <strong>Position:</strong> Director of Logistics{" "}
                    </p>
                    <p className="text-m lg:text-l mt-2">
                      <strong>Hometown:</strong> Vancouver, BC{" "}
                    </p>
                    <p className="text-m lg:text-l mt-2">
                      <strong>Fun fact about you: </strong> I’ve never had
                      coffee before
                    </p>
                    <p className="text-m lg:text-l mt-2">
                      <strong>Go to McGill event:</strong> Carnival or OAP{" "}
                    </p>
                    <p className="text-m lg:text-l mt-2">
                      <strong>Best spot in Montreal:</strong> Molson Hall
                    </p>
                    <p className="text-m lg:text-l mt-2">
                      <strong>Guilty pleasure:</strong> Disney Movies
                    </p>
                    <p className="text-m lg:text-l mt-2">
                      <strong>Hidden talent:</strong> All my talents are public
                    </p>
                    <p className="text-m lg:text-l mt-2">
                      <strong>First year bucket list:</strong> 4á7
                    </p>
                  </div>
                  <div className="w-full sm:w-full md:w-1/2 lg:w-1/3 my-8 px-4">
                    <Img
                      fluid={data.melanie.childImageSharp.fluid}
                      alt="Melanie Gauthier"
                    />
                    <p className="text-m lg:text-l mt-2">
                      <strong>Name:</strong> Melanie Gauthier
                    </p>
                    <p className="text-m lg:text-l mt-2">
                      <strong>Position:</strong> Director of Sponsorship{" "}
                    </p>
                    <p className="text-m lg:text-l mt-2">
                      <strong>Hometown:</strong> Montreal, QC{" "}
                    </p>
                    <p className="text-m lg:text-l mt-2">
                      <strong>Major: </strong> Marketing
                    </p>
                    <p className="text-m lg:text-l mt-2">
                      <strong>Best spot in Montreal:</strong> The Alpine Roof
                    </p>
                    <p className="text-m lg:text-l mt-2">
                      <strong>Guilty pleasure:</strong> Moshpits
                    </p>
                    <p className="text-m lg:text-l mt-2">
                      <strong>Hidden talent:</strong> Headguns
                    </p>
                    <p className="text-m lg:text-l mt-2">
                      <strong>Go to McGill Event:</strong> Carnival
                    </p>
                  </div>
                  <div className="w-full sm:w-full md:w-1/2 lg:w-1/3 my-8 px-4">
                    <Img
                      fluid={data.lindsay.childImageSharp.fluid}
                      alt="Lindsay Dempsey"
                    />
                    <p className="text-m lg:text-l mt-2">
                      <strong>Name:</strong> Lindsay Dempsey
                    </p>
                    <p className="text-m lg:text-l mt-2">
                      <strong>Position:</strong> Inter-faculty Coordinator{" "}
                    </p>
                    <p className="text-m lg:text-l mt-2">
                      <strong>Major: </strong> Finance
                    </p>
                    <p className="text-m lg:text-l mt-2">
                      <strong>Fun fact about you:</strong> I can walk on my
                      hands
                    </p>
                    <p className="text-m lg:text-l mt-2">
                      <strong>Go to McGill Event:</strong> Carnival
                    </p>
                    <p className="text-m lg:text-l mt-2">
                      <strong>Best spot in Montreal: </strong> Daves Store
                    </p>
                    <p className="text-m lg:text-l mt-2">
                      <strong>Guilty Pleasure:</strong> McGill memes
                    </p>
                    <p className="text-m lg:text-l mt-2">
                      <strong>Hidden Talent:</strong> Mario kart
                    </p>
                    <p className="text-m lg:text-l mt-2">
                      <strong>First year bucket list:</strong> (virtual??) cafe
                      campus
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
                      <strong>Position:</strong> Director of Logistics{" "}
                    </p>
                    <p className="text-m lg:text-l mt-2">
                      <strong>Major: </strong> Finance
                    </p>
                    <p className="text-m lg:text-l mt-2">
                      <strong>Concentration: </strong> Marketing
                    </p>
                    <p className="text-m lg:text-l mt-2">
                      <strong>Fun fact about you:</strong> I’m a musician, check
                      out my stuff on Spotify!
                    </p>
                    <p className="text-m lg:text-l mt-2">
                      <strong>Go to McGill Event:</strong> Carnival MCAT
                    </p>
                    <p className="text-m lg:text-l mt-2">
                      <strong>Best spot in Montreal: </strong> Piknik in the
                      summer
                    </p>
                    <p className="text-m lg:text-l mt-2">
                      <strong>Guilty Pleasure:</strong> pineapple on pizza
                    </p>
                    <p className="text-m lg:text-l mt-2">
                      <strong>Hidden Talent:</strong> sleeping through morning
                      classes
                    </p>
                    <p className="text-m lg:text-l mt-2">
                      <strong>First year bucket list:</strong> igloofest
                    </p>
                  </div>
                  <div className="w-full sm:w-full md:w-1/2 lg:w-1/3 my-8 px-4">
                    <Img
                      fluid={data.elan.childImageSharp.fluid}
                      alt="Elan Eisner"
                    />
                    <p className="text-m lg:text-l mt-2">
                      <strong>Name:</strong> Elan Eisner
                    </p>
                    <p className="text-m lg:text-l mt-2">
                      <strong>Position:</strong> Chief of Staff{" "}
                    </p>
                    <p className="text-m lg:text-l mt-2">
                      <strong>Major: </strong> Finance
                    </p>
                    <p className="text-m lg:text-l mt-2">
                      <strong>Hometown: </strong> Denver Co.
                    </p>
                    <p className="text-m lg:text-l mt-2">
                      <strong>Fun fact about you:</strong> I fell out of a
                      window when I was 4 and was saved by a tree
                    </p>
                    <p className="text-m lg:text-l mt-2">
                      <strong>Hidden Talent:</strong> making Spotify playlists
                    </p>
                  </div>
                  <div className="w-full sm:w-full md:w-1/2 lg:w-1/3 my-8 px-4">
                    <Img
                      fluid={data.campbell.childImageSharp.fluid}
                      alt="Flo Campbell"
                    />
                    <p className="text-m lg:text-l mt-2">
                      <strong>Name:</strong> Flo Campbell
                    </p>
                    <p className="text-m lg:text-l mt-2">
                      <strong>Position:</strong> Sponsorship & Inclusivity{" "}
                    </p>
                    <p className="text-m lg:text-l mt-2">
                      <strong>Major: </strong> Accounting
                    </p>
                    <p className="text-m lg:text-l mt-2">
                      <strong>Hometown: </strong> Montreal QC.
                    </p>
                    <p className="text-m lg:text-l mt-2">
                      <strong>Best spot in MTL:</strong> Bronfman basement
                    </p>
                    <p className="text-m lg:text-l mt-2">
                      <strong>Hidden Talent:</strong> Searching Spotify for
                      hours and finding fire songs
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
