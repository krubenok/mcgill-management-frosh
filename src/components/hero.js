import React from "react";
import heroImg from "../images/mammoth.svg";

function Hero() {
  return (
    <div className="pt-24">
      <div className="container px-3 mx-auto flex flex-wrap flex-col md:flex-row items-center">
        <div className="flex flex-col w-full md:w-2/5 justify-center items-center md:items-start text-center md:text-left">
          <p className="uppercase tracking-loose w-full">
            Management Undergraduate Society presents
          </p>
          <h1 className="my-4 text-5xl font-bold leading-tight">FROSH AGE</h1>
          <p className="leading-normal text-2xl mb-8">August 27-30, 2021</p>
        </div>

        <div className="w-full md:w-3/5 py-6 text-center">
          <img className="h-64 md:w-full z-50" src={heroImg} alt="Mammoths" />
        </div>
      </div>
    </div>
  );
}

export default Hero;
