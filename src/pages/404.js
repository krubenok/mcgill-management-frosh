import React from "react";

import Header from "../components/header";
import Footer from "../components/footer";
import SEO from "../components/seo";
import abductionIllustration from "../images/abduction-illustration.svg";

function NotFoundPage() {
  return (
    <body className="leading-normal tracking-normal text-white gradient">
      <SEO title="404: Not Found" />

      <Header />

      <div>
        <img
          src={abductionIllustration}
          className="block mx-auto w-1/2"
          alt="Ghost getting abducted by aliens"
        />
        <h2 className="bg-yellow-400 text-2xl font-bold inline-block my-8 p-3">
          Looks like this page is a ghost that got abducted by aliens...
        </h2>
      </div>

      <Footer />
    </body>
  );
}

export default NotFoundPage;
