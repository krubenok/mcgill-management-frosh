import React, { useState } from "react";
import { loadStripe } from "@stripe/stripe-js";

let stripePromise;
const getStripe = () => {
  if (!stripePromise) {
    stripePromise = loadStripe("pk_live_g9cz0LNfGpGu5UwJdxlNtHpK");
  }
  return stripePromise;
};

const Checkout = () => {
  const redirectToCheckout = async (event) => {
    event.preventDefault();

    const stripe = await getStripe();
    const { error } = await stripe.redirectToCheckout({
      mode: "payment",
      lineItems: [{ price: "price_1JJsY4LFHUw5MI1lGDiYsB1i", quantity: 1 }],
      successUrl: `https://musfrosh.com/success`,
      cancelUrl: `https://musfrosh.com/cancelled`,
    });

    if (error) {
      console.warn("Error:", error);
    }
  };

  return (
    <button
      type="submit"
      className="hover:underline gradient text-white font-bold rounded-full my-6 py-4 px-8 shadow-lg"
      onClick={redirectToCheckout}
    >
      Hybrid Ticket - 135$
    </button>
  );
};

export default Checkout;
