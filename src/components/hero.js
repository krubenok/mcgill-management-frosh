import React from "react";
import heroImg from "../images/penguin.svg";

function Hero() {
  return (
    <div className="pt-24">
      <div className="container px-3 mx-auto flex flex-wrap flex-col md:flex-row items-center">
        <div className="flex flex-col w-full md:w-2/5 justify-center items-center md:items-start text-center md:text-left">
          <p className="uppercase tracking-loose w-full">
            Management Undergraduate Society presents
          </p>
          <h1 className="my-4 text-5xl font-bold leading-tight">
            Frosh of the Penguins
          </h1>
          <p className="leading-normal text-2xl mb-8">August 29-30</p>

          <a href="https://mcgill-orientation-week.eventus.io/login">
            <button
              type="submit"
              className="mx-auto lg:mx-0 hover:underline bg-white text-gray-800 font-bold rounded-full my-6 py-4 px-8 shadow-lg"
            >
              Register
            </button>
          </a>
        </div>

        <div className="w-full md:w-3/5 py-6 text-center">
          <img className="h-64 md:w-4/5 z-50" src={heroImg} />
        </div>
      </div>
    </div>
  );
}

export default Hero;
