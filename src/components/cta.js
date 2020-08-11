import React from "react";

function CTA() {
  return (
    <section className="container mx-auto text-center py-6 mb-12">
      <h1 className="w-full my-2 text-5xl font-bold leading-tight text-center text-white">
        Ready? Sign up!
      </h1>
      <div className="w-full mb-4">
        <div className="h-1 mx-auto bg-white w-1/6 opacity-25 my-0 py-0 rounded-t"></div>
      </div>

      <a href="https://mcgill-orientation-week.eventus.io/login">
        <button
          type="submit"
          className="mx-auto lg:mx-0 hover:underline bg-white text-gray-800 font-bold rounded-full my-6 py-4 px-8 shadow-lg"
        >
          Register
        </button>
      </a>
    </section>
  );
}

export default CTA;
