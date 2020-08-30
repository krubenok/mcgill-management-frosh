import React from "react";
import SEO from "../components/seo";
import Header from "../components/header";
import Footer from "../components/footer";
// import Checkout from "../components/checkout";

function BuyShirtPage() {
  return (
    <body className="leading-normal tracking-normal text-white gradient">
      <SEO
        title="Buy"
        keywords={[`McGill`, `Management`, `Frosh`, `2020`, `Penguins`]}
      />

      {/* <Checkout url="https://froshofthepenguins.typeform.com/to/ZbC7fA1z" /> */}

      <Header />

      <section className="bg-white py-8">
        <div className="container max-w-5xl mx-auto m-8">
          <h2 className="w-full my-2 text-5xl font-bold leading-tight text-center text-gray-800">
            Uh oh!
          </h2>
          <div className="w-full mb-4">
            <div className="h-1 mx-auto gradient w-64 opacity-25 my-0 py-0 rounded-t"></div>
          </div>
          <br />
          <h3 className="text-3xl text-gray-800 font-bold leading-none mb-3">
            Ticket Purchase has now closed.
          </h3>
        </div>
      </section>
      <Footer />
    </body>
  );
}

export default BuyShirtPage;
