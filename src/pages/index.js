import React from "react";

import Header from "../components/header";
import Hero from "../components/hero";
import Waves from "../components/waves";
import Features from "../components/features";
import Cards from "../components/cards";
import Pricing from "../components/pricing";
import WavesTop from "../components/wavestop";
import CTA from "../components/cta";
import Footer from "../components/footer";
import SEO from "../components/seo";

function IndexPage() {
  return (
    <body className="leading-normal tracking-normal text-white gradient">
      <SEO
        title="Frosh of the Penguins"
        keywords={[`McGill`, `Management`, `Frosh`, `2020`, `Penguins`]}
      />

      <Header />

      <Hero />

      <Waves />

      <Features />

      <Cards />

      <WavesTop />

      <CTA />

      <Footer />
    </body>
  );
}

export default IndexPage;
