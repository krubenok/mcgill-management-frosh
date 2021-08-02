import React from "react";

function Cards() {
  return (
    <section className="bg-white py-8">
      <div className="container mx-auto flex flex-wrap pt-4 pb-12">
        <div className="w-full md:w-1/3 p-6 flex flex-col flex-grow flex-shrink">
          <div className="flex-1 bg-white rounded-t rounded-b-none overflow-hidden shadow">
            <p className="w-full text-gray-600 text-xs md:text-sm px-6 py-6">
              Accessibility Concerns?
            </p>
            <div className="w-full font-bold text-xl text-gray-800 px-6">
              Do you have any accessibility concerns for Management Frosh 2021?
              Let us know!
            </div>
          </div>
          <div className="flex-none mt-auto bg-white rounded-b rounded-t-none overflow-hidden shadow p-6">
            <div className="flex items-center justify-center md:justify-start">
              <a href="mailto:frosh@mus.mcgill.ca">
                <button className="mx-auto lg:mx-0 hover:underline gradient text-white font-bold rounded-full my-6 py-4 px-8 shadow-lg">
                  Email Us
                </button>
              </a>
            </div>
          </div>
        </div>

        <div className="w-full md:w-1/3 p-6 flex flex-col flex-grow flex-shrink">
          <div className="flex-1 bg-white rounded-t rounded-b-none overflow-hidden shadow">
            <p className="w-full text-gray-600 text-xs md:text-sm px-6 py-6">
              Have Questions?
            </p>
            <div className="w-full font-bold text-xl text-gray-800 px-6">
              We’d be happy to answer any questions you may have.
            </div>
          </div>
          <div className="flex-none mt-auto bg-white rounded-b rounded-t-none overflow-hidden shadow p-6">
            <div className="flex items-center justify-center md:justify-end">
              <a href="mailto:frosh@mus.mcgill.ca">
                <button className="mx-auto lg:mx-0 hover:underline gradient text-white font-bold rounded-full my-6 py-4 px-8 shadow-lg">
                  Let us know!
                </button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Cards;
