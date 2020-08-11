import React from "react";
import { StaticQuery } from "gatsby";
import Img from "gatsby-image";

export default () => (
  <StaticQuery
    query={graphql`
      query {
        frosh2: file(relativePath: { eq: "frosh-2.jpg" }) {
          childImageSharp {
            fluid {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    `}
    render={(data) => (
      <section className="bg-white py-8">
        <div className="container max-w-5xl mx-auto m-8">
          <h2 className="w-full my-2 text-5xl font-bold leading-tight text-center text-gray-800">
            Secure your spot for the adventure of a lifetime!
          </h2>
          <div className="w-full mb-4">
            <div className="h-1 mx-auto gradient w-64 opacity-25 my-0 py-0 rounded-t"></div>
          </div>

          <div className="flex items-center flex-wrap">
            <div className="w-full md:w-1/2 p-6">
              <p className="text-gray-600 mb-8">
                Join us August 29-30. Incoming students will have the
                opportunity to meet their classmates, interact with upper year
                students, and be welcomed into the Desautels community. Our
                leaders, coordinators, and staff cannot wait to meet you!
              </p>
              <p className="text-gray-600 mb-8">
                Register now for two days of exciting interactive events and
                bonding activities
              </p>
              <div className="flex justify-center md:justify-start">
                <a href="https://mcgill-orientation-week.eventus.io/login">
                  <button className="hover:underline gradient text-white font-bold rounded-full my-6 py-4 px-8 shadow-lg">
                    Register
                  </button>
                </a>
              </div>
            </div>
            <div className="w-full sm:w-1/2 p-6">
              <Img fluid={data.frosh2.childImageSharp.fluid} />
            </div>
          </div>
        </div>
      </section>
    )}
  />
);
