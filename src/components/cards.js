import React from "react";

function Cards() {
  return (
    <section className="bg-white border-b py-8">
      <div className="container mx-auto flex flex-wrap pt-4 pb-12">
        <h3 className="w-full my-2 text-3xl font-bold leading-tight text-center text-gray-800">
          Text Cards
        </h3>
        <div className="w-full mb-4">
          <div className="h-1 mx-auto gradient w-64 opacity-25 my-0 py-0 rounded-t"></div>
        </div>

        <div className="w-full md:w-1/3 p-6 flex flex-col flex-grow flex-shrink">
          <div className="flex-1 bg-white rounded-t rounded-b-none overflow-hidden shadow">
            <a
              href="https://www.gatsbyjs.org/"
              className="flex flex-wrap no-underline hover:no-underline"
            >
              <p className="w-full text-gray-600 text-xs md:text-sm px-6">
                Blazing Fast
              </p>
              <div className="w-full font-bold text-xl text-gray-800 px-6">
                Static Progressive Web App
              </div>
              <p className="text-gray-800 text-base px-6 mb-5">
                Why Gatsby? Gatsby is a static PWA (Progressive Web App)
                generator. Gatsby loads only the critical HTML, CSS, data, and
                JavaScript so your site loads as fast as possible.
              </p>
            </a>
          </div>
          <div className="flex-none mt-auto bg-white rounded-b rounded-t-none overflow-hidden shadow p-6">
            <div className="flex items-center justify-start">
              <button className="mx-auto lg:mx-0 hover:underline gradient text-white font-bold rounded-full my-6 py-4 px-8 shadow-lg">
                Action
              </button>
            </div>
          </div>
        </div>

        <div className="w-full md:w-1/3 p-6 flex flex-col flex-grow flex-shrink">
          <div className="flex-1 bg-white rounded-t rounded-b-none overflow-hidden shadow">
            <a
              href="https://tailwindcss.com/"
              className="flex flex-wrap no-underline hover:no-underline"
            >
              <p className="w-full text-gray-600 text-xs md:text-sm px-6">
                Tailwind is different
              </p>
              <div className="w-full font-bold text-xl text-gray-800 px-6">
                State-of-the-art CSS Framework
              </div>
              <p className="text-gray-800 text-base px-6 mb-5">
                Instead of opinionated predesigned components, Tailwind provides
                low-level utility classes that let you build completely custom
                designs without ever leaving your HTML.
              </p>
            </a>
          </div>
          <div className="flex-none mt-auto bg-white rounded-b rounded-t-none overflow-hidden shadow p-6">
            <div className="flex items-center justify-center">
              <button className="mx-auto lg:mx-0 hover:underline gradient text-white font-bold rounded-full my-6 py-4 px-8 shadow-lg">
                Action
              </button>
            </div>
          </div>
        </div>

        <div className="w-full md:w-1/3 p-6 flex flex-col flex-grow flex-shrink">
          <div className="flex-1 bg-white rounded-t rounded-b-none overflow-hidden shadow">
            <a
              href="#"
              className="flex flex-wrap no-underline hover:no-underline"
            >
              <p className="w-full text-gray-600 text-xs md:text-sm px-6">
                Open-Source
              </p>
              <div className="w-full font-bold text-xl text-gray-800 px-6">
                Coded by <a href="https://twitter.com/Sm0keDev">Sm0ke</a>{" "}
              </div>
              <p className="text-gray-800 text-base px-6 mb-5">
                The source code is released under a license in which the
                copyright holder grants users the rights to study, change, and
                distribute the software to anyone and for any purpose.
              </p>
            </a>
          </div>
          <div className="flex-none mt-auto bg-white rounded-b rounded-t-none overflow-hidden shadow p-6">
            <div className="flex items-center justify-end">
              <button className="mx-auto lg:mx-0 hover:underline gradient text-white font-bold rounded-full my-6 py-4 px-8 shadow-lg">
                Action
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Cards;
