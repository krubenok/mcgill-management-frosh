import React from "react";
import Header from "../components/header";
import Footer from "../components/footer";
import SEO from "../components/seo";
import CheckoutHybrid from "../components/checkoutHybrid";
import CheckoutOnline from "../components/checkoutOnline";

function BuyPage() {
  return (
    <body className="leading-normal tracking-normal text-white gradient">
      <SEO
        title="Buy"
        keywords={[`McGill`, `Management`, `Frosh`, `2021`, `Mammoth`]}
      />
      <Header />

      <section className="bg-white py-8">
        <div className="container max-w-5xl mx-auto m-8">
          <h2 className="w-full my-2 text-5xl font-bold leading-tight text-center text-gray-800">
            Purhcase your Tickets
          </h2>
          <div className="w-full mb-4">
            <div className="h-1 mx-auto gradient w-64 opacity-25 my-0 py-0 rounded-t"></div>
          </div>
          <br />
          <div className="p-6">
            <p className="text-gray-600 mb-8">
              Online tickets will consist one big online event for each day, and
              Hybrid will consist of a few in person and one online event per
              day.
            </p>
          </div>
          <div className="flex justify-center space-x-8 w-full mb-4">
            <div>
              <CheckoutHybrid />
            </div>
            <div>
              <CheckoutOnline />
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </body>
  );
}

export default BuyPage;
