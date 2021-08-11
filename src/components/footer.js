import React from "react";
import Logo from "../images/logotext.svg";
import { StaticQuery, graphql } from "gatsby";
import Img from "gatsby-image";

export default () => (
  <StaticQuery
    query={graphql`
      query {
        mus: file(relativePath: { eq: "mus.png" }) {
          childImageSharp {
            fluid {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    `}
    render={(data) => (
      <footer className="bg-white static bottom-0 left-0 w-full">
        <div className="container mx-auto  px-8 bottom-0">
          <div className="w-full flex flex-col content-around md:flex-row py-6">
            <div className="flex-1 mx-4 pr-8">
              <a
                className="text-orange-600 no-underline hover:no-underline font-bold text-2xl lg:text-4xl"
                href="#"
              >
                <img src={Logo} />
              </a>
            </div>

            <div className="flex-1">
              <p className="uppercase text-gray-500 md:mb-6">Links</p>
              <ul className="list-reset mb-6">
                <li className="mt-2 inline-block mr-2 md:block md:mr-0">
                  <a
                    href="/about"
                    className="no-underline hover:underline text-gray-800 hover:text-orange-500"
                  >
                    FAQ
                  </a>
                </li>
                <li className="mt-2 inline-block mr-2 md:block md:mr-0">
                  <a
                    href="mailto:frosh@mus.mcgill.ca"
                    className="no-underline hover:underline text-gray-800 hover:text-orange-500"
                  >
                    Help
                  </a>
                </li>
              </ul>
            </div>
            <div className="flex-1">
              <p className="uppercase text-gray-500 md:mb-6">Social</p>
              <ul className="list-reset mb-6">
                <li className="mt-2 inline-block mr-2 md:block md:mr-0">
                  <a
                    href="https://www.facebook.com/managementfrosh"
                    className="no-underline hover:underline text-gray-800 hover:text-orange-500"
                  >
                    Facebook
                  </a>
                </li>
                <li className="mt-2 inline-block mr-2 md:block md:mr-0">
                  <a
                    href="https://www.instagram.com/managementfrosh/"
                    className="no-underline hover:underline text-gray-800 hover:text-orange-500"
                  >
                    Instagram
                  </a>
                </li>
              </ul>
            </div>

            <div className="flex-1 mx-4 max-w-xs item-center">
              <a
                href="https://www.mus.mcgill.ca"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Img fluid={data.mus.childImageSharp.fluid} />
              </a>
            </div>
          </div>
        </div>
      </footer>
    )}
  />
);
