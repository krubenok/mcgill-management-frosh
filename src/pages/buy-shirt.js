import React from "react";
import SEO from "../components/seo";
import Checkout from "../components/checkout";

function BuyShirtPage() {
  return (
    <body className="leading-normal tracking-normal text-white gradient">
      <SEO
        title="Buy"
        keywords={[`McGill`, `Management`, `Frosh`, `2020`, `Penguins`]}
      />

      <Checkout url="https://froshofthepenguins.typeform.com/to/ZbC7fA1z" />
    </body>
  );
}

export default BuyShirtPage;
