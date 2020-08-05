import React from "react";
import { loadStripe } from "@stripe/stripe-js";

const stripePromise = loadStripe("pk_live_g9cz0LNfGpGu5UwJdxlNtHpK");

const redirectToCheckout = async (event) => {
  event.preventDefault();
  const stripe = await stripePromise;
  const { error } = await stripe.redirectToCheckout({
    lineItems: [{ price: "price_1HCb68LFHUw5MI1lX0MKQgeA", quantity: 1 }],
    mode: "payment",
    successUrl: `https://musfrosh.com/success`,
    cancelUrl: `https://musfrosh.com/canceled`,
  });

  if (error) {
    console.warn("Error:", error);
  }
};

const Checkout = () => {
  return (
    <button
      className="mx-auto lg:mx-0 hover:underline gradient text-white font-bold rounded-full my-6 py-4 px-8 shadow-lg"
      onClick={redirectToCheckout}
    >
      {" "}
      Pay now - CAD $18
    </button>
  );
};

export default Checkout;
