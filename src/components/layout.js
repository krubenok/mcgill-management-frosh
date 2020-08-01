import React from "react";
import PropTypes from "prop-types";
import { StaticQuery, graphql } from "gatsby";

import Navigation from "./navigation";
import Hero from "./hero";
import Waves from "./waves";
import Features from "./features";
import Cards from "./cards";
import Pricing from "./pricing";
import WavesTop from "./wavestop";
import CTA from "./cta";
import Footer from "./footer";

function Layout({ children }) {
  return (
    <StaticQuery
      query={graphql`
        query SiteTitleQuery {
          site {
            siteMetadata {
              title
              github
              blog
            }
          }
        }
      `}
      render={(data) => (
        <body className="leading-normal tracking-normal text-white gradient">
          {children}

          <Navigation />

          <Hero />

          <Waves />

          <Features />

          <Cards />

          <Pricing />

          <WavesTop />

          <CTA />

          <Footer />
        </body>
      )}
    />
  );
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
