import React from "react";
import Header from "../components/header";
import Footer from "../components/footer";
import SEO from "../components/seo";

function SchedulePage() {
  return (
    <body className="leading-normal tracking-normal text-white gradient">
      <SEO
        title="Frosh of the Penguins"
        keywords={[`McGill`, `Management`, `Frosh`, `2020`, `Penguins`]}
      />

      <Header />

      <section className="bg-white py-8">
        <div className="container max-w-5xl mx-auto m-8">
          <h2 className="w-full my-2 text-5xl font-bold leading-tight text-center text-gray-800">
            Schedule
          </h2>
          <div className="w-full mb-4">
            <div className="h-1 mx-auto gradient w-64 opacity-25 my-0 py-0 rounded-t"></div>
          </div>
          <br />
          <h3 className="text-3xl text-gray-800 font-bold leading-none mb-3">
            Stay tuned for updates regarding our schedule for Management Frosh
            2020!
          </h3>
        </div>
      </section>

      <Footer />
    </body>
  );
}

export default SchedulePage;
