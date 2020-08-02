import React from "react";

function CTA() {
  return (
    <section className="container mx-auto text-center py-6 mb-12">
      <h1 className="w-full my-2 text-5xl font-bold leading-tight text-center text-white">
        You Should click this button
      </h1>
      <div className="w-full mb-4">
        <div className="h-1 mx-auto bg-white w-1/6 opacity-25 my-0 py-0 rounded-t"></div>
      </div>

      <h3 className="my-4 text-3xl leading-tight">
        Soemthing about registration?
      </h3>

      <button
        type="submit"
        className="mx-auto lg:mx-0 hover:underline bg-white text-gray-800 font-bold rounded-full my-6 py-4 px-8 shadow-lg"
      >
        Register Now!
      </button>
    </section>
  );
}

export default CTA;
